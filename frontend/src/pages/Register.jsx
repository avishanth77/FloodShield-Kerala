import React, { useState } from "react";
import "../style/Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        "https://teflon.pythonanywhere.com/api/accounts/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setMessage("Account created successfully!");
      } else {
        const data = await response.json();
        setMessage(JSON.stringify(data));
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="fsk-shell">
      <main className="fsk-main">
        <div className="fsk-panel">
          <div className="fsk-glow"></div>

          <div className="fsk-head">
            <h1 className="fsk-brand">FloodShield Kerala</h1>
            <p className="fsk-tagline">
              Create an account to join the network.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="fsk-form">
            {/* Full Name */}
            <div className="fsk-field">
              <label htmlFor="fullName" className="fsk-label">
                Full Name
              </label>

              <div className="fsk-input-box">
                <span className="material-symbols-outlined fsk-symbol">
                  person
                </span>

                <input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="fsk-control"
                />
              </div>
            </div>

            {/* Email */}
            <div className="fsk-field">
              <label htmlFor="email" className="fsk-label">
                Email Address
              </label>

              <div className="fsk-input-box">
                <span className="material-symbols-outlined fsk-symbol">
                  mail
                </span>

                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="fsk-control"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="fsk-field">
              <label htmlFor="phone" className="fsk-label">
                Phone Number
              </label>

              <div className="fsk-input-box">
                <span className="material-symbols-outlined fsk-symbol">
                  call
                </span>

                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="fsk-control"
                />
              </div>
            </div>

            {/* Password */}
            <div className="fsk-field">
              <label htmlFor="password" className="fsk-label">
                Password
              </label>

              <div className="fsk-input-box">
                <span className="material-symbols-outlined fsk-symbol">
                  lock
                </span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="fsk-control fsk-secret"
                />

                <button
                  type="button"
                  className="fsk-eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? "visibility" : "visibility_off"}
                  </span>
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="fsk-field">
              <label htmlFor="confirmPassword" className="fsk-label">
                Confirm Password
              </label>

              <div className="fsk-input-box">
                <span className="material-symbols-outlined fsk-symbol">
                  lock_reset
                </span>

                <input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repeat your password"
                  className="fsk-control fsk-secret"
                />
              </div>
            </div>

            {message && <p className="fsk-alert">{message}</p>}

            <button type="submit" className="fsk-action">
              Create Account

              <span className="material-symbols-outlined fsk-arrow">
                arrow_forward
              </span>
            </button>
          </form>

          <div className="fsk-foot">
            <p className="fsk-foot-text">
              Already have an account?{" "}
              <a href="/login" className="fsk-link">
                Login
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;