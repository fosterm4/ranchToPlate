import React, { Component } from "react"

import Layout from "../components/layout"
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import '../components/ContactForm.css'
import axios from 'axios'

class ContactForm extends Component{
  constructor(){
    super()

      this.state = {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value})
  }

  async handleSubmit(e){
    e.preventDefault()

    const { name, email, phone, message } = this.state
    const form = await axios.post('/api/from',{
      name,
      email,
      phone,
      message
    })
  }

  render(){
    return(
        <Form onSubmit ={this.handleSubmit}>
        <FormGroup>
          <Label for="name">Name: </Label>
          <Input
            type="text"
            name="name"
            onChange={this.handleChange}/>
        </FormGroup>
    
        <FormGroup>
          <Label for="email">Email: </Label>
          <Input
            type="email"
            name="email"
            onChange={this.handleChange}/>
        </FormGroup>
    
        <FormGroup>
          <Label for="phone">Phone Number: </Label>
          <Input
            type="text"
            name="phone"
            onChange={this.handleChange}/>
        </FormGroup>
    
        <FormGroup>
          <Label for="message">Message: </Label>
          <Input
            type="textarea"
            name="phone"
            onChange={this.handleChange}/>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
  


export default ContactForm