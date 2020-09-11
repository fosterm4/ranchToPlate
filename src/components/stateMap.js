import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './StateMap.css'
import { stateClick } from '../pages/searchResults'
import MediaQuery from 'react-responsive'

class StateMap extends Component {
  /* mandatory */
  mapHandler = (event) => {
    stateClick(event.target.dataset.name);
  };

  render() {
    return (
      <div className="App">

        <MediaQuery query="(min-device-width: 1601px)">
          <USAMap defaultFill="#dca017" width="1601" onClick={this.mapHandler} />
        </MediaQuery>

        <MediaQuery query="(max-device-width: 1600px)">
          <MediaQuery query="(min-device-width: 1025px)">
            <USAMap defaultFill="#dca017" width="1025" onClick={this.mapHandler} />
          </MediaQuery>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 1024px)">
          <MediaQuery query="(min-device-width: 800px)">
            <USAMap defaultFill="#dca017" width="800" onClick={this.mapHandler} />
          </MediaQuery>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 799px)">
          <MediaQuery query="(min-device-width: 641px)">
            <USAMap defaultFill="#dca017" width="640" onClick={this.mapHandler} />
          </MediaQuery>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 640px)">
          <MediaQuery query="(min-device-width: 400px)">
            <USAMap defaultFill="#dca017" width="400" height="300" onClick={this.mapHandler} />
          </MediaQuery>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 399px)">
          <USAMap defaultFill="#dca017" width="320" height="300" onClick={this.mapHandler} />
        </MediaQuery>
      </div>
    );
  }
}

export default StateMap;