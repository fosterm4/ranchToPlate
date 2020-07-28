import React, { Component } from "react"

import Layout from "../components/layout"
import ResponsivePlayer from "../components/video/responsivePlayer"
import '../components/aboutUs.css'

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
          aboutus description goes here
        </p>
        <p>
          aboutus promo goes below
        </p>
        <div className = "vidPlayer">     
      <ResponsivePlayer url = "https://youtu.be/NpEaa2P7qZI"/></div>
      </Layout>
    );
  }
}
  


export default AboutUs