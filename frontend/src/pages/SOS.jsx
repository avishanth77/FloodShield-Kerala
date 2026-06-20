import React, { useState } from "react";
import axios from "axios";
import "../style/SOS.css";

function SOS() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    emergency_type: "",
    location: "",
    urgency_level: "Standard",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUrgency = (level) => {
    setFormData({
      ...formData,
      urgency_level: level,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/sos-requests/",
        formData
      );

      alert("SOS Request Sent Successfully!");

      setFormData({
        name: "",
        phone: "",
        emergency_type: "",
        location: "",
        urgency_level: "Standard",
      });
    } catch (error) {
      console.error(error.response?.data);
      alert("Failed to send SOS Request");
    }
  };

  return (
    <div className="app-wrapper">
      <main className="main-content">

        <div className="page-header">
          <h1 className="page-title">Send SOS Request</h1>

          <p className="page-subtitle">
            Fill in the details below to trigger an emergency alert.
            Please ensure all information is accurate to help rescue
            teams prioritize and locate you quickly.
          </p>
        </div>

        <div className="form-card1">
          <form onSubmit={handleSubmit}>

            {/* Name + Phone */}
            <div className="form-row">

              <div className="input-group">
                <label>Full Name</label>

                <div className="input-wrapper">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <span className="material-symbols-outlined input-icon">
                    person
                  </span>
                </div>
              </div>

              <div className="input-group">
                <label>Phone Number</label>

                <div className="input-wrapper">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <span className="material-symbols-outlined input-icon">
                    call
                  </span>
                </div>
              </div>

            </div>

            {/* Emergency Type */}
            <div className="input-group">
              <label>Emergency Type</label>

              <div className="input-wrapper">
                <input
                  type="text"
                  name="emergency_type"
                  className="form-control"
                  placeholder="Medical, Fire, Flood..."
                  value={formData.emergency_type}
                  onChange={handleChange}
                  required
                />

                <span className="material-symbols-outlined input-icon">
                  warning
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="input-group">
              <label>Location Details</label>

              <div className="input-wrapper">
                <textarea
                  name="location"
                  className="form-control"
                  placeholder="Enter precise location or GPS coordinates"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />

                <span className="material-symbols-outlined input-icon">
                  location_on
                </span>
              </div>
            </div>

            {/* Urgency */}
            <div className="input-group">
              <label>Urgency Level</label>

              <div className="urgency-grid">

                <button
                  type="button"
                  className={`urgency-btn ${
                    formData.urgency_level === "Standard"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleUrgency("Standard")}
                >
                  Standard
                </button>

                <button
                  type="button"
                  className={`urgency-btn ${
                    formData.urgency_level === "Urgent"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleUrgency("Urgent")}
                >
                  Urgent
                </button>

                <button
                  type="button"
                  className={`urgency-btn ${
                    formData.urgency_level === "Life Threat"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleUrgency("Life Threat")}
                >
                  Life Threat
                </button>

              </div>
            </div>

            <button type="submit" className="btn-submit">
              <span className="material-symbols-outlined">
                emergency
              </span>

              SEND SOS REQUEST
            </button>

          </form>
        </div>

      </main>
    </div>
  );
}

export default SOS;