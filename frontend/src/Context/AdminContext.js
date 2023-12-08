import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'



export const AdminContext = createContext(null) ; 

export const AdminAuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    const [token, SetToken] = useState(localStorage.getItem('token'));

    console.log('from AuthProvider: ', token)

    const fetchUserData = async () => {
        try {
            if (token) {
                axios.defaults.headers.common["Authorization"] = "Bearer " + token;
               
                
        }}
        catch(err) {
          
            console.error(err)
        }
       
    };

console.log('from AuthProvider: ',admin)

    return (
        <AdminContext.Provider value={{ admin, setAdmin,token, SetToken,fetchUserData }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAuth = ()=>{
    return useContext(AdminContext)
}