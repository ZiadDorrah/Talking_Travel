import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import classes from "./Header.module.css";
import headerLogo from "../../assets/images/Header Logo.svg";

const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={classes.header}>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className={classes.headerLogo}>
                        <img src={headerLogo} alt="Header Logo" />
                    </div>
                    <button
                        className={`${classes.menuButton} ${isMenuOpen ? classes.open : ""}`}
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        ☰
                    </button>
                    <div className={`${classes.headerLinks} ${isMenuOpen ? classes.show : ""}`}>
                        <ul className="m-0 d-flex align-items-center p-0">
                            <li>
                                <Link to="/" className={location.pathname === "/" ? classes.active : ""}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/story" className={location.pathname === "/story" ? classes.active : ""}>
                                    Story
                                </Link>
                            </li>
                            <li>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        <span className={classes.separator}></span>
                        <div className={classes.profileAndSearch}>
                            <Link to="/search">
                                <IoSearch color="#8A53FF" style={{ width: "20px", height: "20px", marginRight: "18px" }} />
                            </Link>
                            <Link to="/profile">
                                <CgProfile color="#8A53FF" style={{ width: "20px", height: "20px" }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
