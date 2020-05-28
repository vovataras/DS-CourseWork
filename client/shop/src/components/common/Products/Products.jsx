import React from 'react'
import classes from './Products.module.css'
import { NavLink, withRouter } from 'react-router-dom'
import ProductItem from '../ProductItem/ProductItem'

const Products = (props) => {
  // props.match.params.re

  let ProductItems = props.state.map((p) => (
    <ProductItem image={p.images[0]} name={p.name} price={p.price} id={p.id} />
  ))

  return (
    <div className={classes.products}>
      <h2>{props.title}</h2>
      <div className={classes.productsContainer}>
        {ProductItems}
      </div>
    </div>
  )
}

// export default withRouter(Products)
export default Products
