import React from 'react'
import './Card.css'

const Card = props => (
  <div className = "Card">
      <div className = "front">
        <img alt = "frontImg" src= {props.image} height = "500"/>
        <h3>{props.title}</h3>
      </div>
      <div className = "back">
        <p>{props.text}</p>
      </div>
  </div>
)

export default Card