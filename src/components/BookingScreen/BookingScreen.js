import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingScreen.css";
const BookingScreen = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    gender: "",
  });
  const sumbitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/patient", user);
    navigate("/appointment");
  };
  return (
    <div className="book-container">
      <div className="title">
        <h1>Book Your Appointment</h1>
      </div>
      <div className="book-form-container">
        <form action="" onSubmit={sumbitHandler}>
          <h3>Personal Information</h3>
          <div className="col">
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              value={user.fname}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              value={user.lname}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="col">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              value={user.phone}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="col">
            <input
              type="date"
              name="date"
              value={user.date}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
            <input
              type="time"
              name="time"
              value={user.time}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="col">
            <select
              className="select"
              name="gender"
              value={user.gender}
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            >
              <option defaultValue={"DEFAULT"} disabled>
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <button className="submit-btn">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookingScreen;
