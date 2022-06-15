import React from "react";
import LogoFooter from '../assets/image/logo1.png';
import {FacebookOutlined, TwitterOutlined, InstagramOutlined  } from "@ant-design/icons";
import './footer.css'


const Footer=()=>{
    const date = new Date();
    let year =date.getFullYear();
    return (
        <>
        <div className="footer-content">
            <div className="logo-column">
                <img src={LogoFooter} alt="" className="logo-img"></img>
                <div className="icons">
                <FacebookOutlined />
                <TwitterOutlined />
                <InstagramOutlined />
                </div>
            
            <p className="copyright"> copyright &copy; {year} by sheCanCode <span>Inc, All right reserved</span></p>
            </div>
        
        <div className="contctus-column">
            <h3 className="footer-title">Contact-US</h3>
            <p>623 Kacyiru st,,2nd floor, <span>kigali Rwanda</span></p>
            <p><a href="tel:+250-788-716-971" />tel:+250-788-716-971</p>
            <p><a href="mail to:webmaster@example.com" />fabykalifa@gmail.com</p>
        </div>
        <div className="acount-column">
        <h3 className="footer-title">Account</h3>
        <p><a href="#">Create Account </a></p>
        <p><a href="#">Sign-in </a></p>
       </div>

        <div className="acount-column">
        <h3 className="footer-title">company</h3>
        <p><a href="#">About-company </a></p>
        <p><a href="#">Carrers </a></p>
        <p><a href="#">partner </a></p>
        </div>

        <div className="acount-column">
        <h3 className="footer-title">Resources</h3>
        <p><a href="#">Shecancode directory </a></p>
        <p><a href="#">help center </a></p>
        <p><a href="#">privacy & term </a></p>
        </div>
        </div>
        
        </>
    );
};
export default Footer;