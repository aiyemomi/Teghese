import { createContext, useEffect, useState } from "react";
import { login, logout } from "../services/api/auth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  // JSON.parse(localStorage.getItem("user") || null)

  const userLogin = async (values) => {
    const res = await login(values);
    setCurrentUser(res.data);
    return res;
  };
  const userLogout = async () => {
    const res = await logout();
    setCurrentUser(null);
    localStorage.removeItem("user");
    return res;
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);
  const contextValue = {
    currentUser,
    userLogin,
    userLogout,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthContextProvider;
