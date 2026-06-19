import { useEffect, useState } from "react";
import axios from "axios";
import "../style/VolunteerTable.css";

function VolunteerTable() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/volunteers/")
      .then((res) => setVolunteers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const getSkillClass = (skill) => {
    if (skill?.includes("medical")) return "medical";
    if (skill?.includes("rescue")) return "rescue";
    return "logistics";
  };

  return (
    <div className="deployment-card">
      <h3>Active Deployments</h3>

      <table className="deployment-table">
        <thead>
          <tr>
            <th>Volunteer Name</th>
            <th>Skillset</th>
            <th>Location</th>
    
          </tr>
        </thead>

        <tbody>
          {volunteers.map((volunteer) => (
            <tr key={volunteer.id}>
              <td>{volunteer.full_name}</td>

              <td>
                <span
                  className={`skill-badge ${getSkillClass(
                    volunteer.skills?.[0]
                  )}`}
                >
                  {volunteer.skills?.[0] || "General"}
                </span>
              </td>

              <td>{volunteer.district}</td>

             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VolunteerTable;