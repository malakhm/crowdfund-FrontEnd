import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext.js";
import {toast} from 'react-toastify';
import { useContext } from "react";

const ProtectedRoute = () => {
  const {token} = useContext(AuthContext)
  
    // Check if the user is authenticated
    if (!token) {
      // If not authenticated, redirect to the login page
      toast.warning('you need to be authorized to access!') ;
      return <Navigate to="user/login" />;
    }
  
    // If authenticated, render the child routes
    return <Outlet />;
  };


  

export default ProtectedRoute 
