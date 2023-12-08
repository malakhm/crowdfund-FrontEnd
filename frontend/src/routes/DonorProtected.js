import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext.js";
import {toast} from 'react-toastify';
import { useContext } from "react";
import DonorMenu from "../Components/Donor-menu/donor-menu";
import SideBar from '../Components/Side-bar/Side-bar.js'


const DonorProtectedRoute = () => {
    const {token,  user} = useContext(AuthContext)
    // console.log(isDonor)
    // console.log(isCreator)
  
    if(!user){toast.warning('you need to login !')}
    else{
      // Check if the user is authenticated
      if (!token || (!user.isDonor || !user.confirmedByAdmin) ) {
        if (!user.confirmedByAdmin) {toast.warning('Waiting for admin to confirm !')}
        // If not authenticated, redirect to the login page
       
        toast.warning('you need to be authorized to access!') ;
        return <Navigate to="user/login" />;
      }
    
      // If authenticated, render the child routes
      return <Outlet />;
    };}

export default DonorProtectedRoute