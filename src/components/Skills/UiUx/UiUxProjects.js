import React from 'react';
import {Link} from 'react-router-dom';
import project1 from '../../../Assets/payboxshot.png';
import project2 from '../../../Assets/unicashot.png';
import externallinkicon from '../../../Assets/external-link-alt-solid.svg';
import githubicon from '../../../Assets/github-brands.svg';
import Footer from '../../Footer/Footer';
import arrow from '../../../Assets/Arrow.png';

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
        <p class="card-h">Java is a class-based, object-oriented programming language that
         is designed to have as few implementation dependencies as possible.</p>
         <div className="view-text">
          <Link to="/contact" className="view-link">
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
        <p class="card-h">Java is a class-based, object-oriented programming language that
         is designed to have as few implementation dependencies as possible.</p>
         <div className="view-text">
          <Link to="/contact" className="view-link">
          <h5>View Project<span>&#8594;</span></h5>
          </Link>
      </div>
                   </div>
               </div>
               <div class="card-front front2">
                <h2>Unica</h2>
               </div>
           </div> 

        </div>  {/*card container div ends */}   

   
       <Footer />
       </div>
    )
}

export default UiUxProjects;