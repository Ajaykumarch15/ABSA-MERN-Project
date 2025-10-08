// src/pages/components/UserSidebar.jsx
function UserSidebar({ onSelect }) {
  return (
    <div className="w-64 bg-green-700 text-white p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">User Panel</h2>
      <ul className="space-y-4">
        <li
          className="hover:text-green-200 cursor-pointer"
          onClick={() => onSelect("overview")}
        >
          Dashboard Overview
        </li>
        <li
          className="hover:text-green-200 cursor-pointer"
          onClick={() => onSelect("feedback")}
        >
          Submit Feedback
        </li>
        <li
          className="hover:text-green-200 cursor-pointer"
          onClick={() => onSelect("list")}
        >
          My Feedbacks
        </li>
      </ul>
    </div>
  );
}

export default UserSidebar;
