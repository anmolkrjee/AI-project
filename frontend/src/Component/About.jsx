import React, {useEffect} from "react";
import A from '../CSS/About.module.css';
import Navbar from './Navbar'
import Footer from './Footer'

export default function AboutUs({ item }) {
    useEffect(() => {
            if (localStorage.getItem('accessToken') === null) {
                window.location.href = '/';
            }
        })
    return (
        <div className={A.aboutManager}>
            <Navbar />
            <h1 className={A.aboutHead}>About Us</h1>
            <div className={A.aboutData}>
                {item.map((val) => (
                    <div className={A.container} key={val.id}>
                        <div className={A.card}>
                            <div className={A.lines}></div>
                            <div className={A.imgBx}>
                                <img src={val.imgSrc} alt="nothing" height="100cm" width="100cm" />
                            </div>
                            <div className={A.content}>
                                <div className={A.detail}>
                                    <div className={A.name}>{val.name}</div>
                                    <div className={A.number}>{val.pnumber}</div>
                                    <div className={A.email}>{val.email}</div>
                                    <div className={A.role}>({val.role})</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}