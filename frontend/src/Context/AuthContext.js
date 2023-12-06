import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, SetToken] = useState(localStorage.getItem('token'));

    

    const fetchUserData = async () => {
        try {
            if (token) {
                const response = await axios.get('/api/users/');
                setUser(response.data);
                axios.defaults.headers.common["Authorization"] = "Bearer " + token;
               
                
        }}
        catch(err) {
          
            setUser(null);
        }
       
    };



    const logout = async () => {
        // await axios.post('/api/auth/logout');
        localStorage.clear();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user,setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};