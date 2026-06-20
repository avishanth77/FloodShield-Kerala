import { useEffect, useState } from "react";
import axios from "axios";
import "../style/Shelters.css";

// import Footer from "../components/Footer";

function Shelters() {
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    axios
      .get("https://teflon.pythonanywhere.com/api/shelters/")
      .then((response) => {
        setShelters(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="shelters-page">
      <div className="shelter-header">
        <h1>Available Shelters</h1>
        <p>
          Locate safe shelters and relief camps across Kerala.
        </p>
      </div>

      <div className="shelter-grid">
        {shelters.map((shelter) => {
          const percentage =
            (shelter.occupancy / shelter.capacity) * 100;

          return (
            <div
              className="shelter-card"
              key={shelter.id}
            >
              <div className="card-top">
                <h3>{shelter.name}</h3>

                <span
                  className={`status ${shelter.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {shelter.status}
                </span>
              </div>

              <p className="district">
                📍 {shelter.district}
              </p>

              <p className="address">
                {shelter.address}
              </p>

              <div className="occupancy">
                <div className="occupancy-text">
                  <span>Occupancy</span>

                  <span>
                    {shelter.occupancy} / {shelter.capacity}
                  </span>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${percentage}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="button-group">

                          <button
                            className="details-btn"
                            onClick={() =>
                              window.open(
                                shelter.website_url,
                                "_blank"
                              )
                            }
                          >
                            View Details
                          </button>
                        
                          <button
                            className="direction-btn"
                            onClick={() =>
                              window.open(
                                shelter.location_url,
                                "_blank"
                              )
                            }
                          >
                            Directions
                          </button>
                        
                        </div>
            </div>
          );
        })}
      </div>
      {/* <Footer /> */}
    </section>
  );
  
}

export default Shelters;