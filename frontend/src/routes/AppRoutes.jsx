import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SOS from "../pages/SOS";
import Shelters from "../pages/Shelters";
import Volunteer from "../pages/Volunteer";
import Reports from "../pages/Reports";
import AdminDashboard from "../pages/AdminDashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/sos" element={<SOS />} />
      <Route path="/shelters" element={<Shelters />} />
      <Route path="/volunteers" element={<Volunteer/>} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default AppRoutes;