import React from "react";
import "./App.css";
import WorkHeader from "./WorkHeader.js";
import WorkHeroVideo from "./WorkHeroVideo.js";
import ProjectDescription from "./ProjectDescription.js";
import ProjectTextLeft from "./ProjectTextLeft.js";
import { motion } from "framer-motion";

function Reel(props) {
  return (
    <div>
      <div className="pageContainer">
        <WorkHeader title="2018 Reel" meta="Animation" />
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeOut", duration: 0.75 }}
        >
          <WorkHeroVideo video="https://player.vimeo.com/video/254797413?api=1&amp;autoplay=1&amp;background=1&amp;loop=1&amp;muted=1" />
          <ProjectDescription
            detail1="Animation"
            detail2="2d / 3d"
            detail3=""
            detail4=""
            team1="1 Designer"
            timeline1="1 week"
            header="Some motion works that I've done in the past"
            body="This is a collection of playful exploration and commissioned work. I really enjoy improving skills in all avenues of design and I definitely have the tools to keep practicing more in-depth 3d work."
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Reel;
