import React from "react";

const Labs = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6 text-indigo-600">
        Laboratory Overview
      </h1>

      {/* Incubators Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 border-indigo-500">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Incubators</h2>
        <p className="text-gray-600">List of incubators and their status:</p>

        <div className="mt-4">
          <ul className="space-y-3">
            <li className="p-3 bg-gray-50 rounded-md shadow-sm flex justify-between">
              <span>Incubator 1</span>
              <span className="text-green-600 font-semibold">Active</span>
            </li>
            <li className="p-3 bg-gray-50 rounded-md shadow-sm flex justify-between">
              <span>Incubator 2</span>
              <span className="text-yellow-600 font-semibold">Maintenance Due</span>
            </li>
            <li className="p-3 bg-gray-50 rounded-md shadow-sm flex justify-between">
              <span>Incubator 3</span>
              <span className="text-red-600 font-semibold">Offline</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Laminar Flow */}
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Laminar Flow Hoods
        </h2>
        <p className="text-gray-600">Last maintenance: <strong>12 days ago</strong></p>

        <div className="mt-4">
          <div className="p-3 bg-gray-50 rounded-md shadow-sm flex justify-between">
            <span>Laminar Hood 1</span>
            <span className="text-green-600 font-semibold">Operational</span>
          </div>
          <div className="p-3 bg-gray-50 rounded-md shadow-sm flex justify-between mt-3">
            <span>Laminar Hood 2</span>
            <span className="text-red-600 font-semibold">Service Needed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labs;
