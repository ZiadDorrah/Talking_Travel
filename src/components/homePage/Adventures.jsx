import React from "react";
import classes from "./Adventures.module.css";

import iceland from "../../assets/images/Iceland card image.png";
import italy from "../../assets/images/Italy card image.png";
import dubai from "../../assets/images/Dubai card image.png";
import patagonia from "../../assets/images/Patagonia Card Image.png";

const Adventures = () => {
  return (
    <div className={`container ${classes.adventures}`}>
      <div className={`text-center ${classes.adventuresHeading}`}>
        <h2>Join our adventures</h2>
        <h1>Discover the world with us</h1>
      </div>
      <div className={`row ${classes.gallary}`}>
        <div className="col col-md-3">
          <div className="card" style={{ width: "18rem", border: "none" }}>
            <img src={iceland} className="card-img-top" alt="..." />
            <div className="card-body text-center" style={{ padding: '10px' }}>
              <p className="card-text">Iceland</p>
              <button className={`btn ${classes.discover}`}>Discover</button>
            </div>
          </div>
        </div>
        <div className="col col-md-3">
          <div className="card" style={{ width: "18rem", border: "none" }}>
            <img src={italy} className="card-img-top" alt="..." />
            <div className="card-body text-center" style={{ padding: '10px' }}>
              <p className="card-text">Italy </p>
              <button className={`btn ${classes.discover}`}>Discover</button>
            </div>
          </div>
        </div>
        <div className="col col-md-3">
          <div className="card" style={{ width: "18rem", border: "none" }}>
            <img src={dubai} className="card-img-top" alt="..." />
            <div className="card-body text-center" style={{ padding: '10px' }}>
              <p className="card-text">Dubai </p>
              <button className={`btn ${classes.discover}`}>Discover</button>
            </div>
          </div>
        </div>
        <div className="col col-md-3">
          <div className="card" style={{ width: "18rem", border: "none" }}>
            <img src={patagonia} className="card-img-top" alt="..." />
            <div className="card-body text-center" style={{ padding: '10px' }}>
              <p className="card-text">Patagonia </p>
              <button className={`btn ${classes.discover}`}>Discover</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventures;
