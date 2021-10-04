import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
import { UiData } from './UiData';

const UiUxProjects = () => {

    const[show, setShow] = useState(4); 

    const CardsloadHandler = () => {
      setShow(initialValue => initialValue + 4)
    }

    return(
       <div className="card-section">
         <div className="title">
             <div className="line"></div>
             <div className="text">
                 <p className="small-h">Projects</p>
             </div>
         </div>

    {/*first card */}

 <div className="card-container" >
 {UiData.slice(0, show).map((item) => (
 <div className="card" key={item.id}>
     <div className="card-front front1">
         <div className="content">
         <h2 className="card-h">{item.title}</h2>
<p className="card-h">{item.info}</p>
<div className="view-text">
<a href={item.url} className="view-link">
<h5>View Project<span>&#8594;</span></h5>
</a>
</div>
         </div>
     </div>
     <div className="card-front front2">
   
      <h2>{item.title}</h2>
     </div>
 </div> 
    ))}
    </div> 
    <button onClick={CardsloadHandler} className="loadBtn">Load More</button>
       <Footer />
       </div>
    )
}

export default UiUxProjects;