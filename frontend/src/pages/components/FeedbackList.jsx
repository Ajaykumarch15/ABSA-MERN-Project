// src/pages/components/FeedbackList.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/feedback")
      .then((res) => setFeedbacks(res.data))
      .catch(() => console.error("Error fetching feedbacks"));
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">
        My Feedbacks
      </h3>
      <table className="min-w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="py-2 px-4 border">#</th>
            <th className="py-2 px-4 border">Feedback</th>
            <th className="py-2 px-4 border">Sentiment</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center py-4 text-gray-500">
                No feedbacks yet.
              </td>
            </tr>
          ) : (
            feedbacks.map((item, i) => (
              <tr key={i}>
                <td className="border px-4 py-2">{i + 1}</td>
                <td className="border px-4 py-2">{item.text}</td>
                <td className="border px-4 py-2">
                  {item.sentiment || "Pending"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default FeedbackList;
