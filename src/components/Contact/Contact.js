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
               <form action="#">
                <div className="form-div">
                 <label>
                 <span>Your Name</span>
                <input type="text" className="text-input" name="name"></input>
                 </label>
                </div>
                 <div className="form-div">
                <label>
                <span>Your Email</span>
                   <input type="text" name="email" className="text-input"></input>
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
                      <button type="submit" className="contact-btn">Let's Talk</button>
                  </div>
               </form>
              
           </div>
       </div>
     </div>
    )
}

export default Contact;