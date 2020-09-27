import React from "react";
import "./App.css";
import SocialIcon from "./socialIcon.js";
import svgLinkedin from "./assets/svg/01-linkedin-2x.svg";
import svgDribbble from "./assets/svg/01-dribbble-2x.svg";
import svgTwitter from "./assets/svg/01-twitter-2x.svg";
import svgInstagram from "./assets/svg/01-instagram-2x.svg";
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
            link="http://www.dribbble.com/cubeycap"
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
          <SocialIcon link="https://twitter.com/cubeycap" image={svgTwitter} />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { ease: "easeOut", duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <SocialIcon
            link="https://www.instagram.com/cubeycap/"
            image={svgInstagram}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Social;
