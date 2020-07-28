import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"
import hayTractor from '../images/HayTractor.jpg'
import wheatImg from '../images/wheat.jpg'
import barn from '../images/barn.jpg'
import corn from '../images/corn.jpg'
import ResponsivePlayer from "../components/video/responsivePlayer"

const IndexPage = () => (
  <Layout>
    <div className = "Hero">
      <div className = "HeroGroup">
        <h1>Buy local, save money</h1>

        <Link to="/ranchSearch/">Find a ranch near me</Link>
      </div>
    </div>
    <div className = "Cards">
      <h2>Experience the Ranch to Plate difference(STILL IN DEVELOPMENT...)</h2> 
      <div className = "vidPlayer">     
      <ResponsivePlayer url = "https://youtu.be/NpEaa2P7qZI"/></div>
      <div className="CardGroup">

        <Card title = "Keep it Local"
        text = "Test Paragraph"
        image={hayTractor}/>
        <Card title = "Save Money"
        text = "Test Paragraph"
        image={wheatImg}/>
        <Card title = "Know Where Your Food Comes From"
        text = "Test Paragraph"
        image={barn}/>
        <Card title = "Directly Support the Backbone of America"
        text = "Test Paragraph"
        image={corn}/>
      </div>
    </div>
    <SEO title="Ranch to Plate" />

  </Layout>
)

export default IndexPage
