import React from 'react'
import classes from './ProductItem.module.css'

const ProductItem = (props) => {
  return (
    <div className={classes.productItem}>
      <div className={classes.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes.info}>
        <div className={classes.productName}>{props.name}</div>
        <div className={classes.price}>₴{props.price}</div>
      </div>
    </div>
  )
}

export default ProductItem
