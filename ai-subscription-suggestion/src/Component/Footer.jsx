import React from "react";
import F from '../CSS/Footer.module.css'; // Import the CSS module
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className={F.footer}>
            <div className={F.logoandadver}>
                <img src={Logo} alt="logo" className={F.logo} />
                <div className={F.adver}>Contact us and start project with us. We will get back to you soon</div>
            </div>
            <div className={F.footerinfo}>
                <div className={F.a}>
                    <div className={F.navv}>Navigation</div>
                    <Link to='/' className={F.de}>Home</Link>
                    <div className={F.de}>About</div>
                    <div className={F.de}>Title</div>
                    <div className={F.de}>Services</div>
                </div>
                <div className={F.a}>
                    <div className={F.navv}>Licence</div>
                    <div className={F.de}>Privacy Policy</div>
                    <div className={F.de}>Copyright</div>
                    <div className={F.de}>Terms of use</div>
                </div>
            </div>
        </div>
    );
}
