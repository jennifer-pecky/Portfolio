import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import { heroAnim } from '../../../Animation';


const UiUxHero = () => {

    return(
     <section className="main-section" id="uiux-section">
     <div className="hero">
     <Link to="/skillset">
     <p className="back">Back to Skillsets</p>
     </Link>
     <div className="hero-text">
          <motion.h1 variants={heroAnim}>Ui/Ux Design</motion.h1>
          <motion.p variants={heroAnim}>sample text  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. sample text sample text . sample text  Sed ut perspiciatis unde omnis iste natu  totam rem aperiam,
               eaque ipsa quae ab . sample text  sample text.
         </motion.p>
      </div>
     </div>
     </section>
    )
}

export default UiUxHero;