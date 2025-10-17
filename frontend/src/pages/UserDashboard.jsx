import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import SentimentResult from "./components/SentimentResult";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function UserDashboard() {
  const [results, setResults] = useState(null);

  // If analysis results exist, prepare data for Pie Chart
  const chartData = results
    ? (() => {
        const sentimentCounts = {
          positive: results.aspects.filter((a) => a.sentiment === "positive").length,
          neutral: results.aspects.filter((a) => a.sentiment === "neutral").length,
          negative: results.aspects.filter((a) => a.sentiment === "negative").length,
        };

        return {
          labels: ["Positive", "Neutral", "Negative"],
          datasets: [
            {
              data: [
                sentimentCounts.positive,
                sentimentCounts.neutral,
                sentimentCounts.negative,
              ],
              backgroundColor: ["#4CAF50", "#9E9E9E", "#F44336"],
              borderWidth: 1,
            },
          ],
        };
      })()
    : null;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-green-600">User Dashboard</h1>
      <FeedbackForm onAnalysisComplete={setResults} />
      <SentimentResult results={results} />

      {/* Show Pie Chart only if results exist */}
      {results && (
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Sentiment Distribution
          </h2>
          <div className="max-w-sm mx-auto">
            <Pie data={chartData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
