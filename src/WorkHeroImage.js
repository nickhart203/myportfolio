import React from "react";
import "./App.css";
import { motion } from "framer-motion";

function WorkHeroImage(props) {
  return (
    <div>
      <div className="workHero-image">
        <img src={props.image} alt={props.alt} className={props.newclass} />
      </div>
    </div>
  );
}

export default WorkHeroImage;
