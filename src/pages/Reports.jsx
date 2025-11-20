import React from "react";
import { FaFilePdf, FaFileCsv, FaDownload, FaChartBar } from "react-icons/fa";

const Reports = () => {
  const sampleData = [
    { id: 1, name: "John Doe", age: 28, location: "Hyderabad" },
    { id: 2, name: "Anil Kumar", age: 34, location: "Bangalore" },
    { id: 3, name: "Priya Sharma", age: 25, location: "Chennai" },
    { id: 4, name: "Ravi Teja", age: 42, location: "Mumbai" },
  ];

  const generateCSV = () => {
    const header = "ID,Name,Age,Location\n";
    const rows = sampleData
      .map((item) => `${item.id},${item.name},${item.age},${item.location}`)
      .join("\n");

    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "report.csv";
    a.click();
  };

  const generatePDF = () => {
    alert("PDF generation will be added later (backend required).");
  };

  return (
    <div className="container-fluid p-4">

      {/* PAGE TITLE */}
      <h2 className="fw-bold mb-4">Reports</h2>

      {/* TOP CARDS */}
      <div className="row mb-4">

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3 d-flex flex-row align-items-center">
            <FaChartBar size={40} className="text-primary me-3" />
            <div>
              <h5 className="fw-bold m-0">Analytics Overview</h5>
              <p className="text-muted m-0">Summary of data insights</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3 d-flex flex-row align-items-center">
            <FaFilePdf size={40} className="text-danger me-3" />
            <div>
              <h5 className="fw-bold m-0">PDF Report</h5>
              <p className="text-muted m-0">Download printable report</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm p-3 d-flex flex-row align-items-center">
            <FaFileCsv size={40} className="text-success me-3" />
            <div>
              <h5 className="fw-bold m-0">CSV Export</h5>
              <p className="text-muted m-0">Spreadsheet ready output</p>
            </div>
          </div>
        </div>
      </div>

      {/* EXPORT SECTION */}
      <div className="card shadow-sm p-4 mb-4">
        <h4 className="fw-bold mb-3">Export Options</h4>

        <div className="d-flex gap-3">

          <button className="btn btn-danger d-flex align-items-center gap-2" onClick={generatePDF}>
            <FaFilePdf /> Generate PDF
          </button>

          <button className="btn btn-success d-flex align-items-center gap-2" onClick={generateCSV}>
            <FaFileCsv /> Export CSV
          </button>

          <button className="btn btn-primary d-flex align-items-center gap-2">
            <FaDownload /> Download Full Report
          </button>

        </div>
      </div>

      {/* DATA TABLE */}
      <div className="card shadow-sm p-4">
        <h4 className="fw-bold mb-3">Report Data</h4>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td>{row.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Reports;
