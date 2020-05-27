import React from 'react'
import classes from '../Home.module.css'

const PageItem = (props) => {
  return (
    <div
      className={classes.pageItem}
      style={{ backgroundImage: `url(${props.image})` }}>
      <div>
        <span className={classes.pageName}>{props.name}</span>
      </div>
    </div>
  )
}

export default PageItem
