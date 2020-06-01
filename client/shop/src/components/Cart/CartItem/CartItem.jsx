import React from 'react'
import classes from '../Cart.module.css'
import { Link } from 'react-router-dom'
import { path } from '../../../paths'

const CartItem = (props) => {
  let imgLink = 'https://freesvg.org/img/Placeholder.png'
  let productLink =
    '/products/' + props.product.category + '/' + props.product.product_id

  let onRemoveProduct = () => {
    console.log(props.product.unique_id)
    props.removeProduct(props.product.unique_id)
  }

  let onChangeProductQuantity = (event) => {
    let newQuantity = event.target.value
    // alert(newQuantity)
    props.updateProductQuantity(props.product.unique_id, newQuantity)
  }

  return (
    <div className={classes.cartItem}>
      <div className={classes.itemImage}>
        <Link to={productLink}>
          <img src={props.product.image} alt='' />
        </Link>
      </div>
      <div className={classes.itemDescription}>
        <h4>
          <Link to={productLink}>{props.product.name}</Link>
        </h4>
        <div>{props.product.size}</div>
        <div className={classes.removeItem} onClick={onRemoveProduct}>
          Видалити
        </div>
      </div>
      <div className={classes.itemPrice}>₴{props.product.price}</div>
      <div className={classes.itemQuantity}>
        <input
          onChange={onChangeProductQuantity}
          type='number'
          min='1'
          value={props.product.quantity}
        />
      </div>
      <div className={classes.itemTotal}>₴{props.product.totalPrice}</div>
    </div>
  )
}

export default CartItem
