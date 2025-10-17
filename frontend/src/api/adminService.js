import axios from "axios";

const API_URL = "http://localhost:5000/api/analysis";

export const fetchAllFeedbacks = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    throw error;
  }
};
