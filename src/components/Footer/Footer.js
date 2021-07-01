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
          <Link to="/contact" className="talk-link">
          <h5>Let's<span className="talk"> Talk?</span></h5>
          </Link>
         </div>
          <div className="talk-arrow">
          <img src={arrow} alt="arrow" />
          </div>
      </div>
      <hr />
      <p>You can also send me a message via gmail - 
          <a href="mailto:tomisinrachel@gmail.com"  method="POST" 
         encType="multipart/form-data" className="gmail-link">
          tomisinrachel@gmail.com
          </a>
          </p>
          <div className="footer-base">
         <div className="footer-icons">
         <ul>
              <li><Link to="/" className="footer-menu">Home</Link></li>
              <li><Link to="/" className="footer-menu">About me</Link></li>
              <li><Link to="/" className="footer-menu">My Skillset</Link></li>
              <li><Link to="/" className="footer-menu">My Blog</Link></li>
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