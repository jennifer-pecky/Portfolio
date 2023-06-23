import React, { useState, useEffect } from "react";
import "./Contact.scss";
import { SvgWave } from "../../Svg/Svg";
//Animations
import { motion } from "framer-motion";
import { heroAnim, pageAnim, pagelineAnim } from "../../Animation";
import Button from "../Button/Button";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <motion.div
      className="contact-page"
      exit="exit"
      variants={pageAnim}
      initial="hidden"
      animate="show"
    >
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <SvgWave />
      <div className="contact-div">
        <div className="contact-text">
          <motion.h1 variants={heroAnim}>
            I love working on new projects
          </motion.h1>
          <motion.p variants={heroAnim}>
            {" "}
            Send me a message to discuss the best possible ways to help achieve
            your goals. I will reply as quick as possible.
          </motion.p>
        </div>

        <motion.div className="contact-form" variants={heroAnim}>
          {success && (
            <p style={{ color: "#D7AD9D" }}>
              Thank you for reaching out! I will reply shortly{" "}
            </p>
          )}
          <form
            name="contact"
            method="POST"
            action="/contact/?success=true"
            data-netlify="true"
          >
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
                <textarea
                  rows="6"
                  cols="50"
                  name="message"
                  placeholder="Enter your message here..."
                ></textarea>
              </label>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <div className="form-div">
              <Button
                primary
                type="submit"
                value="send message"
                className="contact-btn"
              >
                Let's Talk
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
