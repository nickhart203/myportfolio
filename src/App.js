// App.jsx

import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Work from "./Work.js";
import About from "./About.js";
import Resume from "./Resume.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Coachella from "./Coachella.js";
import Coalesse from "./Coalesse.js";
import Social from "./Social.js";
import ScrollToTop from "./ScrollToTop.js";
import "./App.css";
import DisplayGroup from "./DisplayGroup.js";
import USN from "./USN.js";
import Meritus from "./Meritus.js";
import Drumnow from "./Drumnow.js";
import Thumbnail from "./Thumbnail.js";
import usnThumb from "./assets/img/usn-thumbnail.jpg";
import coachellaThumb from "./assets/img/coachella-thumbnail.jpg";
import coalesseThumb from "./assets/img/coalesse-thumbnail.jpg";
import displaygroupThumb from "./assets/img/displaygroup-thumbnail.jpg";
import meritusThumb from "./assets/img/meritus-thumbnail.jpg";
import drumnowThumb from "./assets/img/drumnow-thumbnail.jpg";
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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500&display=swap');
      </style>
      <div className="App">
        <motion.div
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, ease: "easeOut", duration: 0.75 }}
        >
          <Navbar />
        </motion.div>

        <Social />
        {/* router links*/}
        <Route exact path="/" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/us-nursing" component={USN} />
        <Route path="/coachella" component={Coachella} />
        <Route path="/drumnow" component={Drumnow} />
        <Route path="/coalesse" component={Coalesse} />
        <Route path="/meritus" component={Meritus} />
        <Route path="/display-group" component={DisplayGroup} />

        <div className="pageContainer">
          <motion.ul initial="hidden" animate="visible" variants={list}>
            <div className="intro-textContainer">
              <div className="intro-text">
                <h1>
                  <motion.li variants={item}>I'm Nick. ✌️ I enjoy </motion.li>
                  <motion.li variants={item}>
                    interaction, motion, and{" "}
                  </motion.li>
                  <motion.li variants={item}>
                    brand design. Let me know{" "}
                  </motion.li>
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
                link="/us-nursing"
                image={usnThumb}
                title="US Nursing"
                subtext="Product Design"
              />
              <Thumbnail
                link="/coachella"
                image={coachellaThumb}
                title="Coachella 2020"
                subtext="Visual Design & Animation"
              />
              <Thumbnail
                link="/coalesse"
                image={coalesseThumb}
                title="Coalesse"
                subtext="UX/UI Website Redesign"
              />
              <Thumbnail
                link="/drumnow"
                image={drumnowThumb}
                title="Drumnow"
                subtext="Product Design"
              />
              <Thumbnail
                link="/meritus"
                image={meritusThumb}
                title="Meritus Communities"
                subtext="UX Case Study"
              />
              <Thumbnail
                link="/display-group"
                image={displaygroupThumb}
                title="Display Group"
                subtext="UX/UI Website Redesign"
              />
            </motion.li>
          </motion.ul>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
