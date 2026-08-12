import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";
import { getToken, saveToken, removeToken } from "../utils/auth";
import api from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(getToken());
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!token && !!currentUser;

  // Check authentication when application starts
  useEffect(() => {
    const checkAuthentication = async () => {
      const storedToken = getToken();

      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await api.get("/users/me");

        setToken(storedToken);
        setCurrentUser(response.data);
      } catch (error) {
        console.error("Authentication check failed:", error);

        removeToken();
        setToken(null);
        setCurrentUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  // Login
  const login = async (email, password) => {
    const response = await loginUser(email, password);

    saveToken(response.access_token);

    setToken(response.access_token);

    const userResponse = await api.get("/users/me");

    setCurrentUser(userResponse.data);

    navigate("/dashboard");

    return response;
  };

  // Logout
  const logout = () => {
    removeToken();

    setToken(null);
    setCurrentUser(null);

    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        token,
        isAuthenticated,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}