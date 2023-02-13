import React from "react";
import Logo from "../../assets/Logo.png";
import "./navbar.css";

function Navbar() {
    return (
        <div className="navbar__container">
            <img className="navbar__logo" src={Logo} alt="logo" />

            <div className="navbar__item_container">
                <div className="navbar__item">Portfolio</div>
                <div className="navbar__item">Contact</div>
            </div>
        </div>
    );
}

export default Navbar;
