import React from "react"
import Layout from "../components/layout"
import '../components/ranchProfile.css'
import SEO from "../components/seo"
import Mailto from 'react-protected-mailto'
export default function RanchProfile({ pageContext }) {

  return (
    <Layout>
      <SEO title={pageContext.ranch.ranchName} />
      <div>
        <div className="profileDiv">
          <img id="profileHeader" src={pageContext.ranch.headerImage.asset.url} alt="img" />
          <img class="profilePicture" src={pageContext.ranch.profileImage.asset.url} alt="profilePicture" />
        </div>
        <h1>{pageContext.ranch.ranchName}</h1>
        <h4 id = "location">{pageContext.ranch.city}, {pageContext.ranch.state}</h4>
        <hr></hr>
        <p id="ranchDescription">{pageContext.ranch.description}</p>
        <h2>Contact</h2>
        <h4>Email: <Mailto email = {pageContext.ranch.email} /></h4>
        <h4>Phone: <Mailto tel = {pageContext.ranch.phone} /></h4>
      </div>
    </Layout>
  )
}
