import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Restore user on page load
  useEffect(() => {
    const localUser = localStorage.getItem("user");
    const sessionUser = sessionStorage.getItem("user");

    if (localUser) {
      setUser(JSON.parse(localUser));
    } else if (sessionUser) {
      setUser(JSON.parse(sessionUser));
    }

    setLoading(false);
  }, []);

  // 🔹 Login logic with Remember Me
  const login = (userData, remember) => {
    setUser(userData);

    if (remember) {
      localStorage.setItem("user", JSON.stringify(userData));
      sessionStorage.removeItem("user");
    } else {
      sessionStorage.setItem("user", JSON.stringify(userData));
      localStorage.removeItem("user");
    }
  };

  // 🔹 Logout clears everything
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
