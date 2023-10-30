import "../../../main.css";
import styles from "./Login.module.css";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

function LoginPage() {
  const { users, setLoggedUser } = useContext(AuthContext);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onLoginBtn() {
    const shouldLoginUser = {
      login: login,
      password: password,
    };
    users
      ? users.forEach((user) => {
          if (
            user.login === shouldLoginUser.login &&
            user.password === shouldLoginUser.password
          ) {
            setLoggedUser(user);
            navigate("/");
          } else {
            console.log("такого нет");
          }
        })
      : console.log("такого нет2");
  }

  return (
    <>
      <Link to="/">
        <button className="backBtn">&#10150;</button>
      </Link>
      <div className="container">
        <div className={styles.login_container}>
          <div className={styles.login_form}>
            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="login"
            />{" "}
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <button onClick={onLoginBtn}>login</button>{" "}
            <Link to="/registration" className={styles.reg_link}>
              create account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
