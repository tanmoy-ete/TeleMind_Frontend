import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const faqData = [
    {
      category: "Emotional Well-being",
      questions: [
        {
          type: "rating",
          question: "1. How often do you feel genuinely happy?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
        {
          type: "rating",
          question: "2. How frequently do you experience feelings of sadness or hopelessness?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
        {
          type: "rating",
          question: "3. How well do you manage negative emotions like frustration or disappointment?",
          labels: ["Very Poorly", "Poorly", "Moderately", "Well", "Very Well"],
        },
        {
          type: "rating",
          question: "4. How often do you experience emotional numbness?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
        {
          type: "rating",
          question: "5. How often do you feel self-compassionate and kind toward yourself?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
      ],
    },
    {
      category: "Stress and Coping Mechanisms",
      questions: [
        {
          type: "rating",
          question: "1. How frequently do you feel overwhelmed by daily responsibilities?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
        {
          type: "rating",
          question: "2. How effectively do you cope with stressful situations?",
          labels: ["Not at all", "Slightly", "Moderately", "Well", "Extremely well"],
        },
        {
          type: "rating",
          question: "3. How often do you engage in stress-relieving activities like meditation or hobbies?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Daily"],
        },
        {
          type: "rating",
          question: "4. How often do you experience physical symptoms related to stress, such as headaches or fatigue?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
        {
          type: "rating",
          question: "5. How confident are you in your ability to manage unexpected life challenges?",
          labels: ["Not at all", "Slightly", "Moderately", "Confident", "Very Confident"],
        },
      ],
    },
    {
      category: "Social Connections and Relationships",
      questions: [
        {
          type: "rating",
          question: "1. How often do you feel a strong sense of belonging in your relationships?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
        {
          type: "rating",
          question: "2. How often do you feel isolated or lonely?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
        {
          type: "rating",
          question: "3. How comfortable do you feel in social situations?",
          labels: ["Very Uncomfortable", "Uncomfortable", "Neutral", "Comfortable", "Very Comfortable"],
        },
        {
          type: "rating",
          question: "4. How often do you have meaningful conversations with close friends or family?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Daily"],
        },
        {
          type: "rating",
          question: "5. How often do you feel emotionally supported by others?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
      ],
    },
    {
      category: "Mental Health Symptom Monitoring",
      questions: [
        {
          type: "rating",
          question: "1. How often do you experience racing thoughts or excessive worrying?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
        {
          type: "rating",
          question: "2. How often do you have trouble concentrating or making decisions?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
        {
          type: "rating",
          question: "3. How frequently do you experience changes in appetite or weight?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
        {
          type: "rating",
          question: "4. How often do you have difficulty falling or staying asleep?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
        {
          type: "rating",
          question: "5. How frequently do you experience unexplained physical symptoms like dizziness or nausea?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
      ],
    },
    {
      category: "Lifestyle and Well-being",
      questions: [
        {
          type: "rating",
          question: "1. How many hours of sleep do you get on average each night?",
          labels: ["Less than 4", "4-5", "6-7", "7-8", "More than 8"],
        },
        {
          type: "rating",
          question: "2. How would you rate the quality of your sleep?",
          labels: ["Very Poor", "Poor", "Average", "Good", "Excellent"],
        },
        {
          type: "rating",
          question: "3. How often do you engage in physical activity or exercise?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Daily"],
        },
        {
          type: "rating",
          question: "4. How balanced do you feel your diet is?",
          labels: ["Very Unbalanced", "Unbalanced", "Neutral", "Balanced", "Very Balanced"],
        },
        {
          type: "rating",
          question: "5. How often do you engage in activities that bring you joy?",
          labels: ["Never", "Rarely", "Sometimes", "Often", "Always"],
        },
      ],
    },
  ];

  const handleRatingChange = (categoryIndex, questionIndex, value) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setAnswers({ ...answers, [key]: value });
  };

  const handleSubmit = () => {
    localStorage.setItem("answers", JSON.stringify(answers)); // Save answers to localStorage
    alert("Submission Successful!!!"); // Show popup
    navigate("/"); // Redirect to homepage
  };



  return (
    <div className="faq-page">
      <div className="statement">
      <h2>Mental Health Assessment</h2>
      <p>
        Rate the following questions sincerely and properly to assess your mental condition. 
        We will provide you a mental status report to replicate your mental condition. 
        These questions are verified by psychiatrists and doctors.
      </p>
    </div>
      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="faq-section">
          <h2>{section.category}</h2>
          {section.questions.map((item, questionIndex) => {
            const key = `${sectionIndex}-${questionIndex}`;
            const currentValue = answers[key] || 0;
            
            return (
              <div key={key} className="faq-item">
                <h3>{item.question}</h3>
                {item.type === "rating" && (
                  <div className="rating-options-container">
                    {item.labels.map((label, index) => {
                      const value = index + 1;
                      return (
                        <label 
                          key={value}
                          className={`rating-option ${currentValue === value ? "selected" : ""}`}
                        >
                          <input
                            type="radio"
                            name={`rating-${key}`}
                            value={value}
                            checked={currentValue === value}
                            onChange={() => handleRatingChange(sectionIndex, questionIndex, value)}
                            className="visually-hidden"
                          />
                          <div className="rating-value">{value}</div>
                          <div className="rating-label">{label}</div>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
      <button
       className="submit-button"
       onClick={handleSubmit}
      > 
        Submit Answers
      </button>
    </div>
  );
};

export default FAQ;