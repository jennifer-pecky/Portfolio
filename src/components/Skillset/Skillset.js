import React from 'react';
import {Link} from 'react-router-dom';
import './Skillset.scss';
import {SvgWave} from '../../Svg/Svg';
//Animations
import {motion} from 'framer-motion';
import { pageAnim, heroh1, heroAnim } from '../../Animation';


const Skillset= () => {

    return(
        <motion.section className="skillset" exit="exit" variants={pageAnim} initial="hidden" animate="show">
         <SvgWave />
         <div className="skills-div">
     <Link to="/">
     <p className="back">Back to home</p>
     </Link>
         <div className="skill-h1">
         <motion.h1 variants={heroh1}>My <br />skillset</motion.h1>
         </div>
         <div className="skills">
             <motion.div variants={heroAnim} className="frontend">
                 <h2>Front end development</h2>
                 <Link to="/frontend" className="skill-link">
                     <p>View more</p>
                 </Link>
             </motion.div>
             <motion.div variants={heroAnim} className="uiux">
                 <h2>Ui/Ux Design</h2>
                 <Link to="/uiux" className="skill-link">
                     <p>View more</p>
                 </Link>
             </motion.div>
             <motion.div variants={heroAnim} className="wordpress">
                 <h2>Wordpress Development</h2> 
                 <Link to="/wordpress" className="skill-link">
                     <p>View more</p>
                 </Link>
             </motion.div>
             </div>
         </div>
        </motion.section>
    )
}

export default Skillset;