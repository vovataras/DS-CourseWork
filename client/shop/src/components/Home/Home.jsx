import React from 'react'
import classes from './Home.module.css'
import { Link } from 'react-router-dom'
import Products from '../common/Products/Products'
import PageItem from './PageItem/PageItem'

const Home = (props) => {
  let imgLink = 'https://freesvg.org/img/Placeholder.png'

  return (
    <div className={classes.home}>
      <div>
        <h2>Рекомендована колекція</h2>
        <Products state={props.state} />
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
