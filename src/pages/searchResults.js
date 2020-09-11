import React, { Component } from "react"

import Layout from "../components/layout"
import '../components/searchResults.css'
import RanchCard from "../components/ranchCard"

var stateClicked
var upperStateClicked

export function stateClick(props){
  upperStateClicked = props;
  stateClicked = props.toLowerCase();
}

const SearchResults = ({ data }) => {
  console.log(stateClicked);
  return (
    <Layout>
      <div className="background">
      </div>
      <h1>Showing Ranches in {upperStateClicked}</h1>
      <div className="ranchCards">
        {data.allSanityRanch.edges.map(edge => {
          var lowerCaseCompareState = edge.node.state.toLowerCase();
          if(stateClicked === lowerCaseCompareState){
          return (
            <div key={edge.node.slug.current}>
              <a href = {edge.node.slug.current}>
                <RanchCard title={edge.node.ranchName} image={edge.node.profileImage.asset.url} description={edge.node.description}></RanchCard>
              </a>
            </div>
          )
          }
          else if(stateClicked === undefined || stateClicked === ""){
            return (
              <div key={edge.node.slug.current}>
                <a href = {edge.node.slug.current}>
                  <RanchCard title={edge.node.ranchName} image={edge.node.profileImage.asset.url} description={edge.node.description}></RanchCard>
                </a>
              </div>
            )
            }
        })}
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