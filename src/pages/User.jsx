import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")); // Retrieve user data

    if (!storedUser) {
      setError("Unauthorized. Please log in.");
      navigate("/login"); // Redirect to login page
      return;
    }

    setUser(storedUser);
  }, [navigate]);

  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      {user ? (
        <div className="user-profile-details">
          <p><strong>Name:</strong> {user.fullname}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Mobile:</strong> {user.mobile}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Occupation:</strong> {user.occupation}</p>
          <p><strong>Date of Birth:</strong> {new Date(user.dob).toDateString()}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default UserProfile;