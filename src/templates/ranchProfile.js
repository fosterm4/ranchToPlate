import React from "react"
import Layout from "../components/layout"
import '../components/ranchProfile.css'

export default function RanchProfile({pageContext}) {
  
  return (
    <Layout>
      <div>
        <div className = "profileDiv">
          <img id = "profileHeader" src={pageContext.ranch.headerImage.asset.url} alt = "img"/>
          <img class = "profilePicture" src={pageContext.ranch.profileImage.asset.url} alt = "profilePicture"/>
        </div>
        <h1>{pageContext.ranch.ranchName}</h1>
        <hr></hr>
        <p id = "ranchDescription">{pageContext.ranch.description}</p>
        <h2>Contact</h2>
        <h4>Email: {pageContext.ranch.email}</h4>
        <h4>Phone: {pageContext.ranch.phone}</h4>
      </div>
    </Layout>
  )
}
