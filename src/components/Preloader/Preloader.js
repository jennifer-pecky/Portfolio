import React, { useEffect } from "react";
import "./Preloader.scss";

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="loader">
      <div className="name-anim">
        <p className="load">j</p>
        <p className="load">e</p>
        <p className="load">n</p>
        <p className="load">n</p>
        <p className="load">y</p>
        {/* <p className="load">l</p>
        <p className="load">t</p>
        <p className="load">o</p>
        <p className="load">m</p>
        <p className="load">i</p> */}
      </div>
    </div>
  );
};

export default Preloader;
