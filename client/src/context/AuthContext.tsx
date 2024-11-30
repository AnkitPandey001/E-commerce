import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UniversalCookie from "universal-cookie";
import {AuthContextType} from '../utils/Types'

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const cookies = new UniversalCookie();

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const checkLoginStatus = () => {
    const token = cookies.get("jwt");
    setIsLoggedIn(!!token);
  };


  useEffect(() => {
    checkLoginStatus();
    const interval = setInterval(checkLoginStatus, 1000);
    return () => clearInterval(interval);
  }, []);


  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    cookies.remove("jwt");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
