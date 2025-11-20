import React from "react";
import Card from "../components/Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", A: 62, B: 70, C:75 },
  { name: "Tue", A: 50, B: 66, C: 99 },
  { name: "Wed", A: 66, B: 89, C: 56 },
  { name: "Thu", A: 35, B: 72, C: 75 },
  { name: "Fri", A: 72, B: 47, C: 40 },
];

export default function Dashboard() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-700">
            Quality Control Dashboard
          </h1>
          <p className="text-sm text-gray-400">Last Updated: Today</p>
        </div>
        <div className="text-sm text-gray-500">Dashboard / Overview</div>
      </div>

      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Humidity chart card */}
        <Card className="lg:col-span-2 h-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-700">Humidity</h3>
            <span className="text-xs text-gray-400">This Week</span>
          </div>

          <div className="h-60">
            <ResponsiveContainer>
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line dataKey="A" stroke="#2f9e6e" strokeWidth={3} />
                <Line
                  dataKey="B"
                  stroke="#ff0707ff"
                  strokeWidth={3}
                />
                <Line
                  dataKey="C"
                  stroke="#ff00eaff"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Red incident card */}
        <Card className="h-80 flex flex-col justify-center items-center">
          <div className="w-40 h-40 bg-red-400 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-5xl font-bold">124</span>
          </div>
          <p className="mt-4 text-sm text-gray-600">Critical Incidents</p>
        </Card>
      </div>

      {/* Incubator Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <p className="text-gray-500 text-sm">Incubator 01</p>
          <h2 className="text-3xl font-bold mt-2">88.2%</h2>
        </Card>

        <Card>
          <p className="text-gray-500 text-sm">Incubator 02</p>
          <h2 className="text-3xl font-bold mt-2">92.1%</h2>
        </Card>

        <Card>
          <p className="text-gray-500 text-sm">Incubator 03</p>
          <h2 className="text-3xl font-bold mt-2">81.5%</h2>
        </Card>
      </div>
    </div>
  );
}
