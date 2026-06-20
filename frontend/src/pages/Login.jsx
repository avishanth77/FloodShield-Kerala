
import React, { useState } from "react";
import "../style/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const payload = {
      username: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch(
        "https://teflon.pythonanywhere.com/api/accounts/token/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      console.log("LOGIN DATA:", data);

      if (response.ok) {
        // Save JWT Tokens
        localStorage.setItem(
          "access_token",
          data.access
        );

        localStorage.setItem(
          "refresh_token",
          data.refresh
        );

        // Save User Info
        localStorage.setItem(
          "username",
          data.email || formData.email
        );
        localStorage.setItem(
          "user",
          JSON.stringify({
            full_name: data.full_name,
            phone: data.phone,
            email: data.email,
          })
        );
        // Save Admin Status
        localStorage.setItem(
          "isAdmin",
          data.is_superuser ? "true" : "false"
        );

        // Save Staff Status
        localStorage.setItem(
          "isStaff",
          data.is_staff ? "true" : "false"
        );

        console.log(
          "Saved isAdmin:",
          localStorage.getItem("isAdmin")
        );

        console.log(
          "Saved isStaff:",
          localStorage.getItem("isStaff")
        );

        // Redirect Home
        window.location.href = "/";
      } else {
        setError(
          data.detail ||
            "Invalid email or password. Please try again."
        );
      }
    } catch (err) {
      console.error(err);
      setError(
        "Cannot connect to the server. Please try again later."
      );
    }
  };

  return (
    <div className="lgx-shell">
      <div className="lgx-grid"></div>
      <div className="lgx-orb-one"></div>
      <div className="lgx-orb-two"></div>

      <main className="lgx-container">
        <div className="lgx-card">

          <div className="lgx-header">
            <div className="lgx-logo-box">
              <span
                className="material-symbols-outlined"
                data-weight="fill"
              >
                flood
              </span>
            </div>

            <h1 className="lgx-title">
              FloodShield Kerala
            </h1>

            <p className="lgx-subtitle">
              Informed Resilience Command Center
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lgx-form"
          >
            <div className="lgx-field">
              <label
                className="lgx-label"
                htmlFor="email"
              >
                Email Address
              </label>

              <div className="lgx-input-wrap">
                <span className="material-symbols-outlined lgx-icon">
                  mail
                </span>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="official@kerala.gov.in"
                  className="lgx-input"
                />
              </div>
            </div>

            <div className="lgx-field">
              <label
                className="lgx-label"
                htmlFor="password"
              >
                Password
              </label>

              <div className="lgx-input-wrap">
                <span className="material-symbols-outlined lgx-icon">
                  lock
                </span>

                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="lgx-input"
                />
              </div>
            </div>

            {error && (
              <p className="lgx-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="lgx-btn"
            >
              Login to FloodShield

              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </button>
          </form>

          <div className="lgx-footer">
            <p className="lgx-footer-text">
              To Create New Account
              <br />
              <a
                href="/register"
                className="lgx-footer-link"
              >
                Register
              </a>
            </p>
          </div>
        </div>

        <div className="lgx-page-footer">
          <p className="lgx-copyright">
            © 2024 FloodShield Kerala. Safe & Secure.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;

