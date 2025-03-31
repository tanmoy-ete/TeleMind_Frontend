import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/userAPI";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const data = await loginUser(formData); // Call API function to log in

      // If login fails, show the error message from backend
      if (!data.success) {
        setError(data.message || "Login failed!"); // Display error message
        return;
      }


      // If login is successful, store the token and user info
      localStorage.setItem("token", data.token); // Save token in localStorage

    
      navigate("/"); // Navigate to home page
    } catch (error) {
      setError("Login failed. Please try again."); // Fallback error message
      console.error("Login error:", error); // Log error for debugging
    }
  };

  return (
    <div className="login-form">
      <img src="TeleMind.png" alt="logo" />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {error && <p className="error">{error}</p>} {/* Show error message if any */}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
