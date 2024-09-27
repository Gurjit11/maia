"use client";
// contexts/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";

// Create AuthContext
const AuthContext = createContext();

// Create a custom hook for accessing the context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [loginToken, setLoginToken] = useState(null);
  const[city,setCity]=useState(null);

  // On mount, try to retrieve the token from local storage
  useEffect(() => {
    const token = localStorage.getItem("loginToken");
    const city=localStorage.getItem("city");
    if (token) {
      setLoginToken(token);
    }
    if(city){
      setCity(city);
    }
  }, []);
  

  // Function to save the token locally and in the context
  const saveToken = (token) => {
    localStorage.setItem("loginToken", token);
    setLoginToken(token);
  };
  const saveCity=(city)=>{
    localStorage.setItem("city",city);
    setCity(city);
  }

  return (
    <AuthContext.Provider value={{ loginToken, saveToken }}>
      {children}
    </AuthContext.Provider>
  );
};
