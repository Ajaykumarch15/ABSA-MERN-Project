import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-white">
          AspectIQ
        </Link>
        <div className="space-x-4">
          {!token ? (
            <>
              <Link to="/login" className="text-white hover:text-blue-200">Login</Link>
              <Link to="/signup" className="text-white hover:text-blue-200">Signup</Link>
            </>
          ) : (
            <>
              {role === "admin" && (
                <Link to="/admin" className="text-white hover:text-blue-200">Admin Dashboard</Link>
              )}
              {role === "user" && (
                <Link to="/user" className="text-white hover:text-blue-200">User Dashboard</Link>
              )}
              <button onClick={handleLogout} className="text-white hover:text-red-200">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
