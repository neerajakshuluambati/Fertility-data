import React from "react";
import { FaCogs, FaDatabase, FaUserShield, FaSlidersH } from "react-icons/fa";

const Configuration = () => {
  return (
    <div className="container-fluid p-4">

      {/* PAGE TITLE */}
      <h2 className="fw-bold mb-4">Configuration</h2>

      {/* TOP CARDS */}
      <div className="row mb-4">
        
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3">
            <FaCogs size={30} className="text-primary mb-2" />
            <h5 className="fw-bold">System Settings</h5>
            <p className="text-muted">Manage system preferences and general configurations.</p>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3">
            <FaDatabase size={30} className="text-success mb-2" />
            <h5 className="fw-bold">Database</h5>
            <p className="text-muted">Database connection, backup, and optimization settings.</p>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3">
            <FaUserShield size={30} className="text-danger mb-2" />
            <h5 className="fw-bold">Security</h5>
            <p className="text-muted">User roles, permissions, and access-level configuration.</p>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3">
            <FaSlidersH size={30} className="text-warning mb-2" />
            <h5 className="fw-bold">Customization</h5>
            <p className="text-muted">Theme, layout, and appearance settings.</p>
          </div>
        </div>

      </div>

      {/* MAIN SETTINGS CARD */}
      <div className="card shadow-sm p-4 mb-4">
        <h4 className="fw-bold mb-3">General Configuration</h4>

        <div className="mb-3">
          <label className="form-label fw-semibold">Application Mode</label>
          <select className="form-select">
            <option>Production</option>
            <option>Development</option>
            <option>Maintenance</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Default Language</label>
          <select className="form-select">
            <option>English</option>
            <option>Hindi</option>
            <option>Telugu</option>
            <option>Tamil</option>
          </select>
        </div>

        <div className="text-end">
          <button className="btn btn-primary px-4">Save Changes</button>
        </div>
      </div>

      {/* STATUS PANEL */}
      <div className="card shadow-sm p-4">
        <h4 className="fw-bold mb-3">System Status</h4>

        <ul className="list-group list-group-flush">

          <li className="list-group-item d-flex justify-content-between">
            <span>Server Status</span>
            <span className="badge bg-success">Online</span>
          </li>

          <li className="list-group-item d-flex justify-content-between">
            <span>Database Connection</span>
            <span className="badge bg-primary">Connected</span>
          </li>

          <li className="list-group-item d-flex justify-content-between">
            <span>API Health</span>
            <span className="badge bg-success">Running</span>
          </li>

          <li className="list-group-item d-flex justify-content-between">
            <span>Storage Usage</span>
            <span className="badge bg-warning text-dark">68% Full</span>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Configuration;
