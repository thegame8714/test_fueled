import React from 'react'
import './Header.css'
import { useCartContext } from '../state'

const Header = () => {
  const {
    state: { cart }
  } = useCartContext()
  return (
    <div className="header">
      <span className="header-title">
        order<span className="header-title-form">form</span>
      </span>
      <span className="header-cart">
        <span className="header-cart-text">Cart</span>
        <span className="header-cart-itmes">
          <span className="header-cart-items-text" data-testid="items-count">
            {cart.totalItems}
          </span>
        </span>
      </span>
    </div>
  )
}

export default Header
