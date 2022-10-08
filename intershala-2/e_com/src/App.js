import React from 'react'
import Cart from './components/Cart'
import Product_page from './components/Product_page'
import { CartProvider } from 'react-use-cart'

const App = () => {
  return (
    <>
    
     <CartProvider>
    <Cart />
      <Product_page />
      </CartProvider> 
      
    </>
  )
}

export default App