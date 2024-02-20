import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const AlredySigninRoute = ({ children }) => {
  const { token } = useAuth();
  return <>{!token ? children : <Navigate to="/" />}</>;
};

export default AlredySigninRoute;
