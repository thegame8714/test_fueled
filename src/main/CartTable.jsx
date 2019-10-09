import React from 'react'
import './CartTable.css'
import { useCartContext } from '../state'

const currencyToSymbol = currency => {
  const currenciesToSymbol = {
    USD: '$',
    GBP: '£',
    EUR: '€'
  }

  return currenciesToSymbol[currency] || '$'
}

const CartTable = () => {
  const {
    state: {
      cart: { items }
    },
    dispatch
  } = useCartContext()

  const onRemoveClick = itemId => {
    dispatch({
      type: 'REMOVE_ITEM',
      itemId
    })
  }

  const onUpdateItem = () => {
    dispatch({
      type: 'UPDATE_ITEM'
    })
  }

  const onChange = (e, itemId) => {
    const isNumber = new RegExp(/^[0-9]*$/)
    const newValue = e.target.value
    if (isNumber.test(newValue)) {
      dispatch({
        type: 'UPDATE_ITEM_QUANTITY',
        itemId,
        newQuantity: e.target.value
      })
    }
  }

  return (
    <div data-testid="cart" className="cart">
      <div className="thead">
        <div className="tr">
          <span className="th"></span>
          <span className="th product_cell">Product Name</span>
          <span className="th">Price</span>
          <span className="th">Quantity</span>
          <span className="th">Remove</span>
        </div>
      </div>
      {items.length > 0 && (
        <div className="tbody">
          {items.map((item, index) => (
            <div className="tr" key={item.id}>
              <span className="td product_image">
                <img src={item.imagePath} alt={item.name} />
              </span>
              <span className="td product_cell">
                <div className="product_name">{item.name}</div>
                <div className="product_id">{item.id}</div>
              </span>
              <span className="td">{`${currencyToSymbol(item.currency)}${
                item.pricePerItem
              }`}</span>
              <span className="td">
                <label htmlFor={`quantity-item-${index}`} />
                <input
                  id={`quantity-item-${item.id}`}
                  className="product_quantity"
                  value={item.quantity}
                  onChange={e => onChange(e, item.id)}
                  data-testid={`quantity-item-${index}`}
                />
                <button
                  className="product_update"
                  data-testid={`update-quantity-${index}`}
                  onClick={() => onUpdateItem()}
                >
                  Update
                </button>
              </span>
              <span className="td">
                <button
                  className="product_remove"
                  onClick={() => onRemoveClick(item.id)}
                  data-testid={`remove-item-${index}`}
                >
                  <span></span>
                </button>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CartTable
