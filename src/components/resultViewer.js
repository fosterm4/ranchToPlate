import React, { Component } from 'react'
import './resultViewer.css'
import { graphql } from 'gatsby'

class ResultViewer extends Component{
  render(){
    return(
      <div>
        <h1>Result Viewer</h1>
      </div>
    );
  }
}

export default ResultViewer

export const query = graphql`
query RanchQuery2{
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

