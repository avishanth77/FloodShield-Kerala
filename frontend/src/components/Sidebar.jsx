import React from 'react';

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h1>Command Center</h1>
        <p>FloodShield Kerala</p>
      </div>
      
      <ul className="nav-list">
        <li>
          <a href="#" className="nav-item active">
            <span className="material-symbols-outlined icon-fill">dashboard</span>
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-item">
            <span className="material-symbols-outlined">emergency_share</span>
            SOS Requests
          </a>
        </li>
        <li>
          <a href="#" className="nav-item">
            <span className="material-symbols-outlined">location_home</span>
            Shelters
          </a>
        </li>
      </ul>

      <div style={{ marginTop: 'auto' }}>
        <button className="btn-danger">
          <span className="material-symbols-outlined">warning</span>
          Report Incident
        </button>
      </div>
    </nav>
  );
}

export default Sidebar;