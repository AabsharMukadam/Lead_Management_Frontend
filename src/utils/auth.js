export const saveToken = (token) => {
  localStorage.setItem("token", token);

  try {
    const payload = JSON.parse(
      atob(token.split(".")[1])
    );

    const user = {
      email: payload.sub,
      role: payload.role,
    };

    localStorage.setItem("user", JSON.stringify(user));

    console.log("User saved:", user);
  } catch (error) {
    console.error("Failed to decode token:", error);
  }
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const isAuthenticated = () => {
  return !!getToken();
};
