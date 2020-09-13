import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import '../components/ranchSearch.css'
import StateMap from '../components/stateMap'
import SEO from "../components/seo"
class RanchSearch extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Search" />
        <div className="background" />
        <div className="formSpace">
          <h1>Select your state below</h1>
          <Link to="/searchResults">
            <StateMap></StateMap>
          </Link>
        </div>
      </Layout>
    );
  }
}



export default RanchSearch