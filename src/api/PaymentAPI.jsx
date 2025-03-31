import axios from "axios";

const API_BASE_URL = `${process.env.REACT_APP_API_URL}/api`;

export const processPayment = async (paymentData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/payments`,
      paymentData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error processing payment:", error);
    throw error;
  }
};

export const verifyPayment = async (paymentId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/payments/verify/${paymentId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error verifying payment:", error);
    throw error;
  }
};