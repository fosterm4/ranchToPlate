import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logotranscrop.png'
import './Header.css'

class Header extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      hasScrolled: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if(scrollTop > 50){
      this.setState({hasScrolled:true})
    }
    else{
      this.setState({hasScrolled: false})
    }
  }

  render(){
    return(
      <div className = {this.state.hasScrolled ?
      'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={logo} width="65" alt = "logo"/></Link>
          <Link to="/">Home</Link>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/contact">List Your Ranch</Link>
          <Link to="/ranchSearch"><button>Find a Ranch</button></Link>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
