import Layout from "../components/Layout";

function Profile() {
  const userData = localStorage.getItem("user");

  let user = null;

  try {
    user = userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Invalid user data in localStorage");
    localStorage.removeItem("user");
  }

  const userEmail = user?.email || "Not available";
  const userRole = user?.role || "Not available";

  const initials =
    userEmail !== "Not available"
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
                {userEmail}
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

          </div>

        </div>

      </div>

    </Layout>
  );
}

export default Profile;
