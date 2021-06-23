import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';
import arrow from '../../Assets/Arrow.png';

const Footer = () => {

    return(
     <footer className="main-footer">
      <h4>What next?</h4>
      <div className="talk-div">
         <div className="talk-text">
         <h5>Let's<span className="talk"> Talk?</span></h5>
         </div>
          <div className="talk-arrow">
          <img src={arrow} alt="arrow" />
          </div>
      </div>
      <hr />
      <p>You can also send me a message via gmail - 
          <Link href="#" className="gmail-link">
          tomisinrachel@gmail.com
          </Link>
          </p>
          <div className="footer-base">
         <div className="footer-icons">
         <ul>
              <li><Link to="/" className="footer-social-icon">Home</Link></li>
              <li><Link to="/" className="footer-social-icon">About me</Link></li>
              <li><Link to="/" className="footer-social-icon">My Skillset</Link></li>
              <li><Link to="/" className="footer-social-icon">My Blog</Link></li>
          </ul>
         </div>
          <div className="footer-t">
          <p>Designed and developed by Rachel Tomi</p>
          </div>
          </div>
     </footer>
    )
}

export default Footer;