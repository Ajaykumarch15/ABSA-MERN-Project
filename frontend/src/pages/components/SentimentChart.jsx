// src/pages/components/SentimentChart.jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { aspect: "Quality", sentiment: 85 },
  { aspect: "Price", sentiment: 70 },
  { aspect: "Delivery", sentiment: 90 },
  { aspect: "Support", sentiment: 75 },
];

function SentimentChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">
        Sentiment Analysis Overview
      </h3>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="aspect" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sentiment" fill="#16A34A" />
      </BarChart>
    </div>
  );
}

export default SentimentChart;
