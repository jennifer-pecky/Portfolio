import React from 'react';
import {SvgWave} from '../../Svg/Svg';
import heroimage from '../../Assets/Hero-img.png';
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
   <motion.h3 variants={heroAnim}>I’m <span>Rachel Tomi</span>, i’m here to make your web experience seemless</motion.h3>
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