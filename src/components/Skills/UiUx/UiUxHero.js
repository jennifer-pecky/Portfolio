import React from 'react';
import {Link} from 'react-router-dom';
import scrollbar from '../../../Assets/Vector.svg';


const UiUxHero = () => {

    return(
     <section className="main-section" id="uiux-section">
     <div className="hero">
     <Link to="/skillset">
     <p className="back">Back to Skillsets</p>
     </Link>
     <div className="hero-text">
          <h1>Ui/Ux Design</h1>
          <p>sample text  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. sample text sample text . sample text  Sed ut perspiciatis unde omnis iste natu  totam rem aperiam,
               eaque ipsa quae ab . sample text  sample text.
         </p>
      </div>
      <div className="scroll-bar">
         <img src={scrollbar} className="scroll" alt="scroll-down" />
     </div>
     </div>
     </section>
    )
}

export default UiUxHero;