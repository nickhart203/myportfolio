import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Thumbnail from "./Thumbnail.js";
import "./App.css";
import usnThumb from "./assets/img/usn-thumbnail.jpg";
import dispatchThumb from "./assets/img/dispatch-thumbnail.jpg";
import vailThumb from "./assets/img/vail-thumbnail.jpg";
import coachellaThumb from "./assets/img/coachella-thumbnail.jpg";
import coalesseThumb from "./assets/img/coalesse-thumbnail.jpg";
import consensysThumb from "./assets/img/consensys-thumbnail.jpg";
import meritusThumb from "./assets/img/meritus-thumbnail.jpg";
import drumnowThumb from "./assets/img/drumnow-thumbnail.jpg";
import hexaThumb from "./assets/img/hexa-thumbnail.jpg";
import reelThumb from "./assets/img/reel-thumbnail.jpg";
import portfolioThumb from "./assets/img/portfolio-thumbnail.jpg";

import { motion } from "framer-motion";

const list = {
  visible: {
    opacity: 1,
    transition: { delayChildren: 0, staggerChildren: 0.2 },
  },
  hidden: { opacity: 0 },
};

const item = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.65 },
  },
  hidden: { opacity: 0, y: 15 },
};

function Work(props) {
  return (
    <div className="pageContainer">
      <motion.ul initial="hidden" animate="visible" variants={list}>
        <div className="intro-textContainer">
          <div className="intro-text">
            <h1>
              <motion.li variants={item}>I'm Nick. ✌️ I enjoy </motion.li>
              <motion.li variants={item}>interaction, motion, and </motion.li>
              <motion.li variants={item}>brand design. Let me know </motion.li>
              <motion.li variants={item}>if you want to chat! ✨</motion.li>
            </h1>
          </div>
          <motion.li variants={item}>
            <div className="intro-contact">
              <p>
                See what I'm doing on{" "}
                <a
                  href="http://www.dribbble.com/cubeycap"
                  className="line-link-sm"
                  target="_blank"
                >
                  dribbble.
                </a>
              </p>

              <p>
                Get in touch:{" "}
                <a
                  href="mailto:hello.nickhart@gmail.com"
                  className="line-link-sm"
                >
                  hello.nickhart@gmail.com
                </a>
              </p>
            </div>
          </motion.li>
        </div>

        <motion.li variants={item}>
        <Thumbnail
            link="/wmdispatch"
            image={dispatchThumb}
            title="WM Dispatch"
            subtext="Product Design"
            alt="WM Dispatch App Design"
          />
          <Thumbnail
            link="/us-nursing"
            image={usnThumb}
            title="US Nursing"
            subtext="Product Design"
            alt="USN App Design"
          />
          <Thumbnail
                link="/drumnow"
                image={drumnowThumb}
                title="Drumnow"
                subtext="Product Design"
                alt="Drumnow App Design"
              />
          <Thumbnail
              link="/consensys"
              image={consensysThumb}
              title="ConsenSys Developer"
              subtext="UX/UI Website Design"
              alt="ConsenSys developer platform"
           />
          <Thumbnail
                link="/vail"
                image={vailThumb}
                title="Vail Resorts"
                subtext="UX Research"
                alt="Vail FAQ Discovery"
              />
          <Thumbnail
              link="/coalesse"
              image={coalesseThumb}
              title="Coalesse"
              subtext="UX/UI Website Redesign"
              alt="Coalesse Website Redesign"
            />
          <Thumbnail
            link="/coachella"
            image={coachellaThumb}
            title="Coachella 2020"
            subtext="Visual Design & Animation"
            alt="Coachella 2020 website"
          />
          <Thumbnail
            link="/meritus"
            image={meritusThumb}
            title="Meritus Communities"
            subtext="UX Case Study"
            alt="Meritus UX Design"
          />
          <Thumbnail
            link="/hexa"
            image={hexaThumb}
            title="Hexa Custom"
            subtext="Animation"
            alt="Hexa web animation"
          />
          <Thumbnail
            link="/reel"
            image={reelThumb}
            title="Reel 2018"
            subtext="Animation"
            alt="2018 animations"
          />
          <Thumbnail
            link="/portfolio"
            image={portfolioThumb}
            title="Portfolio"
            subtext="Design / Dev"
            alt="2020 portfolio site"
          />
        </motion.li>
      </motion.ul>
    </div>
  ); 
}

export default Work;
