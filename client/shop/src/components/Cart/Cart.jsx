import React from 'react'
import classes from './Cart.module.css'
import { Link } from 'react-router-dom'
import { path } from '../../paths'
import CartItem from './CartItem/CartItem'

const Cart = (props) => {
  let Content = <></>

  console.log(props.cart.productsCount)
  if (props.cart.productsCount >= 1) {
    Content = FilledCart
  } else {
    Content = EmptyCart
  }

  return (
    <div className={classes.cartPage}>
      <h2>Кошик для покупок</h2>
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
  let CartItems = props.cart.products.map((p) => (
    <CartItem
      product={p}
      key={p.unique_id}
      removeProduct={props.removeProduct}
      updateProductQuantity={props.updateProductQuantity}
    />
  ))

  const onChangeComment = (event) => {
    let newComment = event.target.value
    props.updateComment(newComment)
  }

  return (
    <div className={classes.filledCart}>
      <div className={classes.products}>
        <div className={classes.productsHeader}>
          <span className={classes.productH}>Продукт</span>
          <span className={classes.priceH}>Ціна</span>
          <span className={classes.quantityH}>Кількість</span>
          <span className={classes.totalH}>Загалом</span>
        </div>
        <div className={classes.productsContainer}>{CartItems}</div>
      </div>
      <div className={classes.cartFooter}>
        <div className={classes.comment}>
          <div>
            <label htmlFor='comment'>Спеціальні інструкції для продавця</label>
          </div>
          <div>
            <textarea
              onChange={onChangeComment}
              id='comment'
              value={props.comment}
            />
          </div>
        </div>
        <div className={classes.bill}>
          <div className={classes.totalPrice}>Загалом ₴{props.cart.total}</div>
          <div className={classes.buttons}>
            <Link to={path.products} className={classes.btnContinue}>
              Продовжити покупки
            </Link>
            <Link to={path.checkOut} className={classes.btnCheckOut}>
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
