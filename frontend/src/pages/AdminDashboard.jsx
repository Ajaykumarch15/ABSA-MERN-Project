import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { aspect: "Quality", sentiment: 80 },
  { aspect: "Price", sentiment: 65 },
  { aspect: "Delivery", sentiment: 90 },
  { aspect: "Support", sentiment: 70 },
];

function AdminDashboard() {
  return (
    <div className="flex">
      <div className="w-64 bg-blue-700 text-white p-6 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li className="hover:text-blue-200 cursor-pointer">Overview</li>
          <li className="hover:text-blue-200 cursor-pointer">Manage Users</li>
          <li className="hover:text-blue-200 cursor-pointer">Reports</li>
        </ul>
      </div>

      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-2 gap-6 mb-10">
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-600">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600">120</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-600">Total Feedback</h3>
            <p className="text-3xl font-bold text-green-600">230</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Aspect Sentiment Overview</h3>
          <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="aspect" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sentiment" fill="#3B82F6" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
