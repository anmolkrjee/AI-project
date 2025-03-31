import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import S from "../CSS/Sign.module.css";
import { validateForm } from "../ElementData/FormValidation";
import axios from "axios";

const length = 10;

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const result = validateForm(formData);

    if (result === "1") {
      const payload = {
        name: formData.name,
        number: formData.number,
        email: formData.email,
        password: formData.password,
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/register",
          payload
        );

        if (response.data.status) {
          setSuccess("Registration Successful!");
          setTimeout(() => navigate("/login"), 2000); // Redirect after success
        } else {
          setError(response.data.message || "Something went wrong!");
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 409) {
            setError("User already exists! Please log in.");
          } else {
            setError(error.response.data.message || "Something went wrong.");
          }
        } else {
          setError("Server error. Please try again later.");
        }
      }
    } else {
      setError(result);
    }
  };

  // Redirect if user is already logged in
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className={S.signUp}>
      <header>
        <Link to="/">
          <img src={Logo} alt="logo" className={S.logo} />
        </Link>
      </header>
      <div className={S.grey}>
        <div className={S.signnn}>
          <form className={S.form} onSubmit={handleSubmit}>
            <div className={S.namePnumber}>
              <div className={S.nnaammee}>
                <label htmlFor="name" className={`${S.label} ${S.required}`}>
                  Name
                </label>
                <input
                  className={S.input}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={S.ppnnoo}>
                <label htmlFor="number" className={`${S.label} ${S.required}`}>
                  Phone Number
                </label>
                <input
                  className={S.input}
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Enter your phone number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  maxLength={length}
                  minLength={length}
                />
              </div>
            </div>
            <label htmlFor="email" className={`${S.label} ${S.required}`}>
              Email ID
            </label>
            <input
              className={S.input}
              type="email"
              name="email"
              id={S.eemm}
              placeholder="Enter your Email ID"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <div className={S.passwordC}>
              <div className={S.ppaass}>
                <label
                  htmlFor="password"
                  className={`${S.label} ${S.required}`}
                >
                  Password
                </label>
                <input
                  className={S.input}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={S.ccppaass}>
                <label
                  htmlFor="confirmPassword"
                  className={`${S.label} ${S.required}`}
                >
                  Confirm Password
                </label>
                <input
                  className={S.input}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button className={S.button} type="submit">
              Sign Up
            </button>
          </form>

          {/* Display error/success messages */}
          {error && <div className={`${S.message} ${S.error}`}>{error}</div>}
          {success && (
            <div className={`${S.message} ${S.success}`}>{success}</div>
          )}

          <div className={S.warning}>
            Already have an Account?{" "}
            <Link to="/login" className={S.sign}>
              Log In
            </Link>
          </div>
        </div>

        {/* Signup Image */}
        <div className={S.greyImg}></div>
      </div>
    </div>
  );
}
