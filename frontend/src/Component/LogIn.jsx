import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import L from "../CSS/Login.module.css";
import Logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const payload = { email, password };

    try {
      const response = await axios.post("http://localhost:3000/login", payload);

      if (response.data.status) {
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/home");
      } else {
        setError(response.data.message || "Invalid email or password!");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong.");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div className={L.LogInPage}>
      <header>
        <Link to="/">
          <img src={Logo} alt="Logo" className={L.logo} />
        </Link>
      </header>
      <div className={L.logged}>
        <div className={L.imgg}></div>
        <div className={L.Form}>
          <h2 className={L.heading}>Login</h2>
          <p className={L.warning}>
            Don't have an account?{" "}
            <Link to="/signup" className={L.sign}>
              Sign up for free!
            </Link>{" "}
          </p>
          <form className={L.form} onSubmit={handleSubmit}>
            <label className={L.label + " " + L.required}>Email:</label>
            <input
              className={L.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className={L.label + " " + L.required}>Password:</label>
            <input
              className={L.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button className={L.button} type="submit">
              Login
            </button>
          </form>
          <button className={L.forget}>Forgot Password</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
