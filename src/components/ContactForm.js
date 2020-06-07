
import React, { useState } from "react"
import '../components/ContactForm.css'

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
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  }


    return (
      <form onSubmit={handleSubmit} name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name</label>
        <input 
        id="name" 
        name="name"
        type="text" 
        onChange={handleChange} 
        value={formState.name} 
        placeholder="Enter your name" 
        />
        <label htmlFor="email">Email</label>
        <input 
        id="email" 
        name="email"
        type="email" 
        onChange={handleChange} 
        value={formState.email} 
        placeholder="Enter your Email" 
        />
        <label htmlFor="phone">Phone#</label>
        <input 
        id="phone" 
        name="phone"
        type="text" 
        onChange={handleChange} 
        value={formState.phone} 
        placeholder="Enter your phone number" 
        />
        <label htmlFor="messahe">Message</label>
        <input 
        id="message" 
        name="message"
        type="textarea" 
        onChange={handleChange} 
        value={formState.message} 
        placeholder="Enter your message here..." 
        />
        <button type="submit">Submit</button>
      </form>
    );

  }


export default ContactForm