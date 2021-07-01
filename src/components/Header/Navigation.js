import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';
//Animations
import {motion} from 'framer-motion';
import {lineAnim, lineAnimContainer, navAnim} from '../../Animation';

const Navigation = (props) => {


    return(
    
      <motion.div className= "navigation" >
           <motion.div variants={lineAnimContainer} initial="hidden" animate="show">
          <motion.div className="skew-div" variants={lineAnim}></motion.div>
        <motion.div className="skew-div" variants={lineAnim}></motion.div>
        <motion.div className="skew-div" variants={lineAnim}></motion.div>
        </motion.div>
          <div className='nav-items'>
              <motion.ul variants={navAnim} initial="hidden" animate="show">
              <NavLink to="/" exact className="navlinks"  onClick={props.closeMenu}>
              <li >HOME</li>
              </NavLink>
              <NavLink to="/skillset" className="navlinks" onClick={props.closeMenu}>
              <li>MY SKILLSETS</li>
              </NavLink>
              <NavLink to="/about" className="navlinks" onClick={props.closeMenu}>
              <li>ABOUT</li>
              </NavLink>
              <NavLink to={{pathname: "https://racheltomi.com"}} target="_blank" className="navlinks" onClick={props.closeMenu}>
              <li>MY BLOG</li>
              </NavLink>
              <NavLink to="/contact" className="navlinks" onClick={props.closeMenu}>
              <li>CONTACT</li>
              </NavLink>
              </motion.ul>
          </div>
      
      </motion.div>
    
    )
}

export default Navigation;