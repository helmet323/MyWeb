import React from "react";
import Logo from "../../assets/Logo.png";
import "./navbar.css";

function Navbar() {
    return (
        <div className="navbar__container">
            <a href="#home">
                <img className="navbar__logo" src={Logo} alt="logo" />
            </a>

            <div className="navbar__item_container">
                <a className="navbar__item" href="#portfolio">
                    Portfolio
                </a>
                <a className="navbar__item" href="#contact">
                    Contact
                </a>
            </div>
        </div>
    );
}

export default Navbar;
