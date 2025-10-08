// src/pages/UserDashboard.jsx
import { useState } from "react";
import UserSidebar from "./components/UserSidebar";
import FeedbackForm from "./components/FeedbackForm";
import SentimentChart from "./components/SentimentChart";
import FeedbackList from "./components/FeedbackList";

function UserDashboard() {
  const [section, setSection] = useState("overview");

  return (
    <div className="flex">
      <UserSidebar onSelect={setSection} />

      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-green-700 mb-6">
          User Dashboard
        </h1>

        {section === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SentimentChart />
          </div>
        )}

        {section === "feedback" && <FeedbackForm />}
        {section === "list" && <FeedbackList />}
      </div>
    </div>
  );
}

export default UserDashboard;
