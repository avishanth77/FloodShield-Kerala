import { useNavigate } from "react-router-dom";
import "../style/Hero.css";

function Hero() {

  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-content">

        <div className="badge">
          ✔ Official State Portal
        </div>

        <h1>
          FloodShield <span>Kerala</span>
        </h1>

        <p>
          Stay Safe During Flood Emergencies.
          Real-time alerts, immediate SOS dispatch,
          and comprehensive shelter coordination.
        </p>

        <div className="hero-buttons">

          <button
            className="sos-btn"
            onClick={() => navigate("/sos")}
          >
            🚨 Send SOS Request
          </button>

          <button
            className="shelter-btn"
            onClick={() => navigate("/shelters")}
          >
            🏠 Find Nearest Shelters
          </button>

        </div>

      </div>

      <div className="hero-image">
        <img
          src="hero.webp"
          alt="Flood Rescue"
        />
      </div>

    </section>
  );
}

export default Hero;