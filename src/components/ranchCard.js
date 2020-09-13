import React from 'react'
import './ranchCard.css'

const RanchCard = props => (
  <div id="Card">
    <div class="profileImage">
      <img src={props.image} height="250" width="250" tabindex="0" />
    </div>
    <div class="words">
      <h3>{props.title}</h3>
      {props.description.length > 500 ?
        (
          <div class = "cutwords">
            {`${props.description.substring(0, 500)}...`}
          </div>
        ) :
        <p>{props.description}</p>
      }

    </div>
  </div>
)

export default RanchCard