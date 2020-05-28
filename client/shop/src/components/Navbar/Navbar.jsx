import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to='/home' activeClassName={classes.active}>
            Головна
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/accessories' activeClassName={classes.active}>
            Аксесуари
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/footwear' activeClassName={classes.active}>
            Взуття
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/pants' activeClassName={classes.active}>
            Штани
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/shirts' activeClassName={classes.active}>
            Сорочки
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/tshirts' activeClassName={classes.active}>
            Футболки
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/shorts' activeClassName={classes.active}>
            Шорти
          </NavLink>
        </div>
    </nav>
  )
}

export default Navbar
