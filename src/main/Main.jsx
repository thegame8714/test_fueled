import React from 'react'
import './Main.css'
import CartTable from './CartTable'
import Footer from './Footer'

const Main = () => (
  <div className="main">
    <div className="intro">
      <span className="title" data-testid="title">
        Your Cart
      </span>
      <span className="breadcrumb" data-testid="breadcrumb">
        Home → Checkout
      </span>
    </div>
    <CartTable />
    <Footer />
  </div>
)

export default Main
