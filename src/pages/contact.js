import React, { Component } from "react"

import Layout from "../components/layout"
import '../components/aboutUs.css'
import ContactForm from "../components/ContactForm"

class Contact extends Component{
  render(){
    return(
      <Layout>
        <div className = "onBackground">
          <div className = "backgroundHeader">
            <h2>
              Cut out the middle man.
            </h2>
          </div>
        </div>
        <div className = "Cards">
          <h2>Join our Growing Community of Farmers and Ranchers today</h2> 
        </div>
        <div className = "contactForm">
          <ContactForm/>
        </div>
      </Layout>
    );
  }
}
  


export default Contact