import axios from "axios";

const API_BASE_URL = `${process.env.REACT_APP_API_URL}/api/users`; // Backend API URL

// Function to login a user
export const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, formData, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("Login successful:", response.data);

    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Login failed!");
  }
};

// Function to handle login form submission
export const handleLogin = async (formData) => {
  try {
    const response = await loginUser(formData);

    // Redirect to profile page after successful login
    window.location.href = "/";
  } catch (error) {
    console.error("Error during login:", error.message);
    alert(error.message); // Display error message
  }
};

// Function to register a user
export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, formData, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("Registration successful:", response.data);

    return response.data;
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Registration failed!");
  }
};


// Function to create an appointment
export const createAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/appointments`, appointmentData, {
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to create appointment:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to create appointment");
  }
};





