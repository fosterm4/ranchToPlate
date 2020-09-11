import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './StateMap.css'
import {stateClick} from '../pages/searchResults'

class StateMap extends Component {
  /* mandatory */
  mapHandler = (event) => {
    stateClick(event.target.dataset.name);
  };
 
  render() {
    return (
      <div className="App">
        <USAMap defaultFill = "#dca017" onClick={this.mapHandler} />
      </div>
    );
  }
}
 
export default StateMap;