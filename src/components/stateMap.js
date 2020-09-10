import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './StateMap.css'

class StateMap extends Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
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