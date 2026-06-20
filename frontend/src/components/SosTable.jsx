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
      console.error("Error fetching SOS requests:", error);
    }
  };

  const getStatusClass = (urgency) => {
    if (urgency === "Life Threat") return "critical";
    if (urgency === "Urgent") return "assigned";
    return "resolved";
  };

  const getTimeAgo = (dateString) => {
    if (!dateString) return "N/A";

    const now = new Date();
    const created = new Date(dateString);

    const diff = Math.floor((now - created) / 1000);

    if (diff < 60) return `${diff} sec ago`;

    if (diff < 3600)
      return `${Math.floor(diff / 60)} min ago`;

    if (diff < 86400)
      return `${Math.floor(diff / 3600)} hr ago`;

    return `${Math.floor(diff / 86400)} day ago`;
  };

  return (
    <div className="sos-card">
      <div className="card-header">
        <h2>Recent SOS Requests</h2>
      </div>

      <table className="sos-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>PHONE</th>
            <th>EMERGENCY</th>
            <th>LOCATION</th>
            <th>STATUS</th>
            <th>TIME</th>
          </tr>
        </thead>

        <tbody>
          {requests.length === 0 ? (
            <tr>
              <td colSpan="6" className="empty">
                No SOS Requests Found
              </td>
            </tr>
          ) : (
            requests.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="name-cell">
                    <strong>{item.name}</strong>
                    <span>#SOS-{item.id}</span>
                  </div>
                </td>

                <td>{item.phone}</td>

                <td>{item.emergency_type}</td>

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

                <td>
                  <div className="time-cell">
                    <strong>
                      {getTimeAgo(item.created_at)}
                    </strong>
                    <br />
                    <small>
                      {item.created_at
                        ? new Date(item.created_at).toLocaleString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )
                        : "N/A"}
                    </small>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SosTable;