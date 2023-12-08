import { Navigate, Outlet } from "react-router-dom";
import { AdminContext } from "../Context/AdminContext.js";
import {toast} from 'react-toastify';
import { useContext } from "react";

const ProtectedRoute = () => {
  const {token, admin} = useContext(AdminContext)
    // Check if the user is authenticated
    if (!token || !admin) {
      // If not authenticated, redirect to the login page
      toast.warning('you need to be authorized to access!') ;
      return <Navigate to="admin/login" />;
    }
  
    // If authenticated, render the child routes
    return <Outlet />;
  };


  

export default ProtectedRoute 
