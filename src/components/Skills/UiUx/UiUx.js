import React from 'react';
import '../Skills.scss';
import UiUxHero from './UiUxHero';
import UiUxProjects from './UiUxProjects';
//Animations
import {motion} from 'framer-motion';
import { pageAnim } from '../../../Animation';

const UiUx = () => {

    return(
    <motion.div
    exit="exit" 
    variants={pageAnim} 
    initial="hidden" 
    animate="show"
    >
    <UiUxHero />
    <UiUxProjects />
    </motion.div>
    )
}

export default UiUx;