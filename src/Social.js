import React from "react";
import "./App.css";
import SocialIcon from "./socialIcon.js";
import svgLinkedin from "./assets/svg/01-linkedin.svg";
import svgYoutube from "./assets/svg/01-youtube.svg";
import svgDribbble from "./assets/svg/01-dribbble.svg";
import svgGithub from "./assets/svg/01-github.svg";
import svgTwitter from "./assets/svg/01-twitter.svg";
import svgInstagram from "./assets/svg/01-instagram.svg";
import { motion } from "framer-motion";

function Social(props) {
  return (
    <div className="social-container mobile-hide">
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, ease: "easeOut", duration: 0.75 }}
      >
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { ease: "easeOut", duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <SocialIcon
            link="https://www.linkedin.com/in/nick-hart-00/"
            image={svgLinkedin}
          />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { ease: "easeOut", duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <SocialIcon
            link="https://www.youtube.com/channel/UCmy6aiHyj2f9gU93NHwTG5Q"
            image={svgYoutube}
          />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { ease: "easeOut", duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <SocialIcon
            link="http://www.dribbble.com/nickhart"
            image={svgDribbble}
          />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { ease: "easeOut", duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
        >        
          <SocialIcon
            link="https://github.com/nickhart203/"
            image={svgGithub}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Social;
