import React, { useEffect } from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import H from '../CSS/HomePage.module.css';
import ChatBox from "./ChatBox";

export default function HomePage() {
    useEffect(() => {
        if (localStorage.getItem('accessToken') === null) {
            window.location.href = '/';
        }
    })
    return (
        <div className={H.homePage}>
            <Navbar />
            <div className={H.container}>
                <h1 className={H.title}>Welcome to our website!</h1>
                <ChatBox/>
            </div>
            <Footer />
        </div>
    )
}