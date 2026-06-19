
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);
  const [isStaff, setIsStaff] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const token = localStorage.getItem("access_token");

    const storedIsAdmin =
      localStorage.getItem("isAdmin") === "true";

    const storedIsStaff =
      localStorage.getItem("isStaff") === "true";

    if (storedUsername && token) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
      setIsAdmin(storedIsAdmin);
      setIsStaff(storedIsStaff);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("username");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isStaff");

    setIsLoggedIn(false);
    setUsername(null);
    setIsAdmin(false);
    setIsStaff(false);

    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="logo">
          <span>💧</span>
          <h2 className="logo-t" style={{color: "#004ac6"}}>FloodShield Kerala</h2>
        </div>

        {/* Mobile Menu */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <NavLink
              to="/"
              end
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/shelters"
              onClick={() => setMenuOpen(false)}
            >
              Shelters
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/reports"
              onClick={() => setMenuOpen(false)}
            >
              Reports
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/volunteers"
              onClick={() => setMenuOpen(false)}
            >
              Volunteers
            </NavLink>
          </li>

          {/* Dashboard for Staff OR Admin */}
          {(isAdmin || isStaff) && (
            <li>
              <NavLink
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </NavLink>
            </li>
          )}

          {/* Django Admin Panel only for Superuser */}
          {isAdmin && (
            <li>
              <a
                href="http://127.0.0.1:8000/admin/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#ef4444",
                  fontWeight: "bold",
                }}
              >
                Admin Panel
              </a>
            </li>
          )}

          {/* Mobile Guest Buttons */}
          {!isLoggedIn && (
            <div className="mobile-buttons">
              <Link
                to="/login"
                className="login-btn"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/register"
                className="register-btn"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Logged User */}
          {isLoggedIn && (
            <div className="mobile-user">
              <div className="profile-circle">
                {username?.charAt(0).toUpperCase()}
              </div>

              <span>{username}</span>

              <button
                className="logout-btn"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          )}
        </ul>

        {/* Desktop Right Side */}
        {!isLoggedIn ? (
          <div className="nav-buttons">
            <Link
              to="/login"
              className="login-btn"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="register-btn"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="user-profile">
            <div className="profile-circle">
              {username?.charAt(0).toUpperCase()}
            </div>

            <span>{username}</span>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;

