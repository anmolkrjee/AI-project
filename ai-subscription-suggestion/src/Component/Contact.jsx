import React from "react";
import C from '../CSS/Contact.module.css';
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Contact() {
    return (
        <div className={C.ContactManager}>
            <Navbar />
            <section className={C.contactSection}>
                <h1>Contact Us</h1>
                <p>Please provide your company details or contact us via phone or video call.</p>
                <div className={C.contactInfo}>
                    <div className={C.contactCard}>
                        <span className="material-symbols-outlined">location_on</span>
                        <p>LPU Phagwara Punjab 144411.</p>
                    </div>
                    <div className={C.contactCard}>
                        <span className="material-symbols-outlined">mail</span>
                        <p>askbotHQ8956@gmail.com</p>
                    </div>
                    <div className={C.contactCard}>
                        <span className="material-symbols-outlined">call</span>
                        <p>022-78563214</p>
                    </div>
                </div>
                <div className={C.soc}>
                    <i className="fa-brands fa-square-instagram" id={C.instagramIcon}></i>
                    <i className="fa-brands fa-facebook-f" id={C.facebookIcon}></i>
                    <i className="fa-brands fa-youtube" id={C.youtubeIcon}></i>
                </div>
                <div className={C.formquery}>
                    <h1>Apply Online</h1>
                    <form>
                        <div className={C.formPro}>
                            <div className={C.userinfo}>
                                <input type="text" className={C.userForm} name="name" id={C.Name} placeholder="Full name" />
                                <input type="email" name="email" id={C.Email} placeholder="Email" className={C.userForm} />
                                <input type="text" name="tilte" id={C.Title} placeholder="Title" className={C.userForm} />
                                <input type="number" name="phone" id={C.Number} className={C.userForm} placeholder="Phone Number" />
                            </div>
                            <div className={C.userproblem}>
                                <textarea name="problem" id={C.Problem} className={C.userForm} placeholder="How can we help you?"></textarea>
                            </div>
                        </div>
                        <input type="submit" value="Send" className={C.userForm} id={C.Submit} />
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
}