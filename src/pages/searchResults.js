import React, { Component } from "react"

import Layout from "../components/layout"
import '../components/searchResults.css'
import RanchCard from "../components/ranchCard"
import SEO from "../components/seo"
import { Link } from "gatsby"

var stateClicked
var upperStateClicked
let ranchCount = 0

export function stateClick(props) {
  upperStateClicked = props;
  stateClicked = props.toLowerCase();
}

function numRanches(num) {
  if (num === 0) {
    return (
      <h1>No ranches in this state yet...</h1>
    )
  }
}

const SearchResults = ({ data }) => {
  console.log(stateClicked);
  return (
    <Layout>
      <SEO title="Results" />
      <div className="background">
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
                  <RanchCard title={edge.node.ranchName} image={edge.node.profileImage.asset.url} description={edge.node.description}></RanchCard>
                </a>
              </div>
            )
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
        zip
      }
    }
  }
}
`