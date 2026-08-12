import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Leads from "./pages/Leads";
import CreateLead from "./pages/CreateLead";
import EditLead from "./pages/EditLead";
import Users from "./pages/Users";
import Profile from "./pages/Profile";

function App() {
  return (
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/leads"
          element={
            <ProtectedRoute>
              <Leads />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-lead"
          element={
            <ProtectedRoute>
              <CreateLead />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-lead/:id"
          element={
            <ProtectedRoute>
              <EditLead />
            </ProtectedRoute>
          }
        />
      </Routes>
  );
}

export default App;