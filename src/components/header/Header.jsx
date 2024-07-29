import React from "react";

import classes from "./Header.module.css";
import headerLogo from "../../assets/images/Header Logo.svg";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";

const Header = () => {
    const location = useLocation();
    return (
        <header className={classes.header}>
            <nav className={`navbar navbar-expand-lg`}>
                <div className="container">
                    <div className="headerLogo">
                        <img src={headerLogo} alt="" />
                    </div>
                    <div className="headerLinks d-flex ">
                        <ul className="m-0 d-flex align-items-center p-0">
                            <li>
                                <Link
                                    to="/"
                                    className={location.pathname === "/" ? classes.active : ""}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/story"
                                    className={
                                        location.pathname === "/story" ? classes.active : ""
                                    }
                                >
                                    Story
                                </Link>
                            </li>
                            <li>
                                <Link to="">Gallery</Link>
                            </li>
                            <li>
                                <Link to="">Contact Us</Link>
                            </li>
                        </ul>
                        <span className={classes.separator}></span>
                        <Link>
                            <IoSearch
                                color="#8A53FF"
                                style={{ width: "20px", height: "20px", marginRight: "18px" }}
                            />
                        </Link>
                        <Link>
                            <CgProfile
                                color="#8A53FF"
                                style={{ width: "20px", height: "20px" }}
                            />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
