import React from "react";
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./?page=class_list">Departments</a></li>
            <li><a href="./?page=student_list">Workers</a></li>
            <li><a href="./?page=attendance">Attendance</a></li>
            <li><a href="./?page=attendance_report">Report</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3 className="footer-title">Contact Us</h3>
          <p>Email: support@attendance.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

        <div className="footer-social">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Attendance Management System. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
