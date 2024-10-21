import React from "react";
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">
        Welcome to the Attendance Management System! Our platform is designed to simplify the process of tracking and managing attendance for organizations, schools, and businesses. With our user-friendly interface and robust features, you can efficiently monitor attendance, generate reports, and ensure accuracy in your records.
      </p>
      <p className="about-description">
        Our mission is to provide a seamless experience for administrators and users alike. We believe that attendance management should be hassle-free, allowing you to focus on what matters most – your core activities. 
      </p>
      <p className="about-description">
        Join us in transforming how attendance is managed. Explore our features and take the first step towards an organized and efficient system!
      </p>
    </div>
  );
};

export default About;
