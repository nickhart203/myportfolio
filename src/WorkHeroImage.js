import React from "react";
import "./App.css";
import { motion } from "framer-motion";

function WorkHeroImage(props) {
  return (
    <div>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, ease: "easeOut", duration: 0.75 }}
      >
        <div className="workHero-image">
          <img src={props.image} alt={props.alt} className={props.newclass} />
        </div>
      </motion.div>
    </div>
  );
}

export default WorkHeroImage;
