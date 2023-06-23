import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import { motion } from "framer-motion";
import Button from "../../Button/Button";
import { heroAnim } from "../../../Animation";

const UiUxProjects = () => {
  const [show, setShow] = useState(4);

  const CardsloadHandler = () => {
    setShow((initialValue) => initialValue + 4);
  };

  return (
    <>
      <motion.div variants={heroAnim} className="card-section">
        <div className="title">
          <div className="line"></div>
          <div className="text">
            <p className="small-h">Projects</p>
          </div>
        </div>

        <div className="card-container">
          <div className="card">
            <div className="card-front front1">
              <div className="content">
                <h2 className="card-h">PayBox</h2>
                <p className="card-h">
                  PayBox is a fintech company that allows easy payment across
                  countries.PayBox landing page was designed to promote the
                  company's mobile app and showcasing the app features
                </p>
                <div className="view-text">
                  <a
                    href="https://dribbble.com/shots/15957084-App-landing-page-PayBox-Homepage"
                    className="view-link"
                  >
                    <h5>
                      View Project<span>&#8594;</span>
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-front front2">
              <h2>Paybox</h2>
            </div>
          </div>
          {/*******************SECOND CARD *******************/}
          <div className="card">
            <div className="card-front front1">
              <div className="content">
                <h2 className="card-h">Unica</h2>
                <p className="card-h">
                  Unica is a digital marketing agency focused on branding and
                  marketing. This website was designed with the intent to
                  increase the company's sales and conversation rate
                </p>
                <div className="view-text">
                  <a
                    href="https://dribbble.com/shots/15957155-Digital-Marketing-website-landing-page"
                    className="view-link"
                  >
                    <h5>
                      View Project<span>&#8594;</span>
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-front front3">
              <h2>Unica</h2>
            </div>
          </div>

          {/**************** THIRD CARD ***************/}
          <div className="card">
            <div className="card-front front1">
              <div className="content">
                <h2 className="card-h">Akinlawon</h2>
                <p className="card-h">
                  Akinlawon is a photography website that shows Akinlawon's
                  personality and a concise collection of his best work
                </p>
                <div className="view-text">
                  <a
                    href="https://dribbble.com/shots/16085290-Photography-portfolio-website"
                    className="view-link"
                  >
                    <h5>
                      View Project<span>&#8594;</span>
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-front front4">
              <h2>Akinlawon</h2>
            </div>
          </div>

          {/****************FOURTH CARD *********************/}
          <div className="card">
            <div className="card-front front1">
              <div className="content">
                <h2 className="card-h">Instamoviesearch</h2>
                <p className="card-h">
                  Instamoviesearch is a movie community where users can view
                  trending and top rated series for free.
                </p>
                <div className="view-text">
                  <a href="/" className="view-link">
                    <h5>
                      View Project<span>&#8594;</span>
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-front front5">
              <h2>Instamoviesearch</h2>
            </div>
          </div>
        </div>
        <div className="loadBtn">
          <Button primary onClick={CardsloadHandler}>
            Load More
          </Button>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default UiUxProjects;
