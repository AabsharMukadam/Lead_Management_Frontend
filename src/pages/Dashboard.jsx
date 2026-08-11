import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import { getLeads } from "../services/leadService";

function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const response = await getLeads(
        "",
        "",
        "",
        "",
        1,
        1000
      );

      setLeads(response.data || []);
    } catch (error) {
      console.error(
        "Failed to load dashboard data:",
        error
      );

      setLeads([]);
    } finally {
      setLoading(false);
    }
  };

  // Statistics
  const totalLeads = leads.length;

  const newLeads = leads.filter(
    (lead) => lead.status === "New"
  ).length;

  const contactedLeads = leads.filter(
    (lead) => lead.status === "Contacted"
  ).length;

  const qualifiedLeads = leads.filter(
    (lead) => lead.status === "Qualified"
  ).length;

  const wonLeads = leads.filter(
    (lead) => lead.status === "Won"
  ).length;

  const lostLeads = leads.filter(
    (lead) => lead.status === "Lost"
  ).length;

  const highPriorityLeads = leads.filter(
    (lead) => lead.priority === "High"
  ).length;

  // Recent 5 leads
  const recentLeads = [...leads]
    .sort(
      (a, b) =>
        new Date(b.created_at) -
        new Date(a.created_at)
    )
    .slice(0, 5);

  if (loading) {
    return (
      <Layout>
        <div className="d-flex justify-content-center align-items-center py-5">
          <div className="text-center">
            <div
              className="spinner-border text-primary mb-3"
              role="status"
            >
              <span className="visually-hidden">
                Loading...
              </span>
            </div>

            <p className="text-muted mb-0">
              Loading dashboard...
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">
            Dashboard
          </h2>

          <p className="text-muted mb-0">
            Overview of your lead management system
          </p>
        </div>

        <button
          className="btn btn-primary px-4"
          onClick={fetchDashboardData}
        >
          Refresh
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="row g-3 mb-4">

        {/* Total */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <p className="text-muted mb-2">
                Total Leads
              </p>

              <h2 className="fw-bold mb-0">
                {totalLeads}
              </h2>

              <small className="text-muted">
                All leads
              </small>
            </div>
          </div>
        </div>

        {/* New */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <p className="text-muted mb-2">
                New Leads
              </p>

              <h2 className="fw-bold mb-0">
                {newLeads}
              </h2>

              <small className="text-muted">
                Newly added
              </small>
            </div>
          </div>
        </div>

        {/* Contacted */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <p className="text-muted mb-2">
                Contacted
              </p>

              <h2 className="fw-bold mb-0">
                {contactedLeads}
              </h2>

              <small className="text-muted">
                Leads contacted
              </small>
            </div>
          </div>
        </div>

        {/* Qualified */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <p className="text-muted mb-2">
                Qualified
              </p>

              <h2 className="fw-bold mb-0">
                {qualifiedLeads}
              </h2>

              <small className="text-muted">
                Qualified leads
              </small>
            </div>
          </div>
        </div>

        {/* Won */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <p className="text-muted mb-2">
                Won Leads
              </p>

              <h2 className="fw-bold mb-0">
                {wonLeads}
              </h2>

              <small className="text-muted">
                Successfully converted
              </small>
            </div>
          </div>
        </div>

        {/* Lost */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <p className="text-muted mb-2">
                Lost Leads
              </p>

              <h2 className="fw-bold mb-0">
                {lostLeads}
              </h2>

              <small className="text-muted">
                Unsuccessful leads
              </small>
            </div>
          </div>
        </div>

        {/* High Priority */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <p className="text-muted mb-2">
                High Priority
              </p>

              <h2 className="fw-bold mb-0">
                {highPriorityLeads}
              </h2>

              <small className="text-muted">
                Requires attention
              </small>
            </div>
          </div>
        </div>

      </div>

      {/* Recent Leads */}
      <div className="card border-0 shadow-sm">

        <div className="card-header bg-white border-bottom py-3 px-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="fw-bold mb-1">
                Recent Leads
              </h5>

              <small className="text-muted">
                Latest leads added to the system
              </small>
            </div>

            <span className="badge bg-light text-dark border">
              Latest 5
            </span>
          </div>
        </div>

        <div className="card-body p-0">

          {recentLeads.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted mb-0">
                No leads available.
              </p>
            </div>
          ) : (
            <div className="table-responsive">

              <table className="table table-hover align-middle mb-0">

                <thead className="table-light">
                  <tr>
                    <th className="px-4">Name</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Priority</th>
                  </tr>
                </thead>

                <tbody>
                  {recentLeads.map((lead) => (
                    <tr key={lead.id}>

                      <td className="px-4 fw-semibold">
                        {lead.full_name}
                      </td>

                      <td>
                        {lead.company_name}
                      </td>

                      <td className="text-muted">
                        {lead.email}
                      </td>

                      <td>
                        <span className="badge bg-light text-dark border">
                          {lead.status}
                        </span>
                      </td>

                      <td>
                        <span className="badge bg-light text-dark border">
                          {lead.priority}
                        </span>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
