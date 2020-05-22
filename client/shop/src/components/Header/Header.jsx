import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.topBar}>
        <div className={classes.search}>
          <FontAwesomeIcon icon={faSearch} />
          <span>Search</span>
        </div>
        <div className={classes.cart}>
          <FontAwesomeIcon icon={faShoppingCart} />
        <span>Cart(0)</span>
        </div>
      </div>
      <div className={classes.headerLogo}>
        <NavLink to='/home' activeClassName={classes.active}>
          <h1>Просто.</h1>
        </NavLink>
      </div>
    </header>
  )
}

export default Header
