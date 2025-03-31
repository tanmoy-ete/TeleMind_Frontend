import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Privacy from './pages/Privacy.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import User from './pages/User.jsx';
import FAQ from './pages/faq.jsx';
import Consult from './pages/consult.jsx';
import GrowthReport from './pages/GrowthReport.jsx';
import ConfirmAppointment from './pages/ConfirmAppointment';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in (token exists)
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      setIsAuthenticated(true); // User is authenticated
    } else {
      setIsAuthenticated(false); // User is not authenticated
    }
  }, []);

  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="home-page">
                <Navbar />
                <HomePage />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="about-page">
                <Navbar />
                <AboutUs />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="contact-page">
                <Navbar />
                <ContactUs />
              </div>
            }
          />
          <Route
            path="/privacy"
            element={
              <div className="privacy-page">
                <Navbar />
                <Privacy />
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div className="register-page">
                <Register />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className="login-page">
                <Login />
              </div>
            }
          />
          <Route
              path="/profile/me"
              element={<div className="user-info">
                <Navbar />
                <User />
                </div>}
            />
            
          <Route
            path="/faq"
            element={
              <div className="faq">
                <Navbar />
                <FAQ />
              </div>
            }
          />
          <Route
            path="/growthreport"
            element={
              <div className="growthreport">
                <Navbar />
                <GrowthReport />
              </div>
            }
          />
          <Route
            path="/consult"
            element={
              <div className="consult-page">
                <Navbar />
                <Consult />
              </div>
            }
          />
          <Route
            path="/confirm-appointment"
            element={
              <div className="confirm-page">
                <Navbar />
                <ConfirmAppointment />
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;