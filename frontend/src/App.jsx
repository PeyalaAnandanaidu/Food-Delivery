import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import placeOrder from './pages/placeOrder/placeOrder'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/placeorder' element={<placeOrder/>} />
      </Routes>
    </div>
  )
}

export default App