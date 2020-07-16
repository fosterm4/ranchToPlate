
import React, { useState } from "react"
import '../components/ContactForm.css'
import {Form, FormGroup,Input, Label, Button} from 'reactstrap'
const ContactForm = () => {

  const [formState, setFormState] = useState({
    name: "",
    email:"",
    phone:"",
    message:""
  })

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState })
    })
      .then(() => alert("Success! Your information has been submitted and you will be contacted shortly."))
      .catch(error => alert(error));

    e.preventDefault();
  }


    return (
        <Form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <div className="wholeForm">
            <FormGroup>
              <Input type="hidden" name="form-name" value="contact" />
              <Label htmlFor="name">Name</Label>
              <Input 
              id="name" 
              name="name"
              type="text" 
              onChange={handleChange} 
              value={formState.name} 
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input 
              id="email" 
              name="email"
              type="email" 
              onChange={handleChange} 
              value={formState.email} 
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">Phone#</Label>
              <Input 
              id="phone" 
              name="phone"
              type="text" 
              onChange={handleChange} 
              value={formState.phone} 
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <Input 
              id="message" 
              name="message"
              type="textarea" 
              onChange={handleChange} 
              value={formState.message} 
              />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
    );

  }


export default ContactForm