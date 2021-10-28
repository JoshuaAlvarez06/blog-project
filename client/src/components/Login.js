import React, { useState } from "react";
import "./Login.css";
import LoginButton from "./LoginButton";

const Login = () => {
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
    });

    const changeHandler = ({target}) => {
        setLoginFormData({
            ...loginFormData,
            [target.name]: target.value,
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Submit")
        setLoginFormData({
            email: '',
            password: '',         
        })
    }

  return (
    <div className="loginSection">
      <div className="loginContainer">
        <form className="loginForm" onSubmit={submitHandler}>
          <h1>Log In</h1>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={loginFormData.email}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={loginFormData.password}
              onChange={changeHandler}
              required
            />
          </div>
          <LoginButton />
        </form>
      </div>
    </div>
  );
};

export default Login;
