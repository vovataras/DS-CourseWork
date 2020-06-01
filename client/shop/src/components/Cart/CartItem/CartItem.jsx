import React from 'react'
import classes from '../Cart.module.css'
import { Link } from 'react-router-dom'
import { path } from '../../../paths'

const CartItem = (props) => {
  let imgLink = 'https://freesvg.org/img/Placeholder.png'

  return (
    <div className={classes.cartItem}>
      <div className={classes.itemImage}>
        <img src={props.product.image} alt='' />
      </div>
      <div className={classes.itemDescription}>
        <h4>{props.product.name}</h4>
        <div>{props.product.size}</div>
        <div>Видалити</div>
      </div>
      <div className={classes.itemPrice}>₴{props.product.price}</div>
      <div className={classes.itemQuantity}>{props.product.quantity}</div>
      <div className={classes.itemTotal}>₴{props.product.totalPrice}</div>
    </div>
  )
}

export default CartItem
