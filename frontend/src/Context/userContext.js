import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const UserContext = createContext();

export const Provider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(true);

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        await axios.get("http://localhost:8100/api/users/")
        .then((response)=>{setUsers(response.data.data)})
      } catch (error) {
        console.log(error);
      } finally {
        setUsersLoading(false);
      }
    };
      fetchUsers();

  }, []);
// console.log(users)
  return (
    <UserContext.Provider value={{users, usersLoading}}>
      {children}
    </UserContext.Provider>
  );
};
//error on refresh maybe from useeffect dependancy
