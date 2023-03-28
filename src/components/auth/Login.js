import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (input.email === "" || input.password === "") {
      toast.error("Fill all required fields!");
      return;
    }
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("LoggedIn", true);
      // alert("Thank You For Login");
      navigate("/");
      return;
    } else {
      alert("Enter valid Email");
    }
    // localStorage.setItem("user", JSON.stringify(input));
  };
  return (
    <>
      <div className="form-container">
        <ToastContainer position="top-center" autoClose={3000} />
        <img
          src="https://doccure.dreamguystech.com/html/template/assets/img/login-banner.png"
          alt=""
        />
        <form action="" onSubmit={handleLogin}>
          <div className="login-header">
            <h2>Login Doccure</h2>
          </div>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            placeholder="Password"
          />
          <p>
            <Link to="/register">Don’t have an account?</Link>
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
