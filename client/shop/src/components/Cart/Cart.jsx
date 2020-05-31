import React from 'react'
import classes from './Cart.module.css'
import { Link } from 'react-router-dom'
import { path } from '../../paths'

const Cart = (props) => {
  return (
    <div className={classes.cartPage}>
      <h2>Кошик для покупок</h2>
      <div className={classes.emptyCart}>
        <p>Зараз ваш кошик порожній.</p>
        <p>
          Продовжуйте перегляд <Link to={path.products}>тут</Link>.
        </p>
      </div>
    </div>
  )
}

export default Cart
