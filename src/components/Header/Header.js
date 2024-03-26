import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoimg from "../../Assets/headshot2.png";
import Navigation from "./Navigation";
import "./Header.scss";
import { motion } from "framer-motion";
import { lineAnimContainer } from "../../Animation";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMenu = () => setClick(!click);

  return (
    <div className="header">
      {click && <Navigation closeMenu={closeMenu} clicked={click} />}

      <motion.div
        className="header-wrapper"
        exit="exit"
        variants={lineAnimContainer}
        initial="hidden"
        animate="show"
      >
        <Link to="/" className="logo-link">
          <img src={logoimg} className="logo-img" alt="logo" />
        </Link>

        <div className="navsecondary">
          <div className="locationdiv">
            <div className="colordiv"></div>
            <div>
              {" "}
              <p>Abuja, Nigeria</p>
            </div>
          </div>
          <div
            className={click ? "menu-btn open" : "menu-btn"}
            onClick={handleClick}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
