import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, SetToken] = useState(localStorage.getItem("token"));

  console.log("from AuthProvider: ", token);

  const fetchUserData = async () => {
    try {
      if (token) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      }
    } catch (err) {
      setUser(null);
    }
  };

  console.log("from AuthProvider: ", user);

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, SetToken, fetchUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
