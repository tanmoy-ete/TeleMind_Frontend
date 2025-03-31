import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/userAPI"; // Import API function

const Register = () => {
  const [formData, setFormData] = useState({ 
    fullname: "", 
    username: "", 
    address: "", 
    occupation: "",  
    email: "", 
    password: "", 
    dob: "", 
    mobile: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await registerUser(formData); // Call API function

      if (!response.success) {
        setError(response.message);
        return;
      }
      
      console.log("User registered:", response);
      // Save user data in localStorage
      localStorage.setItem("user", JSON.stringify(formData));
      localStorage.setItem("token", response.token);

      navigate("/login"); // Redirect after successful registration
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  const districts = [
    "Bagerhat", "Bandarban", "Barguna", "Barisal", "Bhola", "Bogura", "Brahmanbaria", "Chandpur", 
    "Chapai Nawabganj", "Chattogram", "Chuadanga", "Cox's Bazar", "Cumilla", "Dhaka", "Dinajpur", 
    "Faridpur", "Feni", "Gaibandha", "Gazipur", "Gopalganj", "Habiganj", "Jamalpur", "Jashore", 
    "Jhalokathi", "Jhenaidah", "Joypurhat", "Khagrachari", "Khulna", "Kishoreganj", "Kurigram", 
    "Kushtia", "Lakshmipur", "Lalmonirhat", "Madaripur", "Magura", "Manikganj", "Meherpur", 
    "Moulvibazar", "Munshiganj", "Mymensingh", "Naogaon", "Narail", "Narayanganj", "Narsingdi", 
    "Natore", "Netrokona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh", "Patuakhali", 
    "Pirojpur", "Rajbari", "Rajshahi", "Rangamati", "Rangpur", "Satkhira", "Shariatpur", 
    "Sherpur", "Sirajganj", "Sunamganj", "Sylhet", "Tangail", "Thakurgaon"
  ];
  
  console.log(districts);
  
  const occupations = ["Student", "Teacher", "Engineer", "Doctor", "Other"];

  return (
    <div className="register">
      <img src="TeleMind.png" alt="logo" />
      <div className="register-form-main">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter your full name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Mobile No.</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter your mobile no."
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <select name="address" value={formData.address} onChange={handleChange} required>
              <option value="">Select</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Occupation</label>
            <select name="occupation" value={formData.occupation} onChange={handleChange} required>
              <option value="">Select</option>
              {occupations.map((occupation, index) => (
                <option key={index} value={occupation}>
                  {occupation}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="register-button">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;  