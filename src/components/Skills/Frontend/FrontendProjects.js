import React, { useState } from "react";
import externallinkicon from "../../../Assets/external-link-alt-solid.svg";
import githubicon from "../../../Assets/github-brands.svg";
import Footer from "../../Footer/Footer";
import { ProjectsData } from "./ProjectsData";

const FrontProjects = () => {
  const [show, setShow] = useState(3);

  const loadHandler = () => {
    setShow((initialValue) => initialValue + 2);
  };

  return (
    <>
      <div className="project-section">
        <div className="title">
          <div className="line"></div>
          <div className="text">
            <p className="small-h">Projects</p>
          </div>
        </div>
        {ProjectsData.slice(0, show).map((item) => (
          <div className=" projects" key={item.id}>
            <div className="panel project-1">
              <div className="project-img">
                <img src={item.img} alt="project" />
              </div>
              <div className="project-text">
                <h1 className="project-h1">{item.title}</h1>
                <p></p>
                <ul>
                  {item.stacks.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
                <div>
                  <p>{item.info}</p>
                </div>
                <div className="links">
                  <div className="livelink">
                    <div className="link">
                      <a href={item.url} rel="noreferrer" target="_blank">
                        <p>Live link</p>
                      </a>
                      <img src={externallinkicon} alt="livelink" />
                    </div>
                    <div className="link">
                      <a href={item.github} rel="noreferrer" target="_blank">
                        <p>Code</p>
                      </a>
                      <img src={githubicon} alt="livelink" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button onClick={loadHandler} className="loadBtn">
          Load More
        </button>
        <Footer />
      </div>
    </>
  );
};

export default FrontProjects;
