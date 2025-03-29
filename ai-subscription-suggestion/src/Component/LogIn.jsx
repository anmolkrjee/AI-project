import React, { useState } from 'react';
import L from '../CSS/Login.module.css';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import logInImg from '../assets/logInImg.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Replace with your API URL
        const apiURL = 'http://localhost:3000/api/auth/login';

        try {
            const response = await fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.authentication) {
                localStorage.setItem("auth-token", data.token)
                window.location.href = "/home"
                // Handle successful login, e.g., store token, redirect, etc.
                console.log('Login successful:', data);
                // Perform actions like storing token, redirecting, etc.
            } else {
                // Handle errors
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred during login');
        }
    };

    return (
        <div className={L.LogInPage}>
            <header>
                <Link to='/'><img src={Logo} alt="Logo" className={L.logo} /></Link>
            </header>
            <div className={L.logged}>
                <div className={L.imgg}>
                    <img src={logInImg} alt="Logo" className={L.logInImg} />
                </div>
                <div className={L.Form}>
                    <h2 className={L.heading}>Login</h2>
                    <p className={L.warning}>Don't have an account? <Link to='/signup' className={L.sign}>Sign up for free!</Link> </p>
                    <form className={L.form} onSubmit={handleSubmit}>
                        <label className={L.label + ' ' + L.required}>Email:</label>
                        <input
                            className={L.input}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label className={L.label + ' ' + L.required}>Password:</label>
                        <input
                            className={L.input}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button className={L.button} type="submit">Login</button>
                    </form>
                    <button className={L.forget}>Forgot Password</button>
                </div>
            </div>
        </div >
    );
};

export default Login;