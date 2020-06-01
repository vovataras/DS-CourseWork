import React from 'react'
import classes from '../Cart.module.css'
import { Link } from 'react-router-dom'
import { path } from '../../../paths'


const CartItem = (props) => {
  let imgLink = 'https://freesvg.org/img/Placeholder.png'

  return (
    <div className={classes.cartItem}>
      <div className={classes.itemImage}>
        <img src={imgLink} alt='' />
      </div>
      <div className={classes.itemDescription}>
        <h4>Stealth Bomber Jacket - Navy</h4>
        <div>Small</div>
        <div>Видалити</div>
      </div>
      <div className={classes.itemPrice}>$1,599.95</div>
      <div className={classes.itemQuantity}>1</div>
      <div className={classes.itemTotal}>$1,599.95</div>
    </div>
  )
}

export default CartItem