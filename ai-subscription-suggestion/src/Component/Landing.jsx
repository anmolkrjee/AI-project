import React from "react";
import LN from '../CSS/Landing.module.css'
import Navbar from './Navbar'
import img1 from '../assets/LandingImg1.png'
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className={LN.Lander}>
            <Navbar />
            <div className={LN.LandingContainer}>
                <div className={LN.img1}>
                    <img src={img1} className={LN.i1} />
                </div>
                <div className={LN.desi}>
                    <h1 className={LN.head}>
                        <span>Hello, </span>
                        <span className={LN.gradient}>Employee</span>
                    </h1>
                    <h3>Welcome to AskBotHQ</h3>
                    <Link to='/login'>
                        <button className={LN.button}>Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}