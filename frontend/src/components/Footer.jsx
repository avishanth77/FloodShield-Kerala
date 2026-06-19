import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">

          {/* Logo & About */}
          <div className="footer-col">
            <div className="logo">
              <h2>🌊 FloodShield Kerala</h2>
            </div>

            <p className="description">
              Real-time flood alerts, emergency SOS support,
              shelter management, and volunteer coordination
              for safer communities across Kerala.
            </p>

            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3>Emergency Contact</h3>

            <ul className="contact-info">
              <li>📍 Kerala Disaster Management Authority</li>
              <li>📞 1077 (Emergency Helpline)</li>
              <li>✉️ support@floodshieldkerala.in</li>
            </ul>
          </div>

          {/* Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>

            <ul className="quick-links">
              <li><a href="/">Home</a></li>
              <li><a href="/sos">SOS Requests</a></li>
              <li><a href="/shelters">Shelters</a></li>
              <li><a href="/volunteer">Volunteers</a></li>
              <li><a href="/reports">Reports</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h3>Safety Updates</h3>

            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter Email Address"
                required
              />

              <button type="submit">
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      <div className="copyright">
        <p>
          © 2026 FloodShield Kerala | Disaster Response &
          Community Safety Platform
        </p>
      </div>
    </footer>
  );
};

export default Footer;