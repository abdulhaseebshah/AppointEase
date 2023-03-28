import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Navbar = () => {
  const navData = [
    { title: "Home", url: "/", exact: true },
    { title: "Appointment", url: "/appointment", exact: true },
    { title: "Profile", url: "/profile", exact: true },
  ];
  return (
    <ul className="navLinks">
      {navData.map((item, i) => {
        return (
          <li key={i}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={item.url}
            >
              {item.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
