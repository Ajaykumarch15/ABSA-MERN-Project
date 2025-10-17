import React, { useEffect, useState } from "react";
import { fetchAllFeedbacks } from "../api/adminService";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const loadFeedbacks = async () => {
      try {
        const data = await fetchAllFeedbacks();
        setFeedbacks(data);
      } catch (err) {
        console.error("Error loading feedbacks:", err);
      }
    };
    loadFeedbacks();
  }, []);

  // Aggregate overall sentiment stats
  const sentimentCounts = feedbacks.reduce(
    (acc, f) => {
      acc[f.overallSentiment] = (acc[f.overallSentiment] || 0) + 1;
      return acc;
    },
    { positive: 0, neutral: 0, negative: 0 }
  );

  const chartData = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        data: [
          sentimentCounts.positive,
          sentimentCounts.neutral,
          sentimentCounts.negative,
        ],
        backgroundColor: ["#22c55e", "#facc15", "#ef4444"],
      },
    ],
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-blue-700">Admin Dashboard</h1>

      <div className="w-80 mx-auto">
        <Pie data={chartData} />
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">User Feedbacks</h2>
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">User</th>
              <th className="border border-gray-200 px-4 py-2">Feedback</th>
              <th className="border border-gray-200 px-4 py-2">Sentiment</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((f) => (
              <tr key={f._id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">
                  {f.userId?.username || "Unknown"}
                </td>
                <td className="border px-4 py-2">{f.text}</td>
                <td
                  className={`border px-4 py-2 font-semibold ${
                    f.overallSentiment === "positive"
                      ? "text-green-600"
                      : f.overallSentiment === "neutral"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {f.overallSentiment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
