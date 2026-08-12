import { useAuth } from "../context/AuthContext";

function Header() {
  const { currentUser, logout } = useAuth();

  const userName =
    currentUser?.full_name ||
    currentUser?.name ||
    currentUser?.email ||
    "User";

  const userEmail = currentUser?.email || "";

  return (
    <header className="bg-white border-bottom shadow-sm">
      <div className="container-fluid px-4 py-3">

        <div className="d-flex justify-content-between align-items-center">

          {/* Application Name */}
          <div>
            <h4 className="mb-0 fw-bold">
              Lead Management System
            </h4>

            <small className="text-muted">
              CRM Dashboard
            </small>
          </div>

          {/* User Section */}
          <div className="d-flex align-items-center gap-3">

            {/* Profile Icon */}
            <div
              className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
              style={{
                width: "42px",
                height: "42px",
              }}
            >
              {userName.charAt(0).toUpperCase()}
            </div>

            {/* User Information */}
            <div className="text-end">
              <div className="fw-semibold">
                {userName}
              </div>

              <small className="text-muted">
                {userEmail}
              </small>
            </div>

            {/* Logout */}
            <button
              className="btn btn-outline-danger btn-sm px-3"
              onClick={logout}
            >
              Logout
            </button>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;