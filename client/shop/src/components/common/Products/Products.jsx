import React from 'react'
import classes from './Products.module.css'
import { Link } from 'react-router-dom'
import ProductItem from '../ProductItem/ProductItem'

const Products = (props) => {
  let ProductItems = props.state.map((p) => (
    <Link to={'/products/' + p.category + '/' + p.product_id } key={p.product_id}>
      <ProductItem
        image={p.image}
        name={p.name}
        price={p.price}
        id={p.product_id}
      />
    </Link>
  ))

  return (
      <div className={classes.productsContainer}>{ProductItems}</div>
  )
}

export default Products
