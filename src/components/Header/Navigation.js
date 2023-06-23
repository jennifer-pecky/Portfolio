import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
//Animations
import { motion } from "framer-motion";
import { lineAnim, lineAnimContainer, navAnim } from "../../Animation";
import github from "../../Assets/Vector-github.svg";
import IG from "../../Assets/Vector-IG.svg";
import twitter from "../../Assets/Vector-twitter.svg";
import linkedin from "../../Assets/Vector-linkedin.svg";
import { SvgWave } from "../../Svg/Svg";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Navigation = (props) => {
  let history = useHistory();
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
          <a
            href="https://blog.racheltomi.work"
            target="_blank"
            rel="noreferrer"
            className="navlinks"
            onClick={props.closeMenu}
          >
            <li>My Blog</li>
          </a>
          <NavLink to="/contact" className="navlinks" onClick={props.closeMenu}>
            <li>Contact</li>
          </NavLink>

          <Button onClick={() => history.push("/frontend")} primary>
            {" "}
            Download Resume
          </Button>
        </motion.ul>
      </div>
      <div className="header-wrapper2">
        <div className="gmail-text">
          <a
            href="mailto:tomisinrachel@gmail.com"
            method="POST"
            encType="multipart/form-data"
          >
            Let's chat &rarr; tomisinrachel@gmail.com
          </a>
        </div>

        <ul className="social-icons">
          <li>
            <a href="https://github.com/Racheal-spec/">
              <img src={github} className="icon1" alt="github" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/theracheltomi">
              <img src={IG} className="icon2" alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/theracheltomi">
              <img src={twitter} className="icon3" alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rachel-tomi-03572a195/">
              <img src={linkedin} className="icon4" alt="linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navigation;
