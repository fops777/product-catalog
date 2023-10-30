import React, { useState, useEffect, createContext } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState();
  const [users, setUsers] = useState();

  // LOGGEDUSER STORAGING
  loggedUser && localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
  const dataFromLocal = JSON.parse(localStorage.getItem("loggedUser"));
  useEffect(() => {
    if (dataFromLocal) {
      setLoggedUser(dataFromLocal);
    } else {
      setLoggedUser(null);
    }
  }, []);
  // console.log("loggedUser: ", loggedUser);
  // console.log("dataFromLocal: ", dataFromLocal);

  // ALL USERS LOCALSTORAGING
  let usersFromLocal = JSON.parse(localStorage.getItem("users"));
  users && localStorage.setItem("users", JSON.stringify(users));
  useEffect(() => {
    if (!usersFromLocal) {
      setUsers(users);
    } else {
      setUsers(usersFromLocal);
    }
  }, []);

  // console.log("dataFromStorage", usersFromLocal);
  // console.log("All users: ", users);
  return (
    <AuthContext.Provider
      value={{ users, setUsers, loggedUser, setLoggedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
