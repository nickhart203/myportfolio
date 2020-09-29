import React from "react";
import "./App.css";
import meImg from "./assets/img/me.jpg";
import { motion } from "framer-motion";

function AboutDescription(props) {
  return (
    <section>
      <div className="aboutHeaderContainer row">
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, ease: "easeOut", duration: 0.75 }}
        >
          <div className="side-col-lg inline-block">
            <h2>{props.header}</h2>
            <p>{props.body}</p>
            <div className="col-sm row">
              <ul>
                <h5>What I do</h5>
                <li>{props.detail1}</li>
                <li>{props.detail2}</li>
                <li>{props.detail3}</li>
                <li>{props.detail4}</li>
                <li>{props.detail5}</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="side-image center inline-block">
          <motion.div
            initial={{ y: 25, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, ease: "easeOut", duration: 1.25 }}
          >
            <img src={meImg} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutDescription;
