import React, { useState } from "react";
import { analyzeFeedback } from "../../api/analysisService";


const FeedbackForm = ({ userId = "68da8b84e5f57a725c303f19", onAnalysisComplete }) => {
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await analyzeFeedback(userId, feedback);
      onAnalysisComplete(result);
      setFeedback("");
    } catch (err) {
      console.error("Error submitting feedback:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg"
        rows="4"
        placeholder="Enter your feedback..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Submit Feedback"}
      </button>
    </form>
  );
};

export default FeedbackForm;
