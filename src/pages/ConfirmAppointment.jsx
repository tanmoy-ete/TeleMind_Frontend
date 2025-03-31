import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createAppointment } from "../api/doctorAPI";

const ConfirmAppointment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!location.state?.doctor || !location.state?.user) {
      navigate("/consult");
      return;
    }

    setDoctor(location.state.doctor);
    setUser(location.state.user);
    setLoading(false);
  }, [location, navigate]);

  const handleConfirmAppointment = async () => {
    try {
      await createAppointment({
        doctorId: doctor._id,
        userId: user._id,
        userName: user.fullname,
        userEmail: user.email,
        doctorName: doctor.name,
        doctorEmail: doctor.email
      });
      navigate("/payment"); // You'll need to create this page later
    } catch (error) {
      alert(error.message || "Failed to confirm appointment");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="confirm-appointment">
  
  <div className="confirmation-card">
  <h2>Confirm Your Appointment</h2>
    <div className="details-container">
      <div className="user-details">
          <h3>Your Information</h3>
          <p>Name: {user.fullname}</p>
          <p>Email: {user.email}</p>
        </div>
        
        <div className="doctor-details">
          <h3>Doctor Information</h3>
          <p>Name: {doctor.name}</p>
          <p>Specialization: {doctor.designation}</p>
          <p>Hospital: {doctor.hospital}</p>
          <p>Contact: {doctor.phone}</p>
        </div>
        </div>
        <button 
          className="confirm-btn"
          onClick={handleConfirmAppointment}
        >
          Confirm & Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default ConfirmAppointment;