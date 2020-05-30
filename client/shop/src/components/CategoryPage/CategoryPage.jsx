import React from 'react'
// import classes from './CategoryPage.module.css'
import Products from '../common/Products/Products'

const CategoryPage = (props) => {

  return (
    <div className={classes.categoryPage}>
      <h2>{props.title}</h2>
      <Products state={props.state}/>
    </div>
  )
}

export default CategoryPage
