import React from 'react';
import {Link} from 'react-router-dom';
import logoImg from '../../Assets/logo-small.png';
import github from '../../Assets/github-square-brands.svg';
import IG from '../../Assets/instagram-square-brands.svg';
import twitter from '../../Assets/twitter-square-brands.svg';
import linkedin from '../../Assets/linkedin-brands.svg';
import './Header.scss';


const Header = () => {

    return(
     <div className = "header">
        <div className="header-wrapper">
        <div className = "logo">
         <img src={logoImg} alt="logo" />
         </div>
         <div className="menu-btn">
             <div className="line1"></div>
             <div className="line2"></div>
         </div>

         <div className="header-wrapper">
        <div className = "gmail-text">
        <p>Let's chat---tomisinrachek@gmail.com</p>
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