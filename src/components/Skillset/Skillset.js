import React from 'react';
import {Link} from 'react-router-dom';
import './Skillset.scss';
import {SvgWave} from '../../Svg/Svg';


const Skillset= () => {

    return(
        <section className="skillset">
         <SvgWave />
         <div className="skills-div">
     <Link to="/">
     <p className="back">Back to home</p>
     </Link>
         <div className="skill-h1">
         <h1>My <br />skillset</h1>
         </div>
         <div className="skills">
             <div className="frontend">
                 <h2>Front end development</h2>
                 <Link to="/frontend" className="skill-link">
                     <p>View more</p>
                 </Link>
             </div>
             <div className="uiux">
                 <h2>Ui/Ux Design</h2>
                 <Link to="/uiux" className="skill-link">
                     <p>View more</p>
                 </Link>
             </div>
             <div className="wordpress">
                 <h2>Wordpress Development</h2> 
                 <Link to="/wordpress" className="skill-link">
                     <p>View more</p>
                 </Link>
             </div>
             </div>
         </div>
        </section>
    )
}

export default Skillset;