import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Navbar from "./Navbar";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  let authBtn = "";

  if (JSON.parse(localStorage.getItem("LoggedIn") !== null)) {
    authBtn = (
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
    );
  } else {
    authBtn = (
      <Link to="/login" className="btn">
        Login
      </Link>
    );
  }
  return (
    <header>
      <Link to="/">
        <h1>AppointEase</h1>
      </Link>
      <Navbar />
      <div>{authBtn}</div>
    </header>
  );
};

export default Header;
