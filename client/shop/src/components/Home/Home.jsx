import React from 'react'
import classes from './Home.module.css'
import { NavLink, Link } from 'react-router-dom'
import ProductItem from '../common/ProductItem/ProductItem'
import PageItem from './PageItem/PageItem'

const Home = () => {
  let imgLink = 'https://freesvg.org/img/Placeholder.png'

  return (
    <div className={classes.home}>
      <div>
        <h2>Рекомендована колекція</h2>
        <div className={classes.productsContainer}>
          <ProductItem image={imgLink} name='Name1' price='999$' />
          <ProductItem image={imgLink} name='Name2' price='999$' />
          <ProductItem image={imgLink} name='Name3' price='999$' />
          <ProductItem image={imgLink} name='Name4' price='899$' />
          <ProductItem image={imgLink} name='Name5' price='799$' />
          <ProductItem image={imgLink} name='Name6' price='499$' />
          <ProductItem image={imgLink} name='Name7' price='599$' />
          <ProductItem image={imgLink} name='Name8' price='399$' />
          <ProductItem image={imgLink} name='Name9' price='299$' />
        </div>
      </div>
      <div>
        <h2>Дозвольте вашому стилю відповідати вашим амбіціям!</h2>
        <div className={classes.pagesContainer}>
          <Link to='/accessories'>
            <PageItem image={imgLink} name='Аксесуари' />
          </Link>
          <Link to='/footwear'>
            <PageItem image={imgLink} name='Взуття' />
          </Link>
          <Link to='/pants'>
            <PageItem image={imgLink} name='Штани' />
          </Link>
          <Link to='/shirts'>
            <PageItem image={imgLink} name='Сорочки' />
          </Link>
          <Link to='/tshirts'>
            <PageItem image={imgLink} name='Футболки' />
          </Link>
          <Link to='/shorts'>
            <PageItem image={imgLink} name='Шорти' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
