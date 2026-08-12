import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const { currentUser } = useAuth();

  const navLinkClass = ({ isActive }) =>
    `nav-link rounded px-3 py-2 mb-2 ${
      isActive
        ? "bg-primary text-white"
        : "text-dark"
    }`;

  const isAdmin = currentUser?.role === "admin";

  return (
    <aside
      className="bg-white border-end p-3"
      style={{
        width: "250px",
        minHeight: "calc(100vh - 56px)",
      }}
    >
      <div className="mb-4">
        <h6 className="text-uppercase text-muted fw-bold mb-0">
          Menu
        </h6>
      </div>

      <nav className="nav flex-column">

        <NavLink
          to="/dashboard"
          className={navLinkClass}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/leads"
          className={navLinkClass}
        >
          Leads
        </NavLink>

        <NavLink
          to="/create-lead"
          className={navLinkClass}
        >
          Create Lead
        </NavLink>

        {isAdmin && (
          <NavLink
            to="/users"
            className={navLinkClass}
          >
            Users
          </NavLink>
        )}

        <NavLink
          to="/profile"
          className={navLinkClass}
        >
          Profile
        </NavLink>

      </nav>
    </aside>
  );
}

export default Sidebar;