import React from 'react'
import classes from './Cart.module.css'
import { Link } from 'react-router-dom'
import { path } from '../../paths'

const Cart = (props) => {
  return (
    <div className={classes.cartPage}>
      <h2>Кошик для покупок</h2>
      <div className={classes.emptyCart}>
        <p>Зараз ваш кошик порожній.</p>
        <p>
          Продовжуйте перегляд <Link to={path.products}>тут</Link>.
        </p>
      </div>
      <div className={classes.filledCart}>
        <div className={classes.products}>
          <div className={classes.productsHeader}>
            <span className={classes.productH}>Продукт</span>
            <span className={classes.priceH}>Ціна</span>
            <span className={classes.quantityH}>Кількість</span>
            <span className={classes.totalH}>Загалом</span>
          </div>
          <div className={classes.productsContainer}>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className={classes.cartFooter}>
          <div className={classes.comment}>
            <div>
              <label htmlFor='comment'>Спеціальні інструкції для продавця</label>
            </div>
            <div>
              <textarea id='comment'></textarea>
            </div>
          </div>
          <div className={classes.bill}>
            <div className={classes.totalPrice}>Загалом ₴1599.95</div>
            <div className={classes.buttons}>
              <Link to={path.products} className={classes.btnContinue}>Продовжити покупки</Link>
              <Link to={path.checkOut}className={classes.btnCheckOut}>Check Out</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CartItem = () => {
  let imgLink = 'https://freesvg.org/img/Placeholder.png'

  return (
    <div className={classes.cartItem}>
      <div className={classes.itemImage}>
        <img src={imgLink} alt='' />
      </div>
      <div className={classes.itemDescription}>
        <h4>Stealth Bomber Jacket - Navy</h4>
        <div>Small</div>
        <div>Видалити</div>
      </div>
      <div className={classes.itemPrice}>$1,599.95</div>
      <div className={classes.itemQuantity}>1</div>
      <div className={classes.itemTotal}>$1,599.95</div>
    </div>
  )
}

export default Cart
