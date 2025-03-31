import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [answers, setAnswers] = useState({}); // State to store user answers
  const [visibleBoxes, setVisibleBoxes] = useState([]);

  useEffect(() => {
    // Trigger animations when component mounts
    const timer1 = setTimeout(() => setVisibleBoxes([0]), 300);
    const timer2 = setTimeout(() => setVisibleBoxes([0, 1]), 600);
    const timer3 = setTimeout(() => setVisibleBoxes([0, 1, 2]), 900);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);


  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="text">
          <p id="para1">Test Your Mind<br />Consult Your Own Doctor</p>
          <p id="para2">SAY NO TO DEPRESSION AND STAY HAPPY.....</p>
          <div className="icon">
            <img src="letter-q_8142775.png" alt="q" />
            <img src="graph_11691788.png" alt="graph" />
            <img src="drugs_9767673.png" alt="q" />
          </div>
        </div>

        {/* Info Boxes Section */}
        <section className="info-boxes">
          <div className={`info-box ${visibleBoxes.includes(0) ? 'visible' : ''}`}>
            <p id="para3">Mental Assesment</p>
            <p id="para4">Test Your Mental Condition By Answering Questions</p>
            <Link to="/faq" className="btn">
              Give Test
            </Link>
          </div>
          <div className={`info-box box2 ${visibleBoxes.includes(1) ? 'visible' : ''}`}>
            <p id="para3">Growth Report</p>
            <p id="para4">Check Your Mental Condition Growth</p>
            <Link to="/growthreport" className="btn">
              See Report
            </Link>
          </div>
          <div className={`info-box ${visibleBoxes.includes(2) ? 'visible' : ''}`}>
            <p id="para3">Consult Doctors</p>
            <p id="para4">Consult Specialist And Get Proper Treatment</p>
            <a href="/consult" className="btn">
              Appointment
            </a>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HomePage;