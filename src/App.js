// App.jsx

import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
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
import Hexa from "./Hexa.js";
import Reel from "./Reel.js";


function App() {
  return (
    <HashRouter>
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
        <Route path="/hexa" component={Hexa} />
        <Route path="/reel" component={Reel} />

        

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
