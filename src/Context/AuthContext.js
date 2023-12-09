import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'



export const AuthContext = createContext(null) ; 

export const AuthProvider = ({ children }) => {
    // const userFake = [{
    //                     id: 1,
    //                     first_name: 'John',
    //                     last_name: 'fake',
    //                     email: 'malak@gmail.com',
    //                     phone:'76076487',
    //                     username:'fakefake',
    //                     dob: '12 december 2023',
    //                     gender: 'male',
    //                     isDonor: true,
    //                 }]
    const [user, setUser] = useState(() => {
        // Try to get user from localStorage on initial load
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
      });
    
      useEffect(() => {
        // Save user to localStorage whenever it changes
        localStorage.setItem('user', JSON.stringify(user));
      }, [user]);
    
    const [isDonor, setIsDonor] = useState(null);
    const [isCreator, setIsCreator] = useState(null);

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

console.log('from AuthProvider: ',user)

    return (
        <AuthContext.Provider value={{ user, setUser,token, SetToken,fetchUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = ()=>{
    return useContext(AuthContext)
}