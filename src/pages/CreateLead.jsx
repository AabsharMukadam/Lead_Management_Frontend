import { useState } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { createLead } from "../services/leadService";

import {
  SOURCES,
  STATUSES,
  PRIORITIES,
} from "../constants/leadOptions";

function CreateLead() {
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    email: "",
    phone_number: "",
    source: "Website",
    status: "New",
    priority: "Medium",
    assigned_user: "",
    notes: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await createLead(formData);

      setSuccess(response.message);

      setTimeout(() => {
        navigate("/leads");
      }, 1000);
    } catch (err) {
    const detail = err.response?.data?.detail;

      if (Array.isArray(detail)) {
        setError(
          detail
            .map((error) => error.msg)
            .join(", ")
        );
      } else {
        setError(
          detail || "Failed to create lead"
        );
      }
    }
  };

  return (
    <Layout>

      {/* Page Header */}
      <div className="mb-4">
        <h2 className="fw-bold mb-1">
          Create New Lead
        </h2>

        <p className="text-muted mb-0">
          Add a new lead to your lead management system
        </p>
      </div>


      {/* Form Card */}
      <div className="card border-0 shadow-sm">

        <div className="card-header bg-white py-3 px-4">
          <h5 className="fw-bold mb-1">
            Lead Information
          </h5>

          <small className="text-muted">
            Enter the details of the new lead below.
          </small>
        </div>


        <div className="card-body p-4">

          {/* Alerts */}

          {error && (
            <div
              className="alert alert-danger"
              role="alert"
            >
              {error}
            </div>
          )}

          {success && (
            <div
              className="alert alert-success"
              role="alert"
            >
              {success}
            </div>
          )}


          <form onSubmit={handleSubmit}>

            {/* Basic Information */}

            <h6 className="fw-bold mb-3">
              Basic Information
            </h6>

            <div className="row g-3 mb-4">

              {/* Full Name */}
              <div className="col-md-6">

                <label className="form-label fw-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="full_name"
                  placeholder="Enter full name"
                  value={formData.full_name}
                  onChange={handleChange}
                />

              </div>


              {/* Company */}
              <div className="col-md-6">

                <label className="form-label fw-semibold">
                  Company
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="company_name"
                  placeholder="Enter company name"
                  value={formData.company_name}
                  onChange={handleChange}
                />

              </div>


              {/* Email */}
              <div className="col-md-6">

                <label className="form-label fw-semibold">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>


              {/* Phone */}
              <div className="col-md-6">

                <label className="form-label fw-semibold">
                  Phone Number
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="phone_number"
                  placeholder="Enter phone number"
                  value={formData.phone_number}
                  onChange={handleChange}
                />

              </div>

            </div>


            {/* Lead Details */}

            <h6 className="fw-bold mb-3">
              Lead Details
            </h6>

            <div className="row g-3 mb-4">

              {/* Source */}
              <div className="col-md-4">

                <label className="form-label fw-semibold">
                  Source
                </label>

                <select
                  className="form-select"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                >

                  {SOURCES.map((source) => (
                    <option
                      key={source}
                      value={source}
                    >
                      {source}
                    </option>
                  ))}

                </select>

              </div>


              {/* Status */}
              <div className="col-md-4">

                <label className="form-label fw-semibold">
                  Status
                </label>

                <select
                  className="form-select"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >

                  {STATUSES.map((status) => (
                    <option
                      key={status}
                      value={status}
                    >
                      {status}
                    </option>
                  ))}

                </select>

              </div>


              {/* Priority */}
              <div className="col-md-4">

                <label className="form-label fw-semibold">
                  Priority
                </label>

                <select
                  className="form-select"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                >

                  {PRIORITIES.map((priority) => (
                    <option
                      key={priority}
                      value={priority}
                    >
                      {priority}
                    </option>
                  ))}

                </select>

              </div>

            </div>


            {/* Assignment */}

            <h6 className="fw-bold mb-3">
              Assignment
            </h6>

            <div className="row mb-4">

              <div className="col-md-12">

                <label className="form-label fw-semibold">
                  Assigned User
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="assigned_user"
                  placeholder="Enter assigned user's email"
                  value={formData.assigned_user}
                  onChange={handleChange}
                />

                <div className="form-text">
                  Enter the email address of the user responsible for this lead.
                </div>

              </div>

            </div>


            {/* Notes */}

            <h6 className="fw-bold mb-3">
              Additional Information
            </h6>

            <div className="mb-4">

              <label className="form-label fw-semibold">
                Notes
              </label>

              <textarea
                rows="5"
                className="form-control"
                name="notes"
                placeholder="Add any additional notes about this lead..."
                value={formData.notes}
                onChange={handleChange}
              />

            </div>


            {/* Buttons */}

            <div className="d-flex justify-content-end gap-2">

              <button
                type="button"
                className="btn btn-outline-secondary px-4"
                onClick={() => navigate("/leads")}
                disabled={loading}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary px-4"
                disabled={loading}
              >
                {loading
                  ? "Creating..."
                  : "Create Lead"}
              </button>

            </div>

          </form>

        </div>
      </div>

    </Layout>
  );
}

export default CreateLead;