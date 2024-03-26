import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
//Animations
import { motion } from "framer-motion";
import { lineAnim, lineAnimContainer, navAnim } from "../../Animation";
import github from "../../Assets/github.png";
import linkedin from "../../Assets/linkedin.png";
import { SvgWave } from "../../Svg/Svg";

const Navigation = (props) => {
  return (
    <motion.div className="navigation">
      <SvgWave />
      <motion.div variants={lineAnimContainer} initial="hidden" animate="show">
        <motion.div className="skew-div" variants={lineAnim}></motion.div>
        <motion.div className="skew-div" variants={lineAnim}></motion.div>
        <motion.div className="skew-div" variants={lineAnim}></motion.div>
      </motion.div>
      <div className="nav-items">
        <motion.ul variants={navAnim} initial="hidden" animate="show">
          <NavLink to="/" exact className="navlinks" onClick={props.closeMenu}>
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/skillset"
            className="navlinks"
            onClick={props.closeMenu}
          >
            <li>Portfolio</li>
          </NavLink>
          <NavLink to="/about" className="navlinks" onClick={props.closeMenu}>
            <li>About</li>
          </NavLink>

          {/* <NavLink to="/contact" className="navlinks" onClick={props.closeMenu}>
            <li>Contact</li>
          </NavLink> */}
        </motion.ul>
      </div>
      <div className="header-wrapper2">
        <div className="gmail-text">
          <a
            href="mailto:tomisinrachel@gmail.com"
            method="POST"
            encType="multipart/form-data"
          >
            Let's chat &rarr; ugwojennifer7@gmail.com
          </a>
        </div>

        <ul className="social-icons">
          <li>
            <a href="https://github.com/jennifer-pecky">
              <img src={github} className="icon1" alt="github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jennifer-chioma-maduagwu-7051ab236/">
              <img src={linkedin} className="icon4" alt="linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navigation;
