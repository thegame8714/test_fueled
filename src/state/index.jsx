import React, { useReducer, useContext, createContext } from 'react'

const initialState = {
  cart: {
    totalItems: 3,
    items: [
      {
        id: 434556256,
        name: 'Jet Ski',
        imagePath: './jetsky.png',
        pricePerItem: '1500',
        currency: 'USD',
        quantity: 1
      },
      {
        id: 345245865,
        name: 'Bubble Wrap',
        imagePath: './bubble_wrap.png',
        pricePerItem: '440',
        currency: 'USD',
        quantity: 1
      },
      {
        id: 987123654,
        name: 'Crock Pot',
        imagePath: './croc_pot.jpeg',
        pricePerItem: '56',
        currency: 'USD',
        quantity: 1
      }
    ],
    tax: '0',
    subtotal: '1996',
    additionalComments: ''
  }
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      const updatedItems = state.cart.items.filter(
        item => item.id !== action.itemId
      )
      return {
        ...state,
        cart: {
          ...state.cart,
          items: updatedItems,
          totalItems: updatedItems.reduce(
            (total, item) => total + parseInt(item.quantity),
            0
          ),
          subtotal: updatedItems.reduce((total, item) => {
            const totalPerItem =
              parseInt(item.quantity) * parseInt(item.pricePerItem)
            return total + totalPerItem
          }, 0)
        }
      }
    case 'UPDATE_ITEM_QUANTITY':
      const newItems = state.cart.items.map(item => {
        if (item.id === action.itemId) {
          item.quantity = action.newQuantity
        }
        return item
      })

      return {
        ...state,
        cart: {
          ...state.cart,
          items: newItems
        }
      }
    case 'UPDATE_ITEM':
      return {
        ...state,
        cart: {
          ...state.cart,
          totalItems: state.cart.items.reduce(
            (total, item) => total + parseInt(item.quantity),
            0
          ),
          subtotal: state.cart.items.reduce((total, item) => {
            const totalPerItem =
              parseInt(item.quantity) * parseInt(item.pricePerItem)
            return total + totalPerItem
          }, 0)
        }
      }
    case 'UPDATE_ADDITIONAL_COMMENTS':
      return {
        ...state,
        cart: {
          ...state.cart,
          additionalComments: action.newAdditionalComments
        }
      }
    default:
      throw new Error()
  }
}

const CartContext = createContext({
  state: initialState,
  dispatch: () => undefined
})

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => useContext(CartContext)

export { useCartContext, CartContextProvider }
