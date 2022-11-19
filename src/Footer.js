import React from "react";
import "./App.css";
import SocialIcon from "./socialIcon.js";
import svgLinkedin from "./assets/svg/01-linkedin.svg";
import svgDribbble from "./assets/svg/01-dribbble.svg";
import svgYoutube from "./assets/svg/01-youtube.svg";
import svgTwitter from "./assets/svg/01-twitter.svg";
import svgGithub from "./assets/svg/01-github.svg";
import svgInstagram from "./assets/svg/01-instagram.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-text-container">
        <p>© 2022 Nick Hart</p>
      </div>
      <div className="social-container-footer justify-content-end row">
      <SocialIcon
        link="https://www.linkedin.com/in/nick-hart-00/"
        image={svgLinkedin}
      />
      <SocialIcon 
        link="http://www.dribbble.com/cubeycap"
        image={svgDribbble}
      />
      <SocialIcon 
        link="https://www.youtube.com/channel/UCmy6aiHyj2f9gU93NHwTG5Q"
        image={svgYoutube}
      />
      <SocialIcon
        link="https://github.com/nickhart203/"
        image={svgGithub}
      />
    </div>
    </div>
  );
}

export default Footer;
