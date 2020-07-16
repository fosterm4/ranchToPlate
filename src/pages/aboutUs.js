import React, { Component } from "react"

import Layout from "../components/layout"
import ResponsivePlayer from "../components/video/responsivePlayer"

class AboutUs extends Component{
  render(){
    return(
      <Layout>
        <div className = "background">
        </div>
        <h1>
          A Service Born from Corona...
        </h1>
        <p>
          aboutus description goes here blah blah blah blah blah blah
          blahrnjgfaweogtrno kwernjgoerkogmerglo erkognmloerngoergloo erkngolerngolrengonrognoerngore ngoneriognerongoern
        </p>
        <p>
          aboutus promo goes below
        </p>
        <div className = "vidPlayer">     
      <ResponsivePlayer url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"/></div>
      </Layout>
    );
  }
}
  


export default AboutUs