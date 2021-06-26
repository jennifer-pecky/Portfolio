import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import github from '../../Assets/Vector-github.svg';
import IG from '../../Assets/Vector-IG.svg';
import twitter from '../../Assets/Vector-twitter.svg';
import linkedin from '../../Assets/Vector-linkedin.svg';
import logoimg from '../../Assets/Hero-img.png';
import Navigation from './Navigation';
import './Header.scss';


const Header = () => {
const[click, setClick] = useState(false);

const handleClick = () => {
    setClick(!click);
   }
const closeMenu = () => setClick(!click);

    return(
     <div className = "header">
       
        {click && <Navigation closeMenu={closeMenu}  /> }
        <div className="header-wrapper">
        <Link to="/" className="logo-link">
           <img src={logoimg} className="logo-img" alt="logo" />
        </Link>
      
         <div className={click ? "menu-btn open" :  "menu-btn"} onClick={handleClick}>
             <div className="line1"></div>
             <div className="line2"></div>
             <div className="line3"></div>
         </div>

         <div className="header-wrapper">
        <div className = "gmail-text">
        <p>Let's chat &rarr; tomisinrachel@gmail.com</p>
         </div>
         <div className="social-icons">
           <ul>
               <li>
                   <Link to="#">
                       <img src={github} className="icon1" alt="github" />
                   </Link>
               </li>
               <li>
                   <Link to="#">
                       <img src={IG} className="icon2" alt="instagram" />
                   </Link>
               </li>
               <li>
                   <Link to="#">
                       <img src={twitter} className="icon3" alt="twitter" />
                   </Link>
               </li>
               <li>
                   <Link to="#">
                       <img src={linkedin} className="icon4" alt="linkedin" />
                   </Link>
               </li>
           </ul>
         </div>

         </div>
        </div>
     </div>
    )
}

export default Header;