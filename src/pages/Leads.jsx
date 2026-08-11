import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";

import {
  getLeads,
  deleteLead,
} from "../services/leadService";

function Leads() {
  const [leads, setLeads] = useState([]);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");
    const [source, setSource] = useState("");
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [total, setTotal] = useState(0);
    const [sortBy, setSortBy] = useState("created_at");
    const [order, setOrder] = useState("desc");

  useEffect(() => {
  fetchLeads();
}, [search, status, priority, source, page, sortBy, order]);

 const fetchLeads = async () => {
  try {
    const response = await getLeads(
      search,
      status,
      priority,
      source,
      page,
      limit,
      sortBy,
      order
    );
    setLeads(response.data);
    setTotal(response.total);
  } catch (error) {
    console.log(error);
  }
};

const handleDelete = async (leadId) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this lead?"
  );

  if (!confirmDelete) {
    return;
  }

  try {
    await deleteLead(leadId);

    fetchLeads();
  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.detail ||
      "Failed to delete lead"
    );
  }
};

  return (
    <Layout>

      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Leads</h2>
          <p className="text-muted mb-0">
            Manage and track all your leads
          </p>
        </div>

        <Link
          to="/create-lead"
          className="btn btn-primary"
        >
          + Create Lead
        </Link>
      </div>


      {/* Search & Filters */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">

          {/* Search */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Search Leads
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Search by name, email, company or phone..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>


          {/* Filters */}
          <div className="row g-3 mb-3">

            {/* Status */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Status
              </label>

              <select
                className="form-select"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                  setPage(1);
                }}
              >
                <option value="">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Lost">Lost</option>
                <option value="Won">Won</option>
              </select>
            </div>


            {/* Priority */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Priority
              </label>

              <select
                className="form-select"
                value={priority}
                onChange={(e) => {
                  setPriority(e.target.value);
                  setPage(1);
                }}
              >
                <option value="">All Priorities</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>


            {/* Source */}
            <div className="col-md-4">
              <label className="form-label fw-semibold">
                Source
              </label>

              <select
                className="form-select"
                value={source}
                onChange={(e) => {
                  setSource(e.target.value);
                  setPage(1);
                }}
              >
                <option value="">All Sources</option>
                <option value="Website">Website</option>
                <option value="Referral">Referral</option>
                <option value="Social Media">Social Media</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Other">Other</option>
              </select>
            </div>

          </div>


          {/* Sorting */}
          <div className="row g-3">

            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Sort By
              </label>

              <select
                className="form-select"
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setPage(1);
                }}
              >
                <option value="created_at">
                  Created Date
                </option>

                <option value="updated_at">
                  Updated Date
                </option>

                <option value="full_name">
                  Name
                </option>

                <option value="company_name">
                  Company
                </option>

                <option value="priority">
                  Priority
                </option>

                <option value="status">
                  Status
                </option>
              </select>
            </div>


            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Order
              </label>

              <select
                className="form-select"
                value={order}
                onChange={(e) => {
                  setOrder(e.target.value);
                  setPage(1);
                }}
              >
                <option value="desc">
                  Descending
                </option>

                <option value="asc">
                  Ascending
                </option>
              </select>
            </div>

          </div>

        </div>
      </div>


      {/* Leads Table */}
      <div className="card shadow-sm">

        <div className="card-header bg-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            All Leads
          </h5>

          <span className="text-muted small">
            Total: {total}
          </span>
        </div>


        <div className="card-body p-0">

          <div className="table-responsive">

            <table className="table table-hover align-middle mb-0">

              <thead className="table-dark">
                <tr>
                  <th className="px-3">Name</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Actions</th>
                </tr>
              </thead>


              <tbody>

                {leads.length === 0 ? (

                  <tr>
                    <td
                      colSpan="6"
                      className="text-center py-5 text-muted"
                    >
                      No leads found.
                    </td>
                  </tr>

                ) : (

                  leads.map((lead) => (

                    <tr key={lead.id}>

                      <td className="px-3 fw-semibold">
                        {lead.full_name}
                      </td>

                      <td>
                        {lead.email}
                      </td>

                      <td>
                        {lead.company_name}
                      </td>


                      {/* Status Badge */}
                      <td>
                        <span
                          className={`badge ${
                            lead.status === "Won"
                              ? "bg-success"
                              : lead.status === "Lost"
                              ? "bg-danger"
                              : lead.status === "Qualified"
                              ? "bg-primary"
                              : lead.status === "Contacted"
                              ? "bg-info text-dark"
                              : "bg-secondary"
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>


                      {/* Priority Badge */}
                      <td>
                        <span
                          className={`badge ${
                            lead.priority === "High"
                              ? "bg-danger"
                              : lead.priority === "Medium"
                              ? "bg-warning text-dark"
                              : "bg-secondary"
                          }`}
                        >
                          {lead.priority}
                        </span>
                      </td>


                      {/* Actions */}
                      <td>

                        <Link
                          to={`/edit-lead/${lead.id}`}
                          className="btn btn-warning btn-sm me-2"
                        >
                          Edit
                        </Link>


                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            handleDelete(lead.id)
                          }
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>


        {/* Pagination */}
        <div className="card-footer bg-white">

          <div className="d-flex justify-content-between align-items-center">

            <button
              className="btn btn-outline-secondary"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              ← Previous
            </button>


            <span className="fw-semibold">
              Page {page} of{" "}
              {Math.max(
                1,
                Math.ceil(total / limit)
              )}
            </span>


            <button
              className="btn btn-outline-secondary"
              disabled={
                page >= Math.ceil(total / limit)
              }
              onClick={() => setPage(page + 1)}
            >
              Next →
            </button>

          </div>

        </div>

      </div>

    </Layout>
  );
}

export default Leads;