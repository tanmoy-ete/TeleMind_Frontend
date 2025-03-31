import axios from "axios";

const API_BASE_URL = `${process.env.REACT_APP_API_URL}/api`;
export const getDoctors = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/doctors`, {
      headers: { "Cache-Control": "no-store" },
      params: { t: new Date().getTime() },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching doctors:", error);
    throw error;
  }
};

export const getDoctorById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/doctors/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching doctor:", error);
    throw error;
  }
};

export const createAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/appointments`,
      appointmentData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating appointment:", error);
    throw error;
  }
};

export const getAppointmentDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/appointments/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching appointment:", error);
    throw error;
  }
};