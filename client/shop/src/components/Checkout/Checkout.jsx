import React from 'react'
import classes from './Checkout.module.css'
import { Link } from 'react-router-dom'
import { path } from '../../paths'

const Checkout = (props) => {
  let Content = <></>

  if (props.cart.productsCount >= 1) {
    Content = FilledCart
  } else if (props.isSent) {
    Content = OrderSent
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

const OrderSent = (props) => {
  return (
    <div className={classes.emptyCart}>
      <p>Замовлення успішно оформлено.</p>
      <p>Вас буде перенаправлено на головну сторінку.</p>
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
  const onChangePhone = (event) => {
    let value = event.target.value
    props.updatePhone(value)
  }
  const onChangeEmail = (event) => {
    let value = event.target.value
    props.updateEmail(value)
  }
  const onChangeName = (event) => {
    let value = event.target.value
    props.updateName(value)
  }
  const onChangeSurname = (event) => {
    let value = event.target.value
    props.updateSurname(value)
  }
  const onChangeAddress = (event) => {
    let value = event.target.value
    props.updateAddress(value)
  }
  const onChangeCity = (event) => {
    let value = event.target.value
    props.updateCity(value)
  }
  const onChangeIndex = (event) => {
    let value = event.target.value
    props.updateIndex(value)
  }

  const onClickConfirm = () => {
    props.sendOrder()
  }

  return (
    <div className={classes.filledCart}>
      <div className={classes.contact}>
        <h3>Контактна інформація</h3>
        <div>
          <input
            onChange={onChangePhone}
            value={props.checkout.phone}
            type='tel'
            placeholder='Телефон'
            required
          />
        </div>
        <div>
          <input
            onChange={onChangeEmail}
            value={props.checkout.email}
            type='email'
            placeholder='Email'
          />
        </div>
      </div>
      <div className={classes.address}>
        <h3>Адреса доставки</h3>
        <div className={classes.addressFirstRow}>
          <input
            onChange={onChangeName}
            value={props.checkout.name}
            type='text'
            placeholder="Ім'я"
          />
          <input
            onChange={onChangeSurname}
            value={props.checkout.surname}
            type='text'
            placeholder='Прізвище'
          />
        </div>
        <div className={classes.addressSecondRow}>
          <input
            onChange={onChangeAddress}
            value={props.checkout.address}
            type='text'
            placeholder='Адреса'
          />
        </div>
        <div className={classes.addressThirdRow}>
          <input
            onChange={onChangeCity}
            value={props.checkout.city}
            type='text'
            placeholder='Місто'
          />
          <input
            onChange={onChangeIndex}
            value={props.checkout.index}
            type='text'
            placeholder='Поштовий індекс'
          />
        </div>
      </div>
      <div className={classes.buttons}>
        <div>
          <Link className={classes.btnBack} to={path.cart}>
            Повернутись до кошика
          </Link>
        </div>
        <div>
          <button onClick={onClickConfirm} className={classes.btnConfirm}>
            Оформити замовлення
          </button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
