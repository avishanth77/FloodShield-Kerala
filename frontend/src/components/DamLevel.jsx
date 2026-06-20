import React, { useEffect, useState } from "react";
import axios from "axios";

const DamLevel = () => {
  const [dams, setDams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchDamData();
  }, []);

  const fetchDamData = async () => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/amith-vp/Kerala-Dam-Water-Levels/main/live.json"
      );

      setDams(response.data.dams || []);
    } catch (error) {
      console.error("Error fetching dam data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getPercentage = (dam) => {
    return Number(
      dam?.data?.[0]?.storagePercentage ||
      dam?.storagePercentage ||
      0
    );
  };

  const getStatusColor = (percentage) => {
    if (percentage >= 90) return "#d32f2f";
    if (percentage >= 75) return "#ff9800";
    return "#1976d2";
  };

  const getStatusMessage = (percentage) => {
    if (percentage >= 90)
      return "Red Alert Level - Reservoir near capacity";

    if (percentage >= 75)
      return "Warning Level - Continuous monitoring";

    return "Normal Storage Level";
  };

  const displayedDams = showAll ? dams : dams.slice(0, 2);

  if (loading) {
    return (
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        Loading dam levels...
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "20px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      }}
    >
      {/* Header */}
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
          color: "#004AC6",
        }}
      >
        <span className="material-symbols-outlined">
          water
        </span>
        Kerala Dam Levels
      </h3>

      {/* Dam List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {displayedDams.map((dam, index) => {
          const percentage = getPercentage(dam);
          const color = getStatusColor(percentage);

          return (
            <div
              key={index}
              style={{
                background:
                  percentage >= 90
                    ? "rgba(211,47,47,0.08)"
                    : "#f8f9fa",
                borderRadius: "12px",
                padding: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  {dam?.name || "Unknown Dam"}
                </span>

                <span
                  style={{
                    color,
                    fontWeight: "700",
                  }}
                >
                  {percentage.toFixed(1)}%
                </span>
              </div>

              {/* Progress Bar */}
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  background: "#e0e0e0",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${Math.min(
                      percentage,
                      100
                    )}%`,
                    height: "100%",
                    background: color,
                    transition: "0.4s ease",
                  }}
                />
              </div>

              <p
                style={{
                  marginTop: "8px",
                  marginBottom: "0",
                  fontSize: "12px",
                  color: "#666",
                }}
              >
                {getStatusMessage(percentage)}
              </p>
            </div>
          );
        })}
      </div>

      {/* Show More / Less */}
      {dams.length > 2 && (
        <div
          onClick={() => setShowAll(!showAll)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            marginTop: "15px",
            cursor: "pointer",
            color: "#004AC6",
            fontWeight: "600",
          }}
        >
          <span>
            {showAll
              ? "Show Less"
              : `Show ${dams.length - 2} More`}
          </span>

          <span
            className="material-symbols-outlined"
            style={{
              transition: "0.3s",
              transform: showAll
                ? "rotate(180deg)"
                : "rotate(0deg)",
            }}
          >
            expand_more
          </span>
        </div>
      )}
    </div>
  );
};

export default DamLevel;