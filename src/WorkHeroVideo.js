import React from "react";
import "./App.css";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

function WorkHeroVideo(props) {
  return (
    <div>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, ease: "easeOut", duration: 0.75 }}
      >
        <div className="workHero-video">
          <iframe
            src={props.video}
            width="1920"
            height="1080"
            frameborder="0"
            allow="autoplay; fullscreen"
            loop="1"
            allowfullscreen
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}

export default WorkHeroVideo;
