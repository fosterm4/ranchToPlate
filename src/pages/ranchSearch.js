import React, { Component } from "react"

import Layout from "../components/layout"
import '../components/ranchSearch.css'
import SearchForm from '../components/SearchForm'

class RanchSearch extends Component{
  render(){
    return(
      <Layout>
        <div className = "background"/>
        <h1>
          Find a ranch near you
        </h1>
        <div className = "formSpace">
          <SearchForm/>
        </div>
      </Layout>
    );
  }
}
  


export default RanchSearch