import React from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
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
          <Link to='/cart'>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Кошик (0)</span>
          </Link>
        </div>
      </div>
      <div className={classes.headerLogo}>
        <Link to='/home'>
          <h1>Просто.</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header
