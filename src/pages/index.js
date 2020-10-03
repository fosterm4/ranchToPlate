import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import hayTractor from '../images/HayTractor.jpg'
import wheatImg from '../images/wheat.jpg'
import barn from '../images/sunsetbackground.jpg'
import corn from '../images/corn.jpg'
import VideoPlayer from '../components/video/videoPlayer'
import { StaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "Background2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (

        <Layout>
          <div className="Hero">
            <BackgroundImage
              className="Hero"
              fluid={imageData}
              backgroundColor={`#040e18`}
            ></BackgroundImage>
            <div>
             <h1>Buy local, save money</h1> 
            </div>
            
            <Link to="/ranchSearch/">Find a ranch near me</Link>
          </div>
          <div className="Cards">
            <h2>Experience the Ranch to Plate difference</h2>
            <div className="vidPlayer">
              <div className="videoPlayer">
                <VideoPlayer url='https://youtu.be/g6GSHmYBLWY' />
              </div></div>
            <div className="CardGroup">

              <Card title="Keep it Local"
                text="Test Paragraph"
                image={hayTractor} />
              <Card title="Save Money"
                text="Test Paragraph"
                image={wheatImg} />
              <Card title="Know Where Your Food Comes From"
                text="Test Paragraph"
                image={barn} />
              <Card title="Directly Support Americas Farmers and Ranchers"
                text="Test Paragraph"
                image={corn} />
            </div>
          </div>
          <SEO title="Home" />

        </Layout>
      )


    }}
  />
)

export default IndexPage
