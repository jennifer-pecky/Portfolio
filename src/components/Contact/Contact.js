import React from 'react';
import './Contact.scss';
import { SvgWave } from '../../Svg/Svg';

const Contact = () => {


    return(
     <div className="contact-page">
         <SvgWave />
       <div className="contact-div">
           <div className="contact-text">
           <h1>Have a Project?</h1>
           <p>Got a question, proposal or project or want to work
              together on something? Feel free to reach out.</p>
           </div>
           <div className="contact-form">
               <form name="contact" method="POST" data-netlify="true">
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
                  <div className="form-div">
                   <input type="file" name="file" className="upload" placeholder="Upload file"></input>
                 </div>
                 <div className="recaptcha">
                     <div data-netlify-recaptcha = "true"></div>
                 </div>
                  <div className="form-div">
                      <button type="submit" value="send message" className="contact-btn">Let's Talk</button>
                  </div>
               </form>
              
           </div>
       </div>
     </div>
    )
}

export default Contact;