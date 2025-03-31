import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GrowthReport = () => {
  const [report, setReport] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile view
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);


  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("answers")) || {};

    const categories = [
      "Emotional Well-being",
      "Stress & Coping",
      "Social Connections",
      "Health Symptom ",
      "Lifestyle & Well-being",
    ];

    const scores = categories.map((category, index) => {
      const categoryAnswers = Object.keys(answers).filter((key) => key.startsWith(`${index}-`));
      const total = categoryAnswers.reduce((sum, key) => sum + (parseInt(answers[key]) || 0), 0);
      return categoryAnswers.length ? total / categoryAnswers.length : 0;
    });

    const insights = generateInsights(scores, categories);
    const advice = generateAIAdvice(scores);

    setReport({ categories, scores, insights, advice });
  }, []);

  const generateInsights = (scores, categories) => {
    return scores.map((score, index) => {
      const category = categories[index];
      
      if (score >= 4.75) {
        return `Critical level of ${category}. Immediate medical consultation is strongly advised to address these severe symptoms.`;
      } else if (score >= 4.5) {
        return `Very severe level of ${category}. Urgent professional evaluation recommended to prevent worsening.`;
      } else if (score >= 4.25) {
        return `Severe level of ${category}. Schedule a doctor's appointment this week for proper assessment.`;
      } else if (score >= 4.0) {
        return `High-severe level of ${category}. Consider consulting a specialist for targeted treatment options.`;
      } else if (score >= 3.75) {
        return `High level of ${category} with concerning features. A healthcare provider can help develop a management plan.`;
      } else if (score >= 3.5) {
        return `Elevated level of ${category}. Professional guidance may be beneficial for optimal control.`;
      } else if (score >= 3.25) {
        return `Moderately high level of ${category}. Consider discussing with your doctor at next visit.`;
      } else if (score >= 3.0) {
        return `Moderate-high level of ${category}. Monitor closely and seek help if persistent.`;
      } else if (score >= 2.75) {
        return `Moderate level of ${category} with some concerning elements. Lifestyle modifications may help.`;
      } else if (score >= 2.5) {
        return `Moderate level of ${category}. Implement stress-reduction techniques and monitor progression.`;
      } else if (score >= 2.25) {
        return `Mild-moderate level of ${category}. Regular self-care practices are recommended.`;
      } else if (score >= 2.0) {
        return `Mild level of ${category}. Maintain healthy habits and observe for changes.`;
      } else if (score >= 1.75) {
        return `Low-mild level of ${category}. Occasional monitoring is sufficient.`;
      } else if (score >= 1.5) {
        return `Minimal level of ${category}. No intervention needed unless symptoms increase.`;
      } else if (score >= 1.25) {
        return `Very low level of ${category}. Continue current healthy practices.`;
      } else if (score >= 1.0) {
        return `Borderline level of ${category}. Typically not concerning in isolation.`;
      } else if (score >= 0.75) {
        return `Trace level of ${category}. No clinical significance.`;
      } else if (score >= 0.5) {
        return `Negligible level of ${category}. Excellent control.`;
      } else if (score >= 0.25) {
        return `Almost absent ${category}. Maintain your current approach.`;
      } else {
        return `No significant ${category} detected. Ideal status.`;
      }
    });
  };

  const generateAIAdvice = (scores) => {
    return [
      scores[0] >= 4 ? "You seem to be doing well emotionally. Keep practicing gratitude and mindfulness."
        : scores[0] > 2 ? "Consider journaling or talking to a friend to improve your emotional well-being."
        : "Try engaging in activities that bring you joy and connect with loved ones.",
  
      scores[1] >= 4 ? "You handle stress well. Continue practicing relaxation techniques like meditation."
        : scores[1] > 2 ? "Try incorporating stress-relief activities like yoga or deep breathing into your routine."
        : "Consider seeking professional help to develop better coping mechanisms.",
  
      scores[2] >= 4 ? "Your social connections are strong. Keep nurturing your relationships."
        : scores[2] > 2 ? "Try reaching out to friends or joining social groups to build connections."
        : "Consider seeking support from a counselor or therapist to address feelings of isolation.",
  
      scores[3] >= 4 ? "You may be experiencing significant mental health symptoms. Seek professional help."
        : scores[3] > 2 ? "Monitor your symptoms and consider talking to a mental health professional."
        : "Your mental health seems stable. Continue practicing self-care.",
  
      scores[4] >= 4 ? "Your lifestyle habits are excellent. Keep up the good work!"
        : scores[4] > 2 ? "Try improving your sleep, diet, and exercise habits for better well-being."
        : "Consider making small changes to your daily routine to improve your lifestyle."
    ];
  };
  

  if (!report) return <div>Loading...</div>;

  const data = {
    labels: report.categories,
    datasets: [
      {
        label: "Average Score",
        data: report.scores,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow chart to resize freely
    plugins: {
      legend: { 
        position: "top",
        labels: {
          boxWidth: 20,
          padding: isMobile ? 10 : 20,
          font: {
            size: isMobile ? 12 : 14
          }
        }
      },
      title: { 
        display: true, 
        text: "Mental Health Growth Report",
        font: {
          size: isMobile ? 16 : 18
        }
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: isMobile ? 45 : 0,
          minRotation: isMobile ? 45 : 0,
          font: {
            size: isMobile ? 12 : 14
          }
        },
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        max: 5,
        ticks: {
          stepSize: 1,
          font: {
            size: isMobile ? 12 : 14
          }
        }
      }
    },
    layout: {
      padding: isMobile ? 20 : 10
    }
  };

  return (
    <div className="growth-report">
      <h2>Your Mental Health Growth Report</h2>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
      <div className="insights-container">
      <h3>Insights:</h3>
        <div className="insight-card">
          <ul>{report.insights.map((insight, index) => <li key={index}>{insight}</li>)}</ul>
        </div>
      </div>
      <div className="advice-container">
      <h3>Advice For You:</h3>
        <div className="advice-card">
          <ul>{report.advice.map((advice, index) => <li key={index}>{advice}</li>)}</ul>
        </div>
      </div>
    </div>
  );
};

export default GrowthReport;
