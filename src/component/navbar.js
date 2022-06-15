import React from "react";
import logo from "../assets/image/logo1.png"
import "./navbar.css";

const Nav=()=>{
    return(
        <>
        <div className="nav">
        <img src={logo} alt="rwanda-booking-tour" className="logo-img"/>
        <div className="navigation-links">
            <ul className="nav-links">
                <li><a href="/ " className="nav-link">HOME</a></li>
                <li><a href="/about" className="nav-link">ABOUT-US</a></li>
                <li><a href="Contact-us " className="nav-link">CONTACT-US </a></li>
                <li><a href=" " className="nav-link link-green">SIGN-IN </a></li>
                <li><a href=" /Tours" className="nav-link btn-link">TOURS </a></li>
            </ul>

        </div>
        
            </div>
        </>
    )
}
export default Nav;