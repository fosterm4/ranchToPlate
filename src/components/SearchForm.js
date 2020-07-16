
import React, { useState } from "react"
import '../components/SearchForm.css'
import {Form, FormGroup,Input, Label, Button} from 'reactstrap'
import { Link } from "gatsby"
const SearchForm = () => {

    return (
        <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <div className="wholeForm">
            <FormGroup>
              <Input type="hidden" name="form-name" value="zip" />
              <Label htmlFor="zip">Zip Code</Label>
              <Input 
              id="name" 
              name="name"
              type="text" 
              />
            </FormGroup>
            <Link to="/searchResults/">
              <Button type="button">Search</Button>
            </Link>
          </div>
        </Form>
    );

  }


export default SearchForm