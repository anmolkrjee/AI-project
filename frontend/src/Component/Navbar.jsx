import React from "react";
import Logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import N from '../CSS/Navbar.module.css';

function Navbar() {
    const handleLogOut = () => {
        localStorage.removeItem("accessToken");
      };

    if (location.pathname === '/') {
        return (
            <div className={N.navbar}>
                <input type="checkbox" id={N.check} />
                <label htmlFor="check" className={N.checkbtn}>
                    <span className="material-symbols-outlined" id={N.ham}>menu</span>
                </label>
                <Link to='/'><img src={Logo} alt="Logo" className={N.logo} /></Link>
                <div className={N.menu}>
                    <Link to='/login'>
                        <button className={N.btn}>Log In</button>
                    </Link>
                    <Link to='/signup'>
                        <button className={N.btn}>Sign Up</button>
                    </Link>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className={N.navbar}>
                <input type="checkbox" id={N.check} />
                <label htmlFor="check" className={N.checkbtn}>
                    <span className="material-symbols-outlined" id={N.ham}>menu</span>
                </label>
                <Link to='/home'><img src={Logo} alt="Logo" className={N.logo} /></Link>
                <div className={N.menu}>
                    <Link to='/home' className={N.s}>Home</Link>
                    <Link to='/about' className={N.s}>About</Link>
                    <Link to='/contact' className={N.s}>Contact</Link>
                    <Link to='/' onClick={handleLogOut} className={N.profile}>Logout</Link>
                </div>
            </div>
        );
    }
}

export default Navbar;