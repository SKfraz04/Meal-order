import React from 'react'
import classes from "./Card.module.css"

const MenuCard = (props) => {
  return (
    <div className={classes.card}>{props.children}</div>
  )
}

export default MenuCard