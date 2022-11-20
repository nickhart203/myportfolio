import React from "react";
import "./App.css";
import WorkHeader from "./WorkHeader.js";
import WorkHeroVideo from "./WorkHeroVideo.js";
import ProjectDescription from "./ProjectDescription.js";
import ProjectTextLeft from "./ProjectTextLeft.js";
import { motion } from "framer-motion";

function Hexa(props) {
  return (
    <div>
      <div className="pageContainer">
        <WorkHeader title="Hexa Custom" meta="Animation" />
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeOut", duration: 0.75 }}
        >
          <WorkHeroVideo video="https://player.vimeo.com/video/463607692?api=1&amp;autoplay=1&amp;background=1&amp;loop=1&amp;muted=1" />
          <ProjectDescription
            detail1="Animation"
            detail2="UX Design"
            detail3="Branding"
            detail4=""
            team1="2 Designers"
            role1="Interaction designer"
            timeline="2 weeks"
            header="Showcasing a new look with style"
            body="Upon launching the new website for Hexa Custom, I was tapped to create an engaging animation to show some of the features found within the site. I had a lot of fun jumping into After Effects as I weaved together UI animation with more traditional motion graphics inside the case study piece."
          />
          <WorkHeroVideo video="https://player.vimeo.com/video/463608902?api=1&amp;autoplay=1&amp;background=1&amp;loop=1&amp;muted=1" />
          <ProjectTextLeft
            header="Mobile components coming to life"
            body="I also got ahold of some mobile comps here and put my efforts into giving the experience a unique feel as a user moves around the website. "
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hexa;
