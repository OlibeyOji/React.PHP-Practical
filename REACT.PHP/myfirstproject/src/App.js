import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './student/Navbar/Navbar';
import Hero from './student/Hero/Hero';
import About from './student/About/About';
import Footer from './student/Footer/Footer';
import Login from './student/Logins/Logins'; // Import the login component
import SignIn from './student/SignIn/SignIn'; // Import the sign-in component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if logged in
  const [isSigningIn, setIsSigningIn] = useState(true); // State to toggle between SignIn and Login
  const TIMEOUT_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

  // Check local storage for login status and timestamp on component mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    const lastLoginTime = localStorage.getItem('lastLoginTime');

    // Determine if the user is logged in and if the timeout has expired
    if (loggedInStatus === 'true') {
      const currentTime = new Date().getTime();
      if (currentTime - lastLoginTime < TIMEOUT_DURATION) {
        setIsLoggedIn(true);
      } else {
        // If 10 minutes have passed, reset the login status
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('lastLoginTime');
      }
    }
  }, []);

  // This function is passed to the Login/SignIn component and called on successful login
  const handleLogin = (credentials) => {
    setIsLoggedIn(true); // Set the login state to true once login is successful
    const currentTime = new Date().getTime();
    localStorage.setItem('isLoggedIn', 'true'); // Store login status in local storage
    localStorage.setItem('lastLoginTime', currentTime); // Store current timestamp in local storage
  };

  const handleSignIn = () => {
    setIsLoggedIn(true); // Also handle sign-in as a login
    const currentTime = new Date().getTime();
    localStorage.setItem('isLoggedIn', 'true'); // Store login status in local storage
    localStorage.setItem('lastLoginTime', currentTime); // Store current timestamp in local storage
  };

  return (
    <div>
      {!isLoggedIn ? (
        // If the user is not logged in, show either SignIn or Login based on state
        isSigningIn ? (
          <SignIn onSwitch={() => setIsSigningIn(false)} onSuccess={handleSignIn} /> // Pass a prop to switch to login
        ) : (
          <Login onLogin={handleLogin} />
        )
      ) : (
        // Once logged in, show the rest of the components
        <>
          <Navbar />
          <Hero />
          <About />
          
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
