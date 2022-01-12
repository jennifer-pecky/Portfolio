import React from "react";
import "./About.scss";
import downloadicon from "../../Assets/download-icon.png";
import rightarrow from "../../Assets/Right-arrow.png";
//Animations
import { motion } from "framer-motion";
import {
  heroAnim,
  heroh1,
  imgAnim,
  pageAnim,
  pagelineAnim,
} from "../../Animation";

const About = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnim}
      initial="hidden"
      animate="show"
      className="main-main"
    >
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <div className="content">
        <div className="small-heading">
          <motion.p variants={heroh1} className="small-h">
            About Me
          </motion.p>
        </div>
        <div className="text-content">
          <motion.p variants={heroAnim} className="big-text">
            Hi. My name is <span className="name">Tomi</span>, I’m a
            highly-motivated front end developer who’s able to translate designs
            into clean and beautiful websites that work. Having worked with
            remote teams on a few projects, I specialize mostly in using react
            JS to create web applications.
          </motion.p>
          <motion.p variants={heroAnim}>
            As a tech blogger and community builder, I’m passionate about words
            that motivate and educate. I’m able to craft persuasive website copy
            for your website project. So yeah, I write, design and code. When
            I’m not in the streets of Figma or VS Code, you will find me writing
            on my{" "}
            <a
              href="https://racheltomi.com"
              rel="noreferrer"
              target="_blank"
              style={{ color: "#D7AD9D" }}
            >
              blog
            </a>{" "}
            creating helpful content on tech, especially for beginners. My
            hobbies are all over the place. I love to watch movies, listen to
            music and hang out with friends. I’m open to work. It would be a
            pleasure to hear from you.
          </motion.p>
        </div>
        <div className="download">
          <img src={downloadicon} alt="downloadlink" />
          <a
            href="https://drive.google.com/file/d/1FwEzCY5Hv52DPoonMBIY0Qo490lOZ0-V/view?usp=sharing"
            target="_blank"
            className="link"
            rel="noreferrer"
            download
          >
            <p>View Resume</p>
          </a>
        </div>
        <h2 className="tech-h2">Technologies I Use?</h2>
        <div className="techs">
          <ul>
            <h5 className="tech-h">CORE</h5>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>HTML</p>
            </div>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>CSS</p>
            </div>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>Javascript</p>
            </div>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>React Js</p>
            </div>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>Bootstrap</p>
            </div>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>SCSS</p>
            </div>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>Redux</p>
            </div>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>context api</p>
            </div>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>Figma</p>
            </div>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>Material UI</p>
            </div>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>gsap</p>
            </div>

            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>framer motion</p>
            </div>
          </ul>

          <ul>
            <h5 className="tech-h">FAMILIAR</h5>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>Node</p>
            </div>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>express</p>
            </div>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>mongodb</p>
            </div>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>tailwindcss</p>
            </div>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>web3</p>
            </div>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>adobexd</p>
            </div>
            <div className="right-arrow">
              <img src={rightarrow} alt="downloadlink" />
              <p>firebase</p>
            </div>
          </ul>
        </div>
        <p className="racheltomi">Rachel Tomi</p>
      </div>

      <motion.div variants={imgAnim} className="main"></motion.div>
    </motion.div>
  );
};

export default About;
