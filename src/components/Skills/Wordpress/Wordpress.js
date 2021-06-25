import React from 'react';
import '../Skills.scss';
import WordpressHero from './WordpressHero';
import WordpressProjects from './WordpressProjects';
//Animations
import {motion} from 'framer-motion';
import { pageAnim } from '../../../Animation';

const Wordpress = () => {

    return(
    <motion.div
    exit="exit" 
    variants={pageAnim} 
    initial="hidden" 
    animate="show">
    <WordpressHero />
    <WordpressProjects />
    </motion.div>
    )
}

export default Wordpress;