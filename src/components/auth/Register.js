import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.name === "" || input.email === "" || input.password === "") {
      // document.getElementById("error").innerHTML = "*Fill all required fields";
      toast.error("Fill all required fields!");
    } else {
      localStorage.setItem("user", JSON.stringify(input));
      navigate("/login");
    }
  };

  return (
    <>
      <div className="form-container">
        <ToastContainer position="top-center" autoClose={3000} />
        <img
          src="https://doccure.dreamguystech.com/html/template/assets/img/login-banner.png"
          alt=""
        />
        <form action="" onSubmit={handleSubmit}>
          <div className="login-header">
            <h2>Patient Register</h2>
          </div>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
            placeholder="Name"
          />
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
          <span id="error"></span>
          <p>
            <Link to="/login">Already have an accout? </Link>
          </p>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
