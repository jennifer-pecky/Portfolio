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
        <div className="hero-text">
          <motion.p variants={heroh1}>
            <Link to="/about" className="aboutlink">
              About Rachel Tomisin
            </Link>
          </motion.p>
          <motion.h3 variants={heroAnim} className="herotext-h3">
            <motion.span variants={heroh1} className="hero-h1">
              Hi <img src={handWave} className="hand" alt="wave" />
            </motion.span>
            {", "}
            I’m <span className="namegradient">Tomisin</span>, a front-end
            developer based in Nigeria.{" "}
          </motion.h3>
          {/* <motion.p variants={heroAnim}>
            I design and build beautiful and functional user interfaces for
            websites and applications.
          </motion.p> */}
          <div className="btnTextDiv">
            <motion.button
              variants={fadein}
              className="hero-btn"
              onClick={() => history.push("/frontend")}
            >
              View projects
            </motion.button>
            <motion.p variants={fadein}>
              As a core advocate of clean and responsive designs, I’m able to
              bring ideas to life with scalable and readable codes following
              best practices.
            </motion.p>
          </div>
        </div>
        {/* <div className="hero-img">
          <motion.img variants={imgAnim} src={heroimage} alt="Rachel tomi" />
        </div> */}
      </div>
    </motion.section>
  );
};

export default Hero;
