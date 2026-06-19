import React, { useEffect, useState } from "react";
import "../style/SosTable.css";

const SosTable = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchSOSRequests();
  }, []);

  const fetchSOSRequests = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/sos-requests/"
      );

      const data = await response.json();
      setRequests(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getStatusClass = (urgency) => {
    if (urgency === "Life Threat") return "critical";
    if (urgency === "Urgent") return "assigned";
    return "resolved";
  };

  return (
    <div className="sos-card">
      <div className="card-header">
        <h2>Recent SOS Requests</h2>
        
      </div>

      <table className="sos-table">
        <thead>
          <tr>
            <th>NAME / ID</th>
            <th>LOCATION</th>
            <th>STATUS</th>
            <th>TIME ELAPSED</th>
            
          </tr>
        </thead>

        <tbody>
          {requests.length === 0 ? (
            <tr>
              <td colSpan="5" className="empty">
                No SOS Requests Found
              </td>
            </tr>
          ) : (
            requests.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="name-cell">
                    <strong>{item.emergency_type}</strong>
                    <span>#SOS-{item.id}</span>
                  </div>
                </td>

                <td>{item.location}</td>

                <td>
                  <span
                    className={`status-badge ${getStatusClass(
                      item.urgency_level
                    )}`}
                  >
                    ● {item.urgency_level}
                  </span>
                </td>

                <td>Just now</td>

                
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SosTable;