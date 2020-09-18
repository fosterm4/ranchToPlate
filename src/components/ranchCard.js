import React from 'react'
import './ranchCard.css'
import MediaQuery from 'react-responsive'

const RanchCard = props => (
  <div id="Card">
    <div class="profileImage">
      <img src={props.image} height="250" width="250" tabindex="0" />
    </div>
    <div class="words">
      <div id = "locationBlock">
      <h3>{props.title}</h3>
        <h5 id = "locationLine">{props.city}, {props.state}</h5>
      </div>
      
      <MediaQuery query="(min-device-width: 1390px)">
        {props.description.length > 500 ?
          (
            <div class="cutwords">
              {`${props.description.substring(0, 500)}...`}
            </div>
          ) :
          <p>{props.description}</p>
        }
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1389px)">
        <MediaQuery query="(min-device-width: 1000px)">
          {props.description.length > 300 ?
            (
              <div class="cutwords">
                {`${props.description.substring(0, 300)}...`}
              </div>
            ) :
            <p>{props.description}</p>
          }
        </MediaQuery>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 999px)">
        <MediaQuery query="(min-device-width: 768px)">
          {props.description.length > 200 ?
            (
              <div class="cutwords">
                {`${props.description.substring(0, 200)}...`}
              </div>
            ) :
            <p>{props.description}</p>
          }
        </MediaQuery>
      </MediaQuery>
        <MediaQuery query="(max-device-width: 767px)">
          {props.description.length > 100 ?
            (
              <div class="cutwords">
                {`${props.description.substring(0, 100)}...`}
              </div>
            ) :
            <p>{props.description}</p>
          }
        </MediaQuery>
    </div>
  </div>
)

export default RanchCard