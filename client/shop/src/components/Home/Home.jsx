import React from 'react'
import classes from './Home.module.css'
import { Link } from 'react-router-dom'
import Products from '../common/Products/Products'
import PageItem from './PageItem/PageItem'
import { path } from '../../paths'

const Home = (props) => {
  // let imgLink = 'https://freesvg.org/img/Placeholder.png'
  let imgLink = 'https://webcomicms.net/sites/default/files/clipart/143514/x-art-clip-143514-4521306.svg'

  return (
    <div className={classes.home}>
      <div>
        <h2>Рекомендована колекція</h2>
        <Products state={props.state} />
      </div>
      <div>
        <h2>Дозвольте вашому стилю відповідати вашим амбіціям!</h2>
        <div className={classes.pagesContainer}>
          <Link to={path.accessories}>
            <PageItem image={imgLink} name='Аксесуари' />
          </Link>
          <Link to={path.footwear}>
            <PageItem image={imgLink} name='Взуття' />
          </Link>
          <Link to={path.pants}>
            <PageItem image={imgLink} name='Штани' />
          </Link>
          <Link to={path.shirts}>
            <PageItem image={imgLink} name='Сорочки' />
          </Link>
          <Link to={path.tshirts}>
            <PageItem image={imgLink} name='Футболки' />
          </Link>
          <Link to={path.shorts}>
            <PageItem image={imgLink} name='Шорти' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
