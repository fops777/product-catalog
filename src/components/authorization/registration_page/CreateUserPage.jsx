import "../../../main.css";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import styles from "./CreateUserPage.module.css";

function CreateUserPage() {
  const { users, setUsers } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function createUser() {
    const newUser = {
      name: name,
      login: login,
      password: password,
    };

    setUsers(users ? [...users, newUser] : [newUser]);

    setName("");
    setLogin("");
    setPassword("");
  }
  console.log(users);

  return (
    <>
      <Link to="/login">
        <button className="backBtn">&#10150;</button>
      </Link>
      <div className="container">
        <div className={styles.login_container}>
          <div className={styles.registration_form}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />{" "}
            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="login"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <Link to="/" onClick={createUser} className={styles.reg_link}>
              register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUserPage;
