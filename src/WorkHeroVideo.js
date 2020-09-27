import React from "react";
import "./App.css";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

function WorkHeroVideo(props) {
  return (
    <div>
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
    </div>
  );
}

export default WorkHeroVideo;
