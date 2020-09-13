import React from "react";
import "./Footer.css"
import { Link } from "gatsby"
import facebook from "../images/facebook.png"
function Footer() {
  return (
    <div className = "mainFooter">
      <p> Questions? <Link to="/contact">Contact us</Link>
      </p>
      <div className = "socialIcons">

      </div>
      < p className = "copyright">
        &copy;{new Date().getFullYear()} www.ranchtoplate.com
      </p>
    </div>
  );
}

export default Footer;