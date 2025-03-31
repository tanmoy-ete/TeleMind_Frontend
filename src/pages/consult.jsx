import React, { useState, useEffect } from "react";
import { getDoctors, createAppointment } from "../api/doctorAPI";
import DoctorCard from "../components/DoctorCard";
import { useNavigate } from "react-router-dom"


const Consult = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("user");

        if (!token || !userData) {
          throw new Error("Please login to book appointments");
        }

        setUser(JSON.parse(userData));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
        const data = await getDoctors();
        setDoctors(data);
      } catch (error) {
        setError("Failed to load doctors. Please try again later.");
      }
    };

    fetchDoctorsData();
  }, []);

  const handleConsultNow = (doctor) => {
    if (!user) {
      setError("Please login to book appointments");
      return;
    }
    navigate("/confirm-appointment", { 
      state: { doctor, user } 
    });
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="consult-page">
      <div className="consult-container">
      <h1>Available Psychiatrists</h1>
      <p className="page-description">
        Consult a Psychiatrist for your mental health improvement. A confirmation email will be sent to your email after confirming the appointment by the Psychiatrist.
      </p>

      <div className="doctors-grid">
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <DoctorCard
              key={doctor._id}
              doctor={doctor}
              onConsult={() => handleConsultNow(doctor)}
            />
          ))
        ) : (
          <p>No doctors available at the moment.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default Consult;