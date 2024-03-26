import React from "react";
import "./About.scss";
import rightarrow from "../../Assets/Right-arrow.png";
import cv from "../../Assets/MaduagwuJennifer_Chioma_frontend_resume.pdf";
// import CV from
//Animations
import { motion } from "framer-motion";
import {
  heroAnim,
  heroh1,
  imgAnim,
  pageAnim,
  pagelineAnim,
} from "../../Animation";
import { SvgWave } from "../../Svg/Svg";
import Button from "../Button/Button";

const About = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnim}
      initial="hidden"
      animate="show"
      className="main-main"
    >
      <SvgWave />
      <motion.div variants={imgAnim} className="main"></motion.div>
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <div className="about-content">
        <div className="small-heading">
          <motion.h2 variants={heroh1} className="small-h">
            About Me
          </motion.h2>
        </div>
        <div className="text-content">
          <motion.p variants={heroAnim}>
            Hello! I'm <span className="name">Jennifer</span>,a frontend
            developer with a focus on creating accessible web applications for
            various organizations. With a strong passion for development, I
            consistently strive to deliver top-notch results in every project I
            undertake. My enthusiasm for web development drives me to
            continuously explore and adopt the latest technological
            advancements, ensuring that I remain at the forefront of my field.
          </motion.p>
          <motion.p className="text" variants={heroAnim}>
            My core qualities are empathy, good communication, and organization.
            This has played a significant role in my approach to development, as
            well as my relationship with team members in every company I’ve
            worked with or projects I’ve been a part of. I truly believe that
            understanding the needs and emotions of users is the key to creating
            websites that not only work great but also leave a positive impact.
            I'm always on the lookout for new skills to add to my arsenal.
            Whether it's attending webinars, and conferences, or diving into
            online resources, I'm dedicated to staying on the cutting edge of
            frontend development.
          </motion.p>
        </div>
        <motion.div variants={heroAnim} className="download">
          <Button primary>
            <a
              href={cv}
              download
              className="link btn" // Combine class names
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </Button>
        </motion.div>

        <div className="techs">
          <h2 className="tech-h2">Technologies I Use?</h2>
          <div className="tech-ul">
            <ul>
              <h5 className="tech-h">CORE</h5>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>HTML5</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>CSS3</p>
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
                <p>Typescript</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>Vue js</p>
              </div>
              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>Bootstrap</p>
              </div>

              <div className="right-arrow">
                <img src={rightarrow} alt="downloadlink" />
                <p>Tailwindcss</p>
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
                <p>Nextjs</p>
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
                <p>framer motion</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
