import React from 'react'
import classes from './ProductPage.module.css'
import { NavLink } from 'react-router-dom'

const ProductPage = (props) => {
  // let imgLink = 'https://freesvg.org/img/Placeholder.png'

  let formNewProduct = () => {
    let newProduct = {
      unique_id: props.product.product_id + props.product.size,
      ...props.product,
      quantity: 1,
      totalPrice: props.product.price
    }
    delete newProduct.description

    return newProduct
  }

  // TODO: get size from select element
  let onAddProduct = () => {
    let newProduct = formNewProduct()
    props.addProduct(newProduct)
  }

  let onBuyNow = () => {
    props.buyNow(formNewProduct())
  }

  return (
    <div className={classes.productPage}>
      <div className={classes.firstRow}>
        <div className={classes.images}>
          <img src={props.product.image} />
        </div>
        <div className={classes.info}>
          <h2>{props.product.name}</h2>
          <div className={classes.price}>₴{props.product.price}</div>
          <div className={classes.form}>
            <div className={classes.options}>
              {/* <div className={classes.color}>
                <label htmlFor='color'>Колір</label>
                <select id='color' name='color'>
                  <option value='1'>Color 1</option>
                  <option value='2'>Color 2</option>
                </select>
              </div> */}
              <div className={classes.size}>
                <label htmlFor='size'>Розмір</label>
                <select id='size' name='size'>
                  <option value='Small'>Small</option>
                  <option value='Medium'>Medium</option>
                  <option value='Large'>Large</option>
                  <option value='X-Large'>X-Large</option>
                </select>
              </div>
            </div>
            <div className={classes.buttons}>
              <button onClick={onAddProduct} className={classes.add}>
                Додати в кошик
              </button>
              <button onClick={onBuyNow} className={classes.buy}>Купити зараз</button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.secondRow}>
        <p>{props.product.description}</p>
      </div>
    </div>
  )
}

export default ProductPage
