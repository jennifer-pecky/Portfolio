import React from 'react';
import {Link} from 'react-router-dom';
import './Skillset.scss';
import {SvgWave} from '../../Svg/Svg';
//Animations
import {motion} from 'framer-motion';
import { pageAnim, heroh1, heroAnim, pagelineAnim } from '../../Animation';


const Skillset= () => {

    return(
        <motion.section className="skillset" exit="exit" variants={pageAnim} initial="hidden" animate="show">
          <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
     <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>   
       <SvgWave />
         <div className="skills-div">
     <Link to="/">
     <p className="back">&larr;</p>
     </Link>
         <div className="skill-h1">
         <motion.h1 variants={heroh1}>My skillset</motion.h1>
         <motion.div variants={heroAnim} className="underline"></motion.div>
         </div>
        
         <div className="skills">
             <motion.div variants={heroAnim} className="frontend">
                 <Link to="/frontend" className="skills-heading">Front end development</Link>
                 <Link to="/frontend" className="skill-link">
                  <p>&rarr;</p>
                 </Link>
             </motion.div>
             <motion.div variants={heroAnim} className="uiux">
                 <Link to="/uiux" className="skills-heading">Ui/Ux Design</Link>
                 <Link to="/uiux" className="skill-link">
                 <p>&rarr;</p>
                 </Link>
             </motion.div>
             <motion.div variants={heroAnim} className="wordpress">
                 <p className="skills-heading">Copywriting</p> 
             </motion.div>
             </div>
         </div>
        </motion.section>
    )
}

export default Skillset;