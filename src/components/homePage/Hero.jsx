import React from 'react';
import classes from './Hero.module.css';

import { IoPlay } from "react-icons/io5";

const hero = () => {
    return (
        <div className={`d-flex align-items-center ${classes.hero}`}>
            <div className={`container`}>
                <div className={` ${classes.content}`}>
                    <h1><span>Let’s talk</span> about your next trip!</h1>
                    <p>Share your favorite travel destination and we will feature it in our next blog!</p>
                </div>
                <div className={` ${classes.heroLinks}`}>
                    <button className={`btn ${classes.shareStory}`}>Share your story</button>
                    <button className={`btn ${classes.highlights}`}><span><IoPlay style={{ width: '19.32' }} /></span> Watch highlights</button>
                </div>
            </div>
        </div>
    );
};

export default hero;