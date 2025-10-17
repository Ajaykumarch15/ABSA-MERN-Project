import React from "react";

function SentimentResult({ results }) {
  if (!results) return null;

  const sentimentColors = {
    positive: "bg-green-100 text-green-700 border-green-400",
    negative: "bg-red-100 text-red-700 border-red-400",
    neutral: "bg-gray-100 text-gray-700 border-gray-400",
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Sentiment Analysis Results
      </h2>

      {/* Overall Sentiment */}
      <div
        className={`border-l-4 p-3 mb-6 rounded ${sentimentColors[results.overallSentiment]}`}
      >
        <p className="text-lg font-medium">
          <strong>Overall Sentiment:</strong>{" "}
          <span className="capitalize">{results.overallSentiment}</span>
        </p>
      </div>

      {/* Aspect-based Results */}
      <div className="grid md:grid-cols-2 gap-4">
        {results.aspects.map((a, i) => (
          <div
            key={i}
            className={`p-4 border rounded-lg ${sentimentColors[a.sentiment]}`}
          >
            <h3 className="text-lg font-semibold capitalize">{a.aspect}</h3>
            <p className="mt-2 text-sm">Sentiment: {a.sentiment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SentimentResult;
