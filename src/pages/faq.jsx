import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const faqData = [
    {
      category: "Personal Information",
      questions: [
        {
          id: "age",
          type: "number",
          question: "1. What is your age?",
          placeholder: "Enter your age (18–60)",
          min: 18, max: 60,
        },
        {
          id: "gender",
          type: "select",
          question: "2. What is your gender?",
          options: ["Male", "Female", "Other"],
        },
        {
          id: "marital_status",
          type: "select",
          question: "3. What is your marital status?",
          options: ["Single", "Married", "Divorced"],
        },
        {
          id: "education_level",
          type: "select",
          question: "4. What is your highest education level?",
          options: ["High School", "Bachelor", "Master", "PhD"],
        },
        {
          id: "employment_status",
          type: "select",
          question: "5. What is your current employment status?",
          options: ["Student", "Employed", "Self-Employed", "Unemployed"],
        },
      ],
    },
    {
      category: "Sleep & Physical Health",
      questions: [
        {
          id: "sleep_hours",
          type: "number",
          question: "1. How many hours do you sleep on average per day?",
          placeholder: "Enter hours (3–10)",
          min: 3, max: 10, step: 0.5,
        },
        {
          id: "physical_activity_hours_per_week",
          type: "number",
          question: "2. How many hours per week do you engage in physical activity?",
          placeholder: "Enter hours (0–15)",
          min: 0, max: 15, step: 0.5,
        },
        {
          id: "screen_time_hours_per_day",
          type: "number",
          question: "3. How many hours per day do you spend on screens (phone, computer, TV)?",
          placeholder: "Enter hours (1–12)",
          min: 1, max: 12, step: 0.5,
        },
        {
          id: "working_hours_per_week",
          type: "number",
          question: "4. How many hours per week do you work or study?",
          placeholder: "Enter hours (20–70)",
          min: 20, max: 70,
        },
      ],
    },
    {
      category: "Stress & Work",
      questions: [
        {
          id: "work_stress_level",
          type: "scale",
          question: "1. How would you rate your work-related stress level?",
          min: 1, max: 10,
          leftLabel: "No Stress", rightLabel: "Extreme Stress",
        },
        {
          id: "academic_pressure_level",
          type: "scale",
          question: "2. How much academic pressure do you feel?",
          min: 1, max: 10,
          leftLabel: "No Pressure", rightLabel: "Extreme Pressure",
        },
        {
          id: "job_satisfaction_score",
          type: "scale",
          question: "3. How satisfied are you with your job or studies?",
          min: 1, max: 10,
          leftLabel: "Very Dissatisfied", rightLabel: "Very Satisfied",
        },
        {
          id: "financial_stress_level",
          type: "scale",
          question: "4. How much financial stress are you currently experiencing?",
          min: 1, max: 10,
          leftLabel: "No Stress", rightLabel: "Extreme Stress",
        },
      ],
    },
    {
      category: "Mental Health Symptoms",
      questions: [
        {
          id: "anxiety_score",
          type: "scale",
          question: "1. How severe is your anxiety on a daily basis?",
          min: 1, max: 10,
          leftLabel: "Not Anxious", rightLabel: "Severely Anxious",
        },
        {
          id: "depression_score",
          type: "scale",
          question: "2. How often do you feel depressed, empty, or hopeless?",
          min: 1, max: 10,
          leftLabel: "Never", rightLabel: "Always",
        },
        {
          id: "stress_level",
          type: "scale",
          question: "3. How would you rate your overall stress level?",
          min: 1, max: 10,
          leftLabel: "Very Low", rightLabel: "Very High",
        },
        {
          id: "mood_swings_frequency",
          type: "scale",
          question: "4. How frequently do you experience mood swings?",
          min: 1, max: 10,
          leftLabel: "Rarely", rightLabel: "Very Frequently",
        },
        {
          id: "concentration_difficulty_level",
          type: "scale",
          question: "5. How difficult is it for you to concentrate or focus?",
          min: 1, max: 10,
          leftLabel: "No Difficulty", rightLabel: "Extreme Difficulty",
        },
        {
          id: "social_support_score",
          type: "scale",
          question: "6. How strong is your social support from friends and family?",
          min: 1, max: 10,
          leftLabel: "Very Weak", rightLabel: "Very Strong",
        },
      ],
    },
    {
      category: "Medical & Personal History",
      questions: [
        {
          id: "panic_attack_history",
          type: "yesno",
          question: "1. Have you ever experienced a panic attack?",
        },
        {
          id: "family_history_mental_illness",
          type: "yesno",
          question: "2. Does anyone in your immediate family have a history of mental illness?",
        },
        {
          id: "previous_mental_health_diagnosis",
          type: "yesno",
          question: "3. Have you ever been diagnosed with a mental health condition?",
        },
        {
          id: "therapy_history",
          type: "yesno",
          question: "4. Have you ever attended therapy or psychological counseling?",
        },
        {
          id: "substance_use",
          type: "yesno",
          question: "5. Do you currently use any addictive substances (alcohol, tobacco, drugs)?",
        },
      ],
    },
  ];

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    const allIds = faqData.flatMap((s) => s.questions.map((q) => q.id));
    const unanswered = allIds.filter(
      (id) => answers[id] === undefined || answers[id] === ""
    );
    if (unanswered.length > 0) {
      alert(`Please answer all questions before submitting. (${unanswered.length} remaining)`);
      return;
    }
    localStorage.setItem("mentalHealthAnswers", JSON.stringify(answers));
    navigate("/growthreport");
  };

  return (
    <div className="faq-page">
      <div className="statement">
        <h2>Mental Health Assessment</h2>
        <p>
          Answer the following questions honestly to assess your mental health.
          Your responses will be analyzed by our AI model to generate a
          personalized mental health report. All information is private and confidential.
        </p>
      </div>

      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="faq-section">
          <h2>{section.category}</h2>
          {section.questions.map((item) => (
            <div key={item.id} className="faq-item">
              <h3>{item.question}</h3>

              {/* Number input */}
              {item.type === "number" && (
                <input
                  type="number"
                  className="faq-input"
                  placeholder={item.placeholder}
                  min={item.min}
                  max={item.max}
                  step={item.step || 1}
                  value={answers[item.id] || ""}
                  onChange={(e) =>
                    handleChange(item.id, parseFloat(e.target.value))
                  }
                />
              )}

              {/* Dropdown select */}
              {item.type === "select" && (
                <select
                  className="faq-select"
                  value={answers[item.id] || ""}
                  onChange={(e) => handleChange(item.id, e.target.value)}
                >
                  <option value="" disabled>Select an option</option>
                  {item.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              )}

              {/* 1–10 scale slider */}
              {item.type === "scale" && (
                <div className="scale-container">
                  <div className="scale-labels">
                    <span>{item.leftLabel}</span>
                    <span>{item.rightLabel}</span>
                  </div>
                  <div className="scale-options">
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((val) => (
                      <label
                        key={val}
                        className={`scale-option ${answers[item.id] === val ? "selected" : ""}`}
                      >
                        <input
                          type="radio"
                          name={`scale-${item.id}`}
                          value={val}
                          checked={answers[item.id] === val}
                          onChange={() => handleChange(item.id, val)}
                          className="visually-hidden"
                        />
                        <div className="scale-value">{val}</div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Yes / No binary */}
              {item.type === "yesno" && (
                <div className="yesno-container">
                  {["Yes", "No"].map((opt) => {
                    const val = opt === "Yes" ? 1 : 0;
                    return (
                      <label
                        key={opt}
                        className={`yesno-option ${answers[item.id] === val ? "selected" : ""}`}
                      >
                        <input
                          type="radio"
                          name={`yesno-${item.id}`}
                          value={val}
                          checked={answers[item.id] === val}
                          onChange={() => handleChange(item.id, val)}
                          className="visually-hidden"
                        />
                        {opt}
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}

      <button className="submit-button" onClick={handleSubmit}>
        Submit & Generate Report
      </button>
    </div>
  );
};

export default FAQ;