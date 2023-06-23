import React from "react";
import "../Skills.scss";
import UiUxHero from "./UiUxHero";
import UiUxProjects from "./UiUxProjects";
//Animations
import { motion } from "framer-motion";
import { pageAnim } from "../../../Animation";
import { SvgWave } from "../../../Svg/Svg";

const UiUx = () => {
  return (
    <motion.div exit="exit" variants={pageAnim} initial="hidden" animate="show">
      <SvgWave />
      <UiUxHero />
      <UiUxProjects />
    </motion.div>
  );
};

export default UiUx;
