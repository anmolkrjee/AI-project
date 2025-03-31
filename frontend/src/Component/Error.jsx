import React from "react";
import plane from '../assets/plane.png';
import { Link } from "react-router-dom";
import E from '../CSS/Error404.module.css';

export default function Error404() {
    return (
        <div className={E.error404}>
            <div className={E.error}>
                <div className={E.sky}>
                    <h2>
                        <span>4</span>
                        <span>0</span>
                        <span>4</span>
                    </h2>
                    <div className={E.grass}></div>
                    <img src={plane} alt="plane" className={E.plane} />
                </div>
                <div className={E.field}>
                    <h2>Opps...looks like you got lost</h2>
                    <Link to='/' className={E.a}>Go Home</Link>
                </div>
            </div>
        </div>
    );
}