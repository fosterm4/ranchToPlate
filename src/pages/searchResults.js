import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import '../components/searchResults.css'
import RanchCard from "../components/ranchCard"
import SEO from "../components/seo"
import { Link} from "gatsby"
import BackgroundImage from 'gatsby-background-image'

var stateClicked
var upperStateClicked

export function stateClick(props) {
  upperStateClicked = props;
  stateClicked = props.toLowerCase();
}

const SearchResults = ({ data }) => {
  const imageData = data.desktop.childImageSharp.fluid
  let ranchCount = 0
  return (
    <Layout>
      <SEO title="Results" />
      <div className="background">
        <BackgroundImage
          className="background"
          fluid={imageData}
          backgroundColor={`#040e18`}
        ></BackgroundImage>
      </div>
      <h1>Showing Ranches in {upperStateClicked}</h1>
      <div className="ranchCards">
        {data.allSanityRanch.edges.map(edge => {
          var lowerCaseCompareState = edge.node.state.toLowerCase();
          if (stateClicked === lowerCaseCompareState) {
            ranchCount += 1
            return (
              <div key={edge.node.slug.current}>
                <a href={edge.node.slug.current}>
                  <RanchCard title={edge.node.ranchName} image={edge.node.profileImage.asset.url} city={edge.node.city} state={upperStateClicked} description={edge.node.description}></RanchCard>
                </a>
              </div>
            )
          }
          else {
            return ("")
          }
        })}
      </div>
      <div id="noneFound">
        {
          ranchCount < 1 &&
          <h2>No ranches yet in this state...</h2>
        }
      </div>
      <div id="searchAgain">
        <Link to="/ranchSearch"><button>Search Another State</button></Link>
      </div>
    </Layout>
  )
}



export default SearchResults

export const query = graphql`
query RanchQuery{
  desktop: file(relativePath: { eq: "cattle-drive-793676_1280.jpg" }) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  allSanityRanch(filter: { slug: { current: { ne: null } } }) {
    edges {
      node {
        ranchName
        description
        slug {
          current
        }
        profileImage {
          asset {
            url
          }
        }
        headerImage {
          asset {
            url
          }
        }
        address
        email
        phone
        id
        state
        city
        zip
      }
    }
  }
}
`