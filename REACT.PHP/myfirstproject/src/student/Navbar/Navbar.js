import React, { useState } from "react";
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top mad-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Attendance Management System</a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mad-navbar-nav">
            <li className="nav-item">
              <a className="nav-link mad-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mad-link" href="http://localhost/php-attendance/?page=class_list">Departments</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mad-link" href="http://localhost/php-attendance/?page=student_list">Workers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mad-link" href="http://localhost/php-attendance/?page=attendance&class_id=4&class_date=">Attendance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mad-link" href="http://localhost/php-attendance/?page=attendance_report">Report</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
