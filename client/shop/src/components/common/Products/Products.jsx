import React from 'react'
import classes from './Products.module.css'
import { NavLink } from 'react-router-dom'
import ProductItem from '../ProductItem/ProductItem'

const Products = (props) => {
  let imgLink = 'https://freesvg.org/img/Placeholder.png'

  return (
    <div className={classes.products}>
      <h2>{props.title}</h2>
      <div className={classes.productsContainer}>
        <ProductItem image={imgLink} name='Name1' price='999$' />
        <ProductItem image={imgLink} name='Name2' price='999$' />
        <ProductItem image={imgLink} name='Name3' price='999$' />
        <ProductItem image={imgLink} name='Name4' price='899$' />
        <ProductItem image={imgLink} name='Name5' price='799$' />
        <ProductItem image={imgLink} name='Name6' price='499$' />
        <ProductItem image={imgLink} name='Name7' price='599$' />
        <ProductItem image={imgLink} name='Name8' price='399$' />
        <ProductItem image={imgLink} name='Name9' price='299$' />
      </div>
    </div>
  )
}

export default Products
