import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../Footer/Footer';

const UiUxProjects = () => {

    return(
       <div className="card-section">
         <div className="title">
             <div className="line"></div>
             <div className="text">
                 <p className="small-h">Projects</p>
             </div>
         </div>

    {/*first card */}
        <div className="card-container">
           <div className="card">
               <div className="card-front front1">
                   <div className="content">
                   <h2 class="card-h">PayBox</h2>
        <p class="card-h">PayBox is a fintech company that allows easy payment and all forms of local and international transaction. This landing page
         was designed to promote the company's mobile app, showcasing the 
         app features so that users can click through and download the app</p>
         <div className="view-text">
          <Link to={{pathname: "https://dribbble.com/shots/15957084-App-landing-page-PayBox-Homepage"}} className="view-link">
          <h5>View Project<span>&#8594;</span></h5>
          </Link>
      </div>
                   </div>
               </div>
               <div class="card-front front2">
                <h2>PayBox</h2>
               </div>
           </div> 
        {/*second card */}
        <div className="card">
               <div className="card-front front1">
                   <div className="content">
                   <h2 class="card-h">Unica</h2>
        <p class="card-h">Unica is a digital marketing agency focused on branding and marketing. This website was designed
         with the intent to increase the company's sales and conversation rate</p>
         <div className="view-text">
          <Link to={{pathname: "https://dribbble.com/shots/15957155-Digital-Marketing-website-landing-page"}} className="view-link">
          <h5>View Project<span>&#8594;</span></h5>
          </Link>
      </div>
                   </div>
               </div>
               <div class="card-front front2">
                <h2>Unica</h2>
               </div>
           </div> 

  {/*third card */}
  <div className="card">
               <div className="card-front front1">
                   <div className="content">
                   <h2 class="card-h">Rachel Tomi Portfolio</h2>
        <p class="card-h">This is my personal portfolio website design</p>
         <div className="view-text">
          <Link to={{pathname: "https://dribbble.com/shots/15957309-RachelTomi-Portfolio-website"}} className="view-link">
          <h5>View Project<span>&#8594;</span></h5>
          </Link>
      </div>
                   </div>
               </div>
               <div class="card-front front2">
                <h2>Rachel Tomi</h2>
               </div>
           </div> 
        </div>  {/*card container div ends */}   

   
       <Footer />
       </div>
    )
}

export default UiUxProjects;