import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white shadow-sm h-full border-r flex flex-col p-6">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-emerald-700">Fertility Data</h1>
        <p className="text-xs text-gray-400">Quality Control</p>
      </div>

      {/* Nav menu */}
      <nav className="space-y-3">
        <NavItem to="/" label="Dashboard" icon="🏠" />
        <NavItem to="/labs" label="Labs" icon="🔬" />
        <NavItem to="/reports" label="Reports" icon="📊" />
        <NavItem to="/config" label="Configuration" icon="⚙️" />
        <NavItem to="/api" label="API" icon="🔗" />
        
      </nav>

      <div className="mt-auto pt-10 text-xs text-gray-400">© Metavara Technologies</div>
    </aside>
  );
}

function NavItem({ to, label, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
          isActive ? "bg-emerald-50 text-emerald-700 font-semibold" : "text-gray-600 hover:bg-gray-50"
        }`
      }
    >
      <span className="text-lg">{icon}</span>
      {label}
    </NavLink>
  );
}
