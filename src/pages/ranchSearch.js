import React, { Component } from "react"

import Layout from "../components/layout"
import '../components/ranchSearch.css'
import StateMap  from '../components/stateMap'
class RanchSearch extends Component{
  render(){
    return(
      <Layout>
        <div className = "background"/>
        <div className = "formSpace">
          <h1>Select your state below</h1>
          <StateMap></StateMap>
        </div> 
      </Layout>
    );
  }
}
  


export default RanchSearch