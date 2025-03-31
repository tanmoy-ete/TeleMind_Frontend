import React from "react";


const DoctorCard = ({ doctor, onConsult }) => {
  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      <div className="doctor-details">
        <h3>{doctor.name}</h3>
        <p className="designation">{doctor.designation}</p>
        <div className="doctor-info">
          <p><strong>Hospital:</strong> {doctor.hospital}</p>
          <p><strong>Chamber:</strong> {doctor.chamber}</p>
          <p><strong>Contact:</strong> {doctor.phone}</p>
        </div>
        <button 
          className="consult-btn"
          onClick={() => onConsult(doctor)}
        >
          Consult Now
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;