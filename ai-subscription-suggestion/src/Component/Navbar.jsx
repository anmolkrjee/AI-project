import React from "react";
import Logo from '../assets/logo.png';
import { Link} from 'react-router-dom';
import N from '../CSS/Navbar.module.css';

function Navbar() {
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
                <Link to='/home'>Home</Link>
            </div>
        </div>
    );
}

export default Navbar;