import React from 'react';
import {Link} from 'react-router-dom';
import './About.scss';
import downloadicon from '../../Assets/download-icon.png';
import rightarrow from '../../Assets/Right-arrow.png';
//Animations
import {motion} from 'framer-motion';
import { heroAnim, heroh1, imgAnim, pageAnim } from '../../Animation';


const About = () => {

    return(
    <motion.div
    exit="exit" 
    variants={pageAnim} 
    initial="hidden" 
    animate="show"
    className="main-main">
     <div className="content">
           <div className="small-heading">
                 <motion.p variants={heroh1} className="small-h">About Me</motion.p>
           </div>
           <div className="text-content">
               <motion.p variants={heroAnim} className="big-text">
               I’m <span className="name">Rachel Tomi</span>, a Frontend developer based in Nigeria. I priotize user experience, create outstanding designs and bring 
               these designs to life using the latest technology.
               </motion.p>
               <p>
                 There are many Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always f
                 or non-characteristic words etc.
                 </p>
           </div>
           <div className="download">
           <img src={downloadicon} alt="downloadlink" />
                     <Link to='/' className="link">
                      <p>Download Resume</p>
                      </Link>
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
            <p>firebase</p>
        </div>
        <div className="right-arrow">
           <img src={rightarrow} alt="downloadlink" />
            <p>gsap</p>
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
            <p>adeobexd</p>
        </div>
        <div className="right-arrow">
           <img src={rightarrow} alt="downloadlink" />
            <p>framer motion</p>
        </div>
</ul>

      </div>
<p className="racheltomi">Rachel Tomi</p>
         </div>

<motion.div variants={imgAnim} className="main"></motion.div>    
   
     </motion.div>
    )
}

export default About;