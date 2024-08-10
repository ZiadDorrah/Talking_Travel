import React from "react";
import classes from "./Featured.module.css";

import featuredImage from "../../assets/images/Featured Image.png";
import { IoPlay } from "react-icons/io5";

const Featured = () => {
    return (
        <div className={`${classes.featured} container d-flex`}>
            <img src={featuredImage} class="img-thumbnail" alt="..." />
            <div className={`${classes.content}`}>
                <h2>Featured Destination</h2>
                <h1>Our swiss adventure blog</h1>
                <p>
                    Visiting the swiss alps? Want to know the requirements on travelling
                    to Switzerland during the pandemic? Our blog might help!
                </p>
                <button className={`btn ${classes.watch}`}>
                    <span>
                        <IoPlay style={{ width: "19.32" }} />
                    </span>{" "}
                    Watch Now
                </button>
            </div>
        </div>
    );
};

export default Featured;
