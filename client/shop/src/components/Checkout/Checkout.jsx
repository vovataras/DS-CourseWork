import React from 'react'
import classes from './Checkout.module.css'
import { Link } from 'react-router-dom'
import { path } from '../../paths'

const Checkout = (props) => {
  let Content = <></>

  // console.log(props.cart.productsCount)
  if (props.cart.productsCount >= 1) {
  Content = FilledCart
  } else {
    Content = EmptyCart
  }

  return (
    <div className={classes.checkoutPage}>
      <h2>Оформлення замовлення</h2>
      <Content {...props} />
    </div>
  )
}

const EmptyCart = (props) => {
  return (
    <div className={classes.emptyCart}>
      <p>Зараз ваш кошик порожній.</p>
      <p>
        Продовжуйте перегляд <Link to={path.products}>тут</Link>.
      </p>
    </div>
  )
}

const FilledCart = (props) => {
  return (
    <div className={classes.filledCart}>
      <div className={classes.contact}>
        <h3>Контактна інформація</h3>
        <div>
          <input type='tel' placeholder='Телефон' required />
        </div>
        <div>
          <input type='email' placeholder='Email' />
        </div>
      </div>
      <div className={classes.address}>
        <h3>Адреса доставки</h3>
        <div className={classes.addressFirstRow}>
          <input type='text' placeholder="Ім'я" />
          <input type='text' placeholder='Прізвище' />
        </div>
        <div className={classes.addressSecondRow}>
          <input type='text' placeholder='Адреса' />
        </div>
        <div className={classes.addressThirdRow}>
          <input type='text' placeholder='Місто' />
          <input type='text' placeholder='Поштовий індекс' />
        </div>
      </div>
      <div className={classes.buttons}>
        <div>
          <Link className={classes.btnBack} to={path.cart}>Повернутись до кошика</Link>
        </div>
        <div>
          <button className={classes.btnConfirm}>Оформити замовлення</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
