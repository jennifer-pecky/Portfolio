import React from 'react';
import {SvgWave} from '../../Svg/Svg';
import heroimage from '../../Assets/bandw4.png';
import handWave from '../../Assets/bye-hand.png';
import './Hero.scss';
//Animations
import {motion} from 'framer-motion';
import { pageAnim, heroAnim, heroh1, fadein, imgAnim } from '../../Animation';
import { useHistory } from 'react-router-dom';



const Hero = () => {

let history = useHistory();

    return(     
 <motion.section className="hero-section" exit="exit" variants={pageAnim} initial="hidden" animate="show">
   <div className="hero-dark">
   <SvgWave />
   <div className="hero-text">
   <motion.h1 variants={heroh1} className="hero-h1">Hi <img src={handWave} className="hand" alt="wave" /></motion.h1>
   <motion.h3 variants={heroAnim} className="herotext-h3">I’m <span>Rachel Tomi</span>, a UI Designer and Front end Developer</motion.h3>
   <motion.p variants={heroAnim}>I design and build beautiful and functional user interfaces for websites and web applications. I design and build beautiful
    and functional user interfaces for websites and web applications</motion.p>
   <motion.button variants={fadein} className="hero-btn" onClick={() => history.push('/skillset')}>View my Skillsets</motion.button>
   </div>
   </div>
     <div className="hero-img">
   <motion.img variants={imgAnim} src={heroimage} alt="Rachel tomi" />
     </div>
 </motion.section>      
 )
}

export default Hero;