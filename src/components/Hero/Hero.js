import React from 'react';
import {Link} from 'react-router-dom';
import {SvgWave} from '../../Svg/Svg';
import heroimage from '../../Assets/Hero-img.png';
import handWave from '../../Assets/bye-hand.png';
import scrollbar from '../../Assets/Vector.svg';
import './Hero.scss';
import Header from '../Header/Header';



const Hero = () => {

    return(
 <section className="hero-section">
   <Header />
   <div className="hero-dark">
   <SvgWave />
   <div className="hero-text">
   <h1 className="hero-h1">Hi <img src={handWave} className="hand" alt="wave" /></h1>
   <h3>I’m <span>Rachel Tomi</span>, i’m here to make your web experience seemless</h3>
   <button className="hero-btn">Get in touch</button>
   </div>
   </div>
     <div className="hero-img">
   <img src={heroimage} alt="Rachel tomi" />
     </div>
    <div className="scroll-div">
    <Link to="/skillset">
    <div className="scroll-bar">
         <img src={scrollbar} className="scroll" alt="scroll-down" />
     </div>
  <div className="scroll-text">
     <p>View my skillset</p>
     </div>
  </Link>
    </div>
 </section>       
 )
}

export default Hero;