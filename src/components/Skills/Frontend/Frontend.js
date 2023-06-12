import React from "react";
import "../Skills.scss";
import FrontendHero from "./FrontendHero";
import FrontendProjects from "./FrontendProjects";
//Animations
import { motion } from "framer-motion";
import { pageAnim } from "../../../Animation";

const Frontend = () => {
  return (
    <motion.div exit="exit" variants={pageAnim} initial="hidden" animate="show">
      <FrontendHero />
      <FrontendProjects />
    </motion.div>
  );
};

export default Frontend;
