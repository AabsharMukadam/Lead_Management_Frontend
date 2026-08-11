import { Link, useNavigate } from "react-router-dom";
import { removeToken } from "../utils/auth";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/dashboard">
        Lead Management System
      </Link>

      <button
        className="btn btn-outline-light"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;