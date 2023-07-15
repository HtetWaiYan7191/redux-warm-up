import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import CartsContainer from './components/CartsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal, fetchCartItems } from './features/cart/cartSlice'
import Modal from './components/Modal'

const App = () => {
  const { cartItems, isLoading } = useSelector((state) => state.carts);
  const {isOpen}= useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  useEffect(() => {
    dispatch(fetchCartItems())
    console.log('hello')
  }, []);

  if(isLoading) {
    return (
      <div className='loading'>
      <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div>
      {isOpen && <Modal/>}
      <Navbar/>
      <CartsContainer/>
    </div>
  )
}

export default App
