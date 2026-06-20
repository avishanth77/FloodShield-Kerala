import React, { useState, useEffect } from "react";
import "../style/Volunteer.css";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    district: "",
    skills: [],
    availability: "",
  });

  const [status, setStatus] = useState(null);

  // Check login and auto-fill user data
  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      alert("Please login first");
      window.location.href = "/login";
      return;
    }

    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    setFormData((prev) => ({
      ...prev,
      full_name: user.full_name || "",
      phone: user.phone || "",
    }));
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    let updatedSkills = [...formData.skills];

    if (checked) {
      updatedSkills.push(value);
    } else {
      updatedSkills = updatedSkills.filter(
        (skill) => skill !== value
      );
    }

    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem(
        "access_token"
      );

      const response = await fetch(
        "https://teflon.pythonanywhere.com/api/volunteers/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("success");

        alert(
          "Registration successful! Thank you for volunteering."
        );

        setFormData((prev) => ({
          ...prev,
          district: "",
          skills: [],
          availability: "",
        }));

        setTimeout(() => {
          setStatus(null);
        }, 5000);
      } else {
        const data = await response.json();

        console.error(data);

        setStatus("error");

        setTimeout(() => {
          setStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error(
        "Error submitting form:",
        error
      );

      setStatus("error");

      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
  };

  const skillOptions = [
    {
      value: "medical",
      icon: "medical_services",
      label: "Medical First Aid",
    },
    {
      value: "rescue",
      icon: "sailing",
      label: "Water Rescue",
    },
    {
      value: "logistics",
      icon: "local_shipping",
      label: "Logistics / Driving",
    },
    {
      value: "cooking",
      icon: "soup_kitchen",
      label: "Food Prep / Cooking",
    },
    {
      value: "communication",
      icon: "support_agent",
      label: "Communications",
    },
    {
      value: "general",
      icon: "group",
      label: "General Support",
    },
  ];

  return (
    <div className="volunteer-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="brand-logo">
            FloodShield Kerala
          </div>

          <a
            className="back-link"
            href="/"
          >
            <span className="material-symbols-outlined">
              arrow_back
            </span>
            Back to Home
          </a>
        </div>
      </header>

      <main className="main-content">
        <div className="grid-container">
          {/* Info Section */}
          <div className="info-section">
            <div className="badge">
              <span className="material-symbols-outlined">
                volunteer_activism
              </span>
              <span>Join the Effort</span>
            </div>

            <h1 className="page-title">
              Become a Volunteer
            </h1>

            <p className="page-description">
              Your skills can make a critical
              difference during a flood emergency.
              Join our network of dedicated
              individuals ready to assist in
              medical response, logistics,
              rescue operations, and community
              support.
            </p>

            {status === "success" && (
              <div
                className="status-message status-success"
                style={{
                  color: "green",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                ✅ Registration successful!
                Thank you for volunteering.
              </div>
            )}

            {status === "error" && (
              <div
                className="status-message status-error"
                style={{
                  color: "red",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                ❌ There was an error
                submitting your registration.
                Please try again.
              </div>
            )}
          </div>

          {/* Form Card */}
          <div className="form-card">
            <div className="decorative-glow"></div>

            <form
              onSubmit={handleSubmit}
              className="volunteer-form"
            >
              {/* Personal Info */}
              <div className="form-section">
                <h2 className="section-title">
                  Personal Information
                </h2>

                <div className="input-row">
                  <div className="form-group">
                    <label
                      htmlFor="full_name"
                      className="form-label"
                    >
                      Full Name
                    </label>

                    <input
                      type="text"
                      id="full_name"
                      value={
                        formData.full_name
                      }
                      readOnly
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="phone"
                      className="form-label"
                    >
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      value={
                        formData.phone
                      }
                      readOnly
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="district"
                    className="form-label"
                  >
                    Home District
                  </label>

                  <select
                    id="district"
                    value={
                      formData.district
                    }
                    onChange={
                      handleInputChange
                    }
                    required
                    className="form-select"
                  >
                    <option
                      value=""
                      disabled
                    >
                      Select District
                    </option>

                    <option value="alappuzha">
                      Alappuzha
                    </option>

                    <option value="ernakulam">
                      Ernakulam
                    </option>

                    <option value="idukki">
                      Idukki
                    </option>

                    <option value="kottayam">
                      Kottayam
                    </option>

                    <option value="pathanamthitta">
                      Pathanamthitta
                    </option>

                    <option value="thrissur">
                      Thrissur
                    </option>

                    <option value="wayanad">
                      Wayanad
                    </option>
                  </select>
                </div>
              </div>

              {/* Skills */}
              <div className="form-section">
                <div>
                  <h2 className="section-title">
                    Key Skills &
                    Experience
                  </h2>

                  <p className="section-desc">
                    Select all areas where
                    you can contribute.
                  </p>
                </div>

                <div className="skills-grid">
                  {skillOptions.map(
                    (skill) => (
                      <label
                        key={skill.value}
                        className="skill-label"
                      >
                        <input
                          type="checkbox"
                          name="skills"
                          value={
                            skill.value
                          }
                          checked={formData.skills.includes(
                            skill.value
                          )}
                          onChange={
                            handleSkillChange
                          }
                          className="skill-checkbox"
                        />

                        <span className="skill-box">
                          <span className="material-symbols-outlined">
                            {
                              skill.icon
                            }
                          </span>

                          {
                            skill.label
                          }
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Availability */}
              <div className="form-section">
                <label
                  htmlFor="availability"
                  className="form-label"
                >
                  Availability
                  Constraints
                  (Optional)
                </label>

                <textarea
                  id="availability"
                  value={
                    formData.availability
                  }
                  onChange={
                    handleInputChange
                  }
                  rows="3"
                  className="form-textarea"
                  placeholder="E.g., Only available weekends, evening shifts, etc."
                ></textarea>
              </div>

              {/* Submit */}
              <div className="submit-section">
                <p className="submit-disclaimer">
                  By registering, you
                  agree to follow safety
                  protocols and directions
                  from command center
                  officials.
                </p>

                <button
                  type="submit"
                  className="submit-btn"
                >
                  Submit Registration

                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Volunteer;