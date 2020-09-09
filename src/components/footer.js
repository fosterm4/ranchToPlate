import React from "react";
import "./Footer.css"
import { Link } from "gatsby"

function Footer() {
  return (
    <div className = "mainFooter">
      <p> Questions? <Link to="/contact">Contact us</Link>
      </p>
      
      < p className = "copyright">
        &copy;{new Date().getFullYear()} WWW.RANCHTOPLATE.COM
      </p>
    </div>
  );
}

export default Footer;