// src/pages/components/FeedbackForm.jsx
import { useState } from "react";
import axios from "axios";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/feedback", { text });
      alert("Feedback submitted successfully!");
      setText("");
    } catch (err) {
      alert("Failed to submit feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4 text-gray-700">
        Submit Your Feedback
      </h3>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-green-500 focus:border-green-500"
          placeholder="Share your feedback about product, price, or delivery..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          required
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300 w-full"
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
