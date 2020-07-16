import React, { Component } from "react"

import Layout from "../components/layout"
import '../components/searchResults.css'
import ResultViewer from '../components/resultViewer'
class SearchResults extends Component{
  render(){
    return(
      <Layout>
        <div className = "background">
        </div>
        <h1>
          Results
        </h1>
        
      </Layout>
    );
  }
}
  


export default SearchResults