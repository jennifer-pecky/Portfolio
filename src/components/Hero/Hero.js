import React from 'react';
import {SvgWave} from '../../Svg/Svg';
import heroimage from '../../Assets/Hero-img.png';
import handWave from '../../Assets/bye-hand.png';
import './Hero.scss';
import Header from '../Header/Header';



const Hero = () => {

    return(
 <div className="hero-section">
   <Header />
   <div className="hero-dark">
   <SvgWave />
   <div className="hero-text">
   <h1>Hi <img src={handWave} alt="wave" /></h1>
   <h3>I’m <span>Rachel Tomi</span>, i’m here to make your web experience seemless</h3>
   <button className="hero-btn">Get in touch</button>
   </div>
   </div>
     <div className="hero-img">
   <img src={heroimage} alt="Rachel tomi" />
     </div>
 </div>       
 )
}

export default Hero;