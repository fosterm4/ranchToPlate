import React, { Component } from "react"

import Layout from "../components/layout"
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import '../components/Contact.css'
import ContactForm from "../components/ContactForm"

class ContactPage extends Component{
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
        <ContactForm/>
      </Layout>
    );
  }
}
  


export default ContactPage