import { useState } from "react";
import axios from "axios";

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
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
