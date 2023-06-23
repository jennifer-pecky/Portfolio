import React from "react";
import { SvgWave } from "../../Svg/Svg";
import handWave from "../../Assets/bye-hand.png";
import "./Hero.scss";
//Animations
import { motion } from "framer-motion";
import {
  pageAnim,
  heroAnim,
  heroh1,
  fadein,
  pagelineAnim,
} from "../../Animation";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../Button/Button";
import techimages from "../../Assets/techimages.png";

const Hero = () => {
  let history = useHistory();

  return (
    <motion.section
      className="hero-section"
      exit="exit"
      variants={pageAnim}
      initial="hidden"
      animate="show"
    >
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <SvgWave />
      <div className="hero-dark">
        <motion.div variants={heroAnim} className="hero-text">
          <motion.p variants={heroh1} className="namegradient">
            Rachel Tomi
          </motion.p>
          <motion.h1 variants={heroh1} className="hero-h1">
            Front-End Developer
          </motion.h1>

          <motion.p className="texth1" variants={heroAnim}>
            I design and build beautiful and functional user interfaces for
            websites and applications.
          </motion.p>

          <motion.div
            variants={fadein}
            className="hero-btn"
            onClick={() => history.push("/frontend")}
          >
            <Button primary> Check out my work</Button>
          </motion.div>

          <motion.div className="techiconsdiv">
            <h1>Technologies</h1>
            <motion.img src={techimages} alt="techs-icons" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
