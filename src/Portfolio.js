import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import WorkHeader from "./WorkHeader.js";
import WorkHeroImage from "./WorkHeroImage.js";
import ProjectDescriptionFn from "./ProjectDescriptionFn.js";
import ProjectTextLeft from "./ProjectTextLeft.js";
import portfolioThumb from "./assets/img/portfolio-thumbnail.jpg";

function Portfolio(props) {
  return (
    <div>
      <div className="pageContainer">
        <WorkHeader title="Portfolio" meta="Design / Dev" />
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeOut", duration: 0.75 }}
        >
          <WorkHeroImage
            image={portfolioThumb}
            alt="Portfolio site 2020"
            newclass=""
          />
          <ProjectDescriptionFn
            detail1="UX / UI Design"
            detail2="React"
            detail3=""
            detail4=""
            team1="1 Designer / Developer"
            timeline1="3 months"
            header="My new site built in react"
            body="I've long built my sites using standard front-end methods. However, as time went on, I wanted to learn a newer, more relevant skill. Thus, I learned react and deployed my site on Github Pages. This has been such a rewarding experience that I wanted a page here dedicated to my efforts. I've also used this project to learn more about implementing react-based animations through Framer Motion API."
            footnote="View project on"
          />
          
        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;
