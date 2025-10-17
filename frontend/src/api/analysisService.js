import axios from "axios";

const API_URL = "http://localhost:5000/api/analysis";

export const analyzeFeedback = async (userId, text) => {
  try {
    const response = await axios.post(API_URL, { userId, text });
    return response.data;
  } catch (error) {
    console.error("Error analyzing feedback:", error);
    throw error;
  }
};
