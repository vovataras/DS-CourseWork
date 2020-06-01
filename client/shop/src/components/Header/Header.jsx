import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import {path } from '../../paths'

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.topBar}>
        <div className={classes.search}>
          <FontAwesomeIcon icon={faSearch} />
          <span>Search</span>
        </div>
        <div className={classes.cart}>
          <Link to={path.cart}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Кошик ({props.productsCount})</span>
          </Link>
        </div>
      </div>
      <div className={classes.headerLogo}>
        <Link to={path.home}>
          <h1>Просто.</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header
