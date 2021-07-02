import React from 'react';
import project3 from '../../../Assets/IMS trending.png';
import project1 from '../../../Assets/FF watches.png';
import project2 from '../../../Assets/Paybox-screenshot.png';
import externallinkicon from '../../../Assets/external-link-alt-solid.svg';
import githubicon from '../../../Assets/github-brands.svg';
import Footer from '../../Footer/Footer';


const FrontProjects = () => {

    return(
       <div className="project-section">
         <div className="title">
             <div className="line"></div>
             <div className="text">
                 <p className="small-h">Projects</p>
             </div>
         </div>

        <div className=" projects">
        <div className="panel project-1">
        <div className="project-img">
      <img src={project1} alt="project" />
        </div>
        <div className="project-text">
          <h1 className="project-h1">FashionFiesta</h1>
          <p>FashionFiesta is an ecommerce website I handed coded from scratch using react js. 
              A user can create an account, login, add items to cart, remove items from cart, view details of each item and proceed to make a payment using Paystack.
          </p>
          <ul>
              <li>Tech Stack:</li>
              <li>React Js</li>
              <li>SCSS</li>
              <li>Context Api</li>
              <li>Firebase</li>
          </ul>
          <div className="links">
                  <div className="livelink">
                     <div className="link">
                     <a href= "https://fashionfiesta-a4172.web.app" rel='noreferrer' target="_blank">
                      <p>Live link</p>
                      </a>
                      <img src={externallinkicon} alt="livelink" />
                     </div>
                     <div className="link">
                     <a href= "https://github.com/Racheal-spec/FashionFiesta" rel='noreferrer' target="_blank">
                      <p>Code</p>
                      </a>
                      <img src={githubicon} alt="livelink" />
                     </div>
                  </div>
          </div>
        </div>
        </div>    
        </div> 

        <div className=" projects">
        <div className="project-1">
        <div className="project-img" id="img-2">
      <img src={project2} alt="project" />
        </div>
        <div className="project-text">
          <h1 className="project-h1">Paybox</h1>
          <p>A financial application landing page.
               P.S-landing page and all assets designed by me
          </p>
          <ul>
          <li>Tech Stack:</li>
              <li>Html</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Gsap</li>
          </ul>
          <div className="links">
                  <div className="livelink">
                     <div className="link">
                     <a href='https://payboxapp.netlify.app' rel='noreferrer' target="_blank">
                      <p>Live link</p>
                      </a>
                      <img src={externallinkicon} alt="livelink" />
                     </div>
                     <div className="link">
                     <a href='https://github.com/Racheal-spec/PayBox' rel='noreferrer' target="_blank">
                      <p>Code</p>
                      </a>
                     <img src={githubicon} alt="livelink" />
                     </div>
                  </div>
          </div>
        </div>
        </div>    
        </div> 

        <div className="projects">
        <div className="panel project-1">
        <div className="project-img" id="img-3">
      <img src={project3} alt="project" />
        </div>
        <div className="project-text">
          <h1 className="project-h1">Instamoviesearch</h1>
          <p>A react movie app built using The Movie DB Api. Users can get list of trending, popular and
               top rated movies. What's more? Users can also search for their favourite movies and add these movies to their watchlist.
          </p>
          <ul>
          <li>Tech Stack:</li>
             <li>React Js</li>
              <li>CSS Grid</li>
              <li>Redux</li>
              <li>SCSS</li>
          </ul>
          <div className="links">
                  <div className="livelink">
                     <div className="link">
                     <a href='https://instamoviesearch.netlify.app/' rel='noreferrer' target="_blank">
                      <p>Live link</p>
                      </a>
                      <img src={externallinkicon} alt="livelink" />
                     </div>
                     <div className="link">
                     <a href='https://github.com/Racheal-spec/Instasearchmovie' rel='noreferrer' target="_blank">
                      <p>Code</p>
                      </a>
                      <img src={githubicon} alt="livelink" />
                     </div>
                  </div>
          </div>
        </div>
        </div>    
        </div> 
        <Footer />
       </div>
    
       
    )
}

export default FrontProjects;