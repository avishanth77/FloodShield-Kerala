import { useEffect, useState } from "react";
import axios from "axios";
import "../style/ShelterCapacity.css";

function ShelterCapacity() {
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/shelters/")
      .then((res) => setShelters(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="capacity-card">
      <h2>Shelter Capacity</h2>

      {shelters.map((shelter) => {
        const percentage = Math.round(
          (shelter.occupancy / shelter.capacity) * 100
        );

        return (
          <div key={shelter.id}>
            <div className="capacity-row">
              <span>{shelter.name}</span>

              <span
                className={
                  percentage >= 90
                    ? "danger"
                    : percentage >= 75
                    ? "warning"
                    : ""
                }
              >
                {percentage}% {shelter.status}
              </span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${percentage}%`,
                  background:
                    percentage >= 90
                      ? "#dc2626"
                      : percentage >= 75
                      ? "#f59e0b"
                      : "#16a34a",
                }}
              ></div>
            </div>
          </div>
        );
      })}

      <a href="/shelters"><button className="resource-btn">
        Available Shelters
      </button>
      </a>
    </div>
  );
}

export default ShelterCapacity;