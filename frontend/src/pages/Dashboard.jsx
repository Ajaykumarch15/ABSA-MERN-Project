import React, { useEffect, useState } from "react";
import { getUserAnalyses } from "../api/analysisService";
import FeedbackForm from "../components/FeedbackForm";

const Dashboard = ({ user }) => {
  const [analyses, setAnalyses] = useState([]);

  const fetchAnalyses = async () => {
    const data = await getUserAnalyses(user._id);
    setAnalyses(data);
  };

  useEffect(() => {
    fetchAnalyses();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Welcome, {user.username} 👋
      </h1>
      <FeedbackForm
        userId={user._id}
        onAnalysisComplete={() => fetchAnalyses()}
      />
      <div className="mt-6">
        <h2 className="text-xl font-medium mb-2">Your Analyses</h2>
        {analyses.map((a) => (
          <div key={a._id} className="p-3 mb-3 border rounded bg-gray-50">
            <p><strong>Feedback:</strong> {a.feedbackText}</p>
            <p><strong>Overall Sentiment:</strong> {a.overallSentiment}</p>
            <ul>
              {a.aspects.map((aspect, i) => (
                <li key={i}>
                  {aspect.aspect}: <span className="italic">{aspect.sentiment}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
