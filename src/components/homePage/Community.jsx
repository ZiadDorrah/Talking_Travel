import React from "react";
import classes from "./Community.module.css";

const Community = () => {
    const formHandle = (e) => {
        e.preventDefault();
    };
    return (
        <div className={`text-center ${classes.community}`}>
            <div className={`  ${classes.communityHeading}`}>
                <h2>Let’s build a community</h2>
                <h1>Join our next destination</h1>
            </div>
            <form
                className={`m-auto text-start ${classes.shareForm}`}
                action=""
                onSubmit={formHandle}
            >
                <div className={` ${classes.formHeading}`}>
                    <h3 className="">Share your travels</h3>
                    <p>
                        Suggest a new travel destination that you want to see and we will
                        feature it in our blog.
                    </p>
                </div>
                <div className={classes.formHandleInput}>
                    <input type="text" placeholder="Destination name" />
                    <select
                        style={{ color: "#8b7575" }}
                        className="form-select"
                        id="inputGroupSelectCountry"
                    >
                        <option defaultValue>Country of Destination</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <input type="text" placeholder="Your name" />
                    <select
                        style={{ color: "#8b7575" }}
                        className="form-select"
                        id="inputGroupSelectCategory"
                    >
                        <option defaultValue>Shooting category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <textarea
                        className="form-control"
                        aria-label="With textarea"
                        placeholder="Describe what kind of photos you want to focus on"
                    ></textarea>
                </div>
                <button type="submit" className={`btn ${classes.submitbtn}`}>Submit</button>
            </form>
        </div>
    );
};

export default Community;