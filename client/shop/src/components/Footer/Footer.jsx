import React from 'react'
import classes from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import {path} from '../../paths'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.topBar}>
        <div className={classes.links}>
          <h3>Посилання</h3>
          <div className={classes.linkItem}>
            <NavLink to={path.search}>
              Пошук
            </NavLink>
          </div>
          <div className={classes.linkItem}>
            <NavLink to='/contact-us'>
              Зв'яжіться з нами
            </NavLink>
          </div>
        </div>
        <div className={classes.subscribe}>
          <h3>Будьте в курсі</h3>
          <p>Акції, нові товари та розпродажі. Безпосередньо у вашу поштову скриньку.</p>
          <div className={classes.form}>
            <input type="text" placeholder="Ваш email"/>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className={classes.footerInfo}>
        <span>Просто. 2020.</span>
      </div>
    </footer>
  )
}

export default Footer
