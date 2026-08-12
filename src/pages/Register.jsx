import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await api.post(
        "/auth/register",
        formData
      );

      setSuccess(
        response.data?.message ||
          "User registered successfully"
      );

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div
        className="card shadow p-4"
        style={{ width: "400px" }}
      >
        <h2 className="text-center mb-4">
          Create Account
        </h2>

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        {success && (
          <div className="alert alert-success">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Full Name */}

          <div className="mb-3">
            <label className="form-label">
              Full Name
            </label>

            <input
              type="text"
              name="full_name"
              className="form-control"
              placeholder="Enter full name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}

          <div className="mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}

          <div className="mb-3">
            <label className="form-label">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Password */}

          <div className="mb-3">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}

          <div className="mb-3">
            <label className="form-label">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirm_password"
              className="form-control"
              placeholder="Confirm password"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading
              ? "Creating account..."
              : "Register"}
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;