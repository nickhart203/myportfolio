import React from "react";
import "./App.css";
import { motion } from "framer-motion";


function WorkHeader(props) {
  return (
    <div className="workHeader-container">
        <motion.div initial={{ x: -25, opacity: 0}}
        animate={{ x: 0, opacity: 1}}
        transition={{ delay: 1.15, ease: "easeOut", duration: 1.25 }}
>
          <div className="workHeader-meta">
            <h6>{props.meta}</h6>
          </div>
        </motion.div>
        <motion.div initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, ease: "easeOut", duration: 0.75 }}
>
          <div className="workHeader-title">
            <h1>{props.title}</h1>
          </div>
        </motion.div>
    </div>
  );
}

export default WorkHeader;
