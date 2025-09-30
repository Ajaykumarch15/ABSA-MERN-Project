import { useState } from "react";
import axios from "axios";
import React from "react";

function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        username: form.username,
        email: form.email,
        password: form.password,
      });

      if (response && response.data) {
        console.log("Signup response:", response.data);
        alert("Signup successful!");
      } else {
        console.error("No response data");
        alert("Signup failed! No data received");
      }
    } catch (err) {
      console.error("Error in signup:", err.response?.data || err.message);
      alert("Signup failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
        <button 
          type="submit"
          className="w-full bg-red-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
