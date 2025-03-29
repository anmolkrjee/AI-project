import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/logo.png';
import S from '../CSS/Sign.module.css';
import signUpImg from '../assets/logInImg.png'

const length = 10;

export default function SignUp() {
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic client-side validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // Clear previous errors
        setError('');
        setSuccess('');

        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                setFormData({
                    name: '',
                    number: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
                alert("Registration successful! Please log in.");
                Navigate('/login')
            } else {
                const errorResult = await response.json();
                setError(errorResult.message || "Registration failed. Please try again.");
            }
        } catch (error) {
            setError("Network error. Please try again.");
        }
    };

    return (
        <div className={S.signUp}>
            <header>
                <Link to="/"><img src={Logo} alt="logo" className={S.logo} /></Link>
            </header>
            <div className={S.grey}>
                <div className={S.signnn}>
                    <form className={S.form} onSubmit={handleSubmit}>
                        <div className={S.namePnumber}>
                            <div className={S.nnaammee}>
                                <label htmlFor="name" id="Name" className={S.label + ' ' + S.required}>Name</label>
                                <input className={S.input} type="text" name="name" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className={S.ppnnoo}>
                                <label htmlFor="number" id="Number" className={S.label + ' ' + S.required}>Phone Number</label>
                                <input className={S.input} type="text" name="number" id="number" placeholder="Enter your phone number" value={formData.number} onChange={handleChange} required maxLength={length} minLength={length} />
                            </div>
                        </div>
                        <label htmlFor="email" id="Email" className={S.label + ' ' + S.required}>Email ID</label>
                        <input className={S.input} type="email" name="email" id={S.eemm} placeholder="Enter your Email ID" value={formData.email} onChange={handleChange} required />

                        <div className={S.passwordC}>
                            <div className={S.ppaass}>
                                <label htmlFor="password" className={S.label + ' ' + S.required}>Password</label>
                                <input className={S.input} type="password" name="password" id="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} required />
                            </div>
                            <div className={S.ccppaass}>
                                <label htmlFor="confirmPassword" className={S.label + ' ' + S.required}>Confirm Password</label>
                                <input className={S.input} type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
                            </div>
                        </div>

                        <button className={S.button} type="submit">Sign Up</button>
                    </form>
                    {error && <div className="error">{error}</div>}
                    {success && <div className="success">{success}</div>}
                    <div className={S.warning}>Already have an Account... <Link to='/login' className={S.sign}>Log In</Link></div>
                </div>
                <div className={S.greyImg}>
                    <img src={signUpImg} alt="logo" className={S.signUpImg} />
                </div>
            </div>
        </div>
    );
}