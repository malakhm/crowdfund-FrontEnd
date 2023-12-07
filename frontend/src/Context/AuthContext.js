import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
   
    // useEffect(() => {
    //     if(!user && user === null){
    //     fetchUserData();
    //     }
    //    else{
    //     console.log("loggedin")
    //    }
    // },[user]);

    const fetchUserData = async () => {
        try {
            
            const response = await axios.get('/api/auth/user');
            setUser(response.data.user);
        } catch(err) {
          
            setUser(null);
        }
        finally{
            setCheckUser(false)
        }
    };



    const logout = async () => {
        await axiosInstance.post('/api/auth/logout');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user,setUser,checkUser,fetchUserData, logout }}>
            {children}
        </AuthContext.Provider>
    );
};