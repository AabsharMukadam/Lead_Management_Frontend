import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <Layout>
        <div className="text-center py-5">
          Checking authentication...
        </div>
      </Layout>
    );
  }

  const userName =
    currentUser?.full_name ||
    currentUser?.name ||
    "Not available";

  const userEmail =
    currentUser?.email ||
    "Not available";

  const userPhone =
    currentUser?.phone ||
    currentUser?.phone_number ||
    "Not available";

  const userRole =
    currentUser?.role ||
    "Not available";

  const userStatus =
    currentUser?.status ||
    currentUser?.account_status ||
    "Active";

  const initials =
    userName !== "Not available"
      ? userName.charAt(0).toUpperCase()
      : userEmail !== "Not available"
        ? userEmail.charAt(0).toUpperCase()
        : "U";

  return (
    <Layout>
      {/* Page Header */}

      <div className="mb-4">
        <h2 className="fw-bold mb-1">
          Profile
        </h2>

        <p className="text-muted mb-0">
          View your account information
        </p>
      </div>

      {/* Profile Card */}

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">

          {/* Profile Header */}

          <div className="d-flex align-items-center mb-4">

            <div
              className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-3"
              style={{
                width: "70px",
                height: "70px",
                fontSize: "28px",
                fontWeight: "600",
              }}
            >
              {initials}
            </div>

            <div>
              <h4 className="fw-bold mb-1">
                {userName}
              </h4>

              <span className="badge bg-primary-subtle text-primary px-3 py-2">
                {userRole}
              </span>
            </div>

          </div>

          <hr />

          {/* Account Information */}

          <h5 className="fw-bold mb-4">
            Account Information
          </h5>

          <div className="row g-4">

            {/* Name */}

            <div className="col-md-6">
              <div className="p-3 bg-light rounded">
                <small className="text-muted d-block mb-1">
                  Full Name
                </small>

                <span className="fw-semibold">
                  {userName}
                </span>
              </div>
            </div>

            {/* Email */}

            <div className="col-md-6">
              <div className="p-3 bg-light rounded">
                <small className="text-muted d-block mb-1">
                  Email Address
                </small>

                <span className="fw-semibold">
                  {userEmail}
                </span>
              </div>
            </div>

            {/* Phone */}

            <div className="col-md-6">
              <div className="p-3 bg-light rounded">
                <small className="text-muted d-block mb-1">
                  Phone Number
                </small>

                <span className="fw-semibold">
                  {userPhone}
                </span>
              </div>
            </div>

            {/* Role */}

            <div className="col-md-6">
              <div className="p-3 bg-light rounded">
                <small className="text-muted d-block mb-1">
                  Account Role
                </small>

                <span className="fw-semibold text-capitalize">
                  {userRole}
                </span>
              </div>
            </div>

            {/* Status */}

            <div className="col-md-6">
              <div className="p-3 bg-light rounded">
                <small className="text-muted d-block mb-1">
                  Account Status
                </small>

                <span className="badge bg-success">
                  {userStatus}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Profile;