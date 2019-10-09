import React from 'react'
import './App.css'
import Header from './header/Header'
import Main from './main/Main'
import { CartContextProvider } from './state/index.jsx'

function App() {
  return (
    <CartContextProvider>
      <header className="cart-header">
        <Header />
      </header>
      <Main />
    </CartContextProvider>
  )
}

export default App
