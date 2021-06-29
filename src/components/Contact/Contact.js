import React,{useState, useEffect} from 'react';
import './Contact.scss';
import { SvgWave } from '../../Svg/Svg';
//Animations
import {motion} from 'framer-motion';
import { heroAnim, pageAnim,pagelineAnim } from '../../Animation';

const Contact = () => {

    const [success, setSuccess] = useState(false);

    useEffect(() => {
      if ( window.location.search.includes('success=true') ) {
        setSuccess(true);
      }
    }, []);    

    return(
     <motion.div className="contact-page" exit="exit" variants={pageAnim} initial="hidden" animate="show">
           <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
           <motion.div className="pageline-div" variants={pagelineAnim}></motion.div> 
         <SvgWave />
       <div className="contact-div">
           <div className="contact-text">
           <motion.h1 variants={heroAnim}>Have a Project?</motion.h1>
           <motion.p variants={heroAnim}>Got a question, proposal or project or want to work
              together on something? Feel free to reach out.</motion.p>
           </div>
         
           <motion.div className="contact-form" variants={heroAnim}>
           {success && (
          <p style={{ color: "#D7AD9D" }}>Thank you for reaching out! I will reply shortly </p>
           )}
               <form name="contact" method="POST" action="/contact/?success=true" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-div">
                 <label>
                 <span>Your Name</span>
                <input type="text" className="text-input" name="name" />
                 </label>
                </div>
                 <div className="form-div">
                <label>
                <span>Your Email</span>
                   <input type="text" name="email" className="text-input" />
                </label>
                 </div>
                  <div className="form-div">
                  <label>
                  <span>Your Message</span>
                   <textarea rows = "6" cols = "50" name = "message" placeholder="Enter your message here...">
                   </textarea>
                  </label>
                  </div>
                 <div className="recaptcha">
                     <div data-netlify-recaptcha = "true"></div>
                 </div>
                  <div className="form-div">
                      <button type="submit" value="send message" className="contact-btn">Let's Talk</button>
                  </div>
               </form>
              
           </motion.div>
       </div>
     </motion.div>
    )
}

export default Contact;