import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import {path} from '../../paths'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to={path.home} activeClassName={classes.active}>
            Головна
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to={path.accessories} activeClassName={classes.active}>
            Аксесуари
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to={path.footwear} activeClassName={classes.active}>
            Взуття
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to={path.pants} activeClassName={classes.active}>
            Штани
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to={path.shirts} activeClassName={classes.active}>
            Сорочки
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to={path.tshirts} activeClassName={classes.active}>
            Футболки
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to={path.shorts} activeClassName={classes.active}>
            Шорти
          </NavLink>
        </div>
    </nav>
  )
}

export default Navbar
