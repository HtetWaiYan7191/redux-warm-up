import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Carts from './Carts'
import { clearCart} from '../features/cart/cartSlice';
import { openModal} from '../features/modal/modalSlice';

const CartsContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  if(amount < 1 ) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className='cart'>
    <header>
      <h2>your bag</h2>
    </header>
    <div>
      {cartItems.map((item) => {
        return <Carts key={item.id} {...item} />;
      })}
    </div>
    <footer>
      <hr />
      <div className='cart-total'>
        <h4>
          total <span>${total.toFixed(2)}</span>
        </h4>
      </div>
      <button className='btn clear-btn' onClick={() => dispatch(openModal())} >
        clear cart
      </button>
    </footer>
  </section>
  )
}

export default CartsContainer
