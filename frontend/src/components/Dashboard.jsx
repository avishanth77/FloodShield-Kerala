import React, { useState, useEffect } from 'react';
import StatCard from './StatCard';
import SosTable from './SosTable';
import AlertsPanel from './AlertsPanel';

function Dashboard() {
  const [stats, setStats] = useState({ sos: 142, shelters: 85, volunteers: 1240, reports: 3450 });

  // Example of fetching data from Django API
  // useEffect(() => {
  //   fetch('http://localhost:8000/api/dashboard-stats/')
  //     .then(res => res.json())
  //     .then(data => setStats(data));
  // }, []);

  return (
    <main className="main-content">
      <header className="header-section">
        <div>
          <h2>Dashboard Overview</h2>
         
        </div>
      </header>

      <section className="bento-grid">
        <StatCard title="SOS Requests" value={stats.sos} icon="emergency" colorClass="error" />
        <StatCard title="Active Shelters" value={stats.shelters} icon="home_work" colorClass="tertiary" />
        <StatCard title="Volunteers" value={stats.volunteers} icon="groups" colorClass="primary" />
        <StatCard title="Total Reports" value={stats.reports} icon="description" colorClass="secondary" />
      </section>

      <section className="main-panels">
        <div className="panel">
          <h3>Recent SOS Requests</h3>
          <SosTable />
        </div>
        <div className="panel-group">
          <AlertsPanel />
        </div>
      </section>
    </main>
  );
}

export default Dashboard;