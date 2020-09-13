import React from "react";
import "./Footer.css"
import { Link } from "gatsby"
import facebook from "../images/facebook.png"
import instagram from "../images/insta.png"
import youtube from "../images/youtube.png"

function Footer() {
  return (
    <div className = "mainFooter">
      <p> Questions? <Link to="/contact">Contact us</Link>
      </p>
      <div className = "socialIcons">
        <a id = "facebook" target="_blank" href="https://www.facebook.com/Ranch-to-Plate-101775518347698/">
          <img src = {facebook} width = "20px" alt = "facebook"></img>
        </a>
        <a target="_blank" href="https://www.youtube.com/channel/UCJwyCaWMxNht7F2qky4W9gA?view_as=subscriber">
          <img src = {youtube} width = "20px" alt = "youtube"></img>
        </a>
        <a target="_blank" href="https://www.instagram.com/ranchtoplate/?hl=en">
          <img src = {instagram} width = "20px" alt = "instagram"></img>
        </a>
      </div>
      < p className = "copyright">
        &copy;{new Date().getFullYear()} www.Ranchtoplate.com
      </p>
    </div>
  );
}

export default Footer;