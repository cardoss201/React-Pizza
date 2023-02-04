import React from 'react'
import { Link } from 'react-router-dom'

import emptyCart from '../../assets/img/empty-cart.png'

const CartEmpty: React.FC = () => {
  return (
    <div className='cart cart--empty'>
      <h2>Cart is empty 😕</h2>
      <p>
        Seems that you haven't picked any pizza yet 😣
        <br />
        To order pizza go back to the main page and pick one of our pizza's
      </p>
      <img src={emptyCart} alt='Empty cart' />
      <Link to='/' className='button button--black'>
        <span>Go Back</span>
      </Link>
    </div>
  )
}

export default CartEmpty
