import React from 'react'
import classes from './Products.module.css'
import { Link } from 'react-router-dom'
import ProductItem from '../ProductItem/ProductItem'

const Products = (props) => {
  let ProductItems = props.state.map((p) => (
    <Link to={'/products/' + props.category + '/' + p.id }>
    {/* <Link to={'/' + props.category + '/product/' + p.id}> */}
      <ProductItem
        image={p.images[0]}
        name={p.name}
        price={p.price}
        id={p.id}
      />
    </Link>
  ))

  return (
    <div className={classes.products}>
      <h2>{props.title}</h2>
      <div className={classes.productsContainer}>{ProductItems}</div>
    </div>
  )
}

export default Products
