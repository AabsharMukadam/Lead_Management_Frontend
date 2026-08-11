import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import { getUsers } from "../services/userService";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getUsers();

      setUsers(response || []);
    } catch (err) {
      console.error("Failed to load users:", err);

      setError(
        err.response?.data?.detail ||
          "Failed to load users"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>

      {/* Page Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold mb-1">
            Users
          </h2>

          <p className="text-muted mb-0">
            Manage and view registered users
          </p>
        </div>

        <button
          className="btn btn-primary px-4"
          onClick={fetchUsers}
          disabled={loading}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
              ></span>
              Loading...
            </>
          ) : (
            <>
              <span className="me-2">↻</span>
              Refresh
            </>
          )}
        </button>

      </div>


      {/* Error Message */}

      {error && (
        <div
          className="alert alert-danger"
          role="alert"
        >
          <strong>Error:</strong> {error}
        </div>
      )}


      {/* Users Card */}

      {loading ? (

        <div className="card border-0 shadow-sm">

          <div className="card-body">

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
                  Loading users...
                </p>

              </div>

            </div>

          </div>

        </div>

      ) : (

        <div className="card border-0 shadow-sm">

          {/* Card Header */}

          <div className="card-header bg-white border-bottom py-3 px-4">

            <div className="d-flex justify-content-between align-items-center">

              <div>

                <h5 className="fw-bold mb-1">
                  Registered Users
                </h5>

                <small className="text-muted">
                  {users.length}{" "}
                  {users.length === 1
                    ? "user"
                    : "users"}{" "}
                  registered
                </small>

              </div>

            </div>

          </div>


          {/* Card Body */}

          <div className="card-body p-0">

            {users.length === 0 ? (

              <div className="text-center py-5">

                <div
                  className="mb-3"
                  style={{ fontSize: "2.5rem" }}
                >
                  👤
                </div>

                <h5 className="fw-semibold">
                  No users found
                </h5>

                <p className="text-muted mb-0">
                  There are currently no registered
                  users.
                </p>

              </div>

            ) : (

              <div className="table-responsive">

                <table className="table table-hover align-middle mb-0">

                  <thead className="table-light">

                    <tr>

                      <th className="px-4">
                        #
                      </th>

                      <th>
                        Name
                      </th>

                      <th>
                        Email
                      </th>

                      <th>
                        Role
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {users.map((user, index) => (

                      <tr key={user.id}>

                        <td className="px-4 text-muted">
                          {index + 1}
                        </td>


                        <td>

                          <div className="d-flex align-items-center">

                            <div
                              className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-3"
                              style={{
                                width: "38px",
                                height: "38px",
                                fontSize: "14px",
                                fontWeight: "600",
                              }}
                            >
                              {(
                                user.full_name ||
                                user.email ||
                                "U"
                              )
                                .charAt(0)
                                .toUpperCase()}
                            </div>

                            <span className="fw-semibold">
                              {user.full_name ||
                                "Not available"}
                            </span>

                          </div>

                        </td>


                        <td className="text-muted">

                          {user.email ||
                            "Not available"}

                        </td>


                        <td>

                          <span
                            className={
                              user.role === "admin"
                                ? "badge bg-danger-subtle text-danger px-3 py-2"
                                : "badge bg-primary-subtle text-primary px-3 py-2"
                            }
                          >
                            {user.role ||
                              "Not available"}
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

      )}

    </Layout>
  );
}

export default Users;
