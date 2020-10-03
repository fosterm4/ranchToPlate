import React from "react"
import Layout from "../components/layout"
import '../components/ranchSearch.css'
import StateMap from '../components/stateMap'
import SEO from "../components/seo"
import { StaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const RanchSearch = () => (
  <StaticQuery
    query={graphql`
    query {
      desktop: file(relativePath: { eq: "LetTherBeMeat.jpg" }) {
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
          <SEO title="Search" />
          <div className="background">
            <BackgroundImage
              className="background"
              fluid={imageData}
              backgroundColor={`#040e18`}
            ></BackgroundImage>
          </div>
          <div className="formSpace">
            <h1>Select your state below</h1>
            <Link to="/searchResults">
              <StateMap></StateMap>
            </Link>
          </div>
        </Layout>
      )
    }}
  />
)

export default RanchSearch