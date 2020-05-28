import React from 'react'
import classes from './ProductPage.module.css'
import { NavLink } from 'react-router-dom'

const ProductPage = (props) => {
  let imgLink = 'https://freesvg.org/img/Placeholder.png'

  return (
    <div className={classes.productPage}>
      <div className={classes.firstRow}>
        <div className={classes.images}>
          <img src={props.product.images[0]} alt={props.product.name + ' image'} />
        </div>
        <div className={classes.info}>
          <h2>{props.product.name}</h2>
          <div className={classes.price}>₴{props.product.price}</div>
          <div className={classes.form}>
            <div className={classes.options}>
              {/* <div className={classes.color}>
                <label for='color'>Колір</label>
                <select id='color' name='color'>
                  <option value='1'>Color 1</option>
                  <option value='2'>Color 2</option>
                </select>
              </div> */}
              <div className={classes.size}>
                <label for='size'>Розмір</label>
                <select id='size' name='size'>
                  <option value='Small'>Small</option>
                  <option value='Medium'>Medium</option>
                  <option value='Large'>Large</option>
                  <option value='X-Large'>X-Large</option>
                </select>
              </div>
            </div>
            <div className={classes.buttons}>
              <button className={classes.add}>Додати в кошик</button>
              <button className={classes.buy}>Купити зараз</button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.secondRow}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut
          asperiores quidem, aliquam quae consequatur fugit deserunt debitis
          veritatis optio sunt ipsam adipisci odit alias incidunt necessitatibus
          consequuntur suscipit facilis natus eius iste magni beatae recusandae?
          Cumque debitis nulla et odit ab obcaecati, reiciendis, delectus
          laboriosam odio earum voluptas iusto facere fuga consequatur
          temporibus architecto ex itaque. Tempora tempore eveniet vel nihil at
          modi, voluptatem, odio deleniti debitis ducimus sint explicabo
          mollitia, voluptatum dignissimos quae nostrum cupiditate optio! Odit
          obcaecati, corrupti assumenda dicta molestiae doloribus sapiente
          aperiam ad dolorum hic eius sed pariatur placeat autem architecto.
          Laborum illo accusamus obcaecati?
        </p>
      </div>
    </div>
  )
}

export default ProductPage
