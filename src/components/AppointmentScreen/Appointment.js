import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Appointment.css";
const Appointment = () => {
  const [patient, setPatient] = useState();

  const getPatientData = async () => {
    const result = await axios.get("http://localhost:3003/patient");
    setPatient(result.data);
  };

  useEffect(() => {
    getPatientData();
  }, []);

  return (
    <div className="appoint-container">
      <h1>Appointments</h1>
      <div className="content">
        {patient?.map((item, index) => {
          return (
            <div className="userDetail" key={index}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <i id="userPic" className="fa-solid fa-user"></i>
                <div className="userBx" key={index}>
                  <h3>
                    {item.fname} {item.lname}
                  </h3>
                  <p>
                    <i className="fa-regular fa-clock"></i>
                    {item.date} {item.time}
                  </p>
                  <p>
                    <i className="fa-regular fa-envelope"></i>
                    {item.email}
                  </p>
                  <p>
                    <i className="fa-solid fa-phone"></i>
                    +91 {item.phone}
                  </p>
                </div>
              </div>
              <div className="actionBx">
                <button>
                  <i className="fa-solid fa-check"></i>
                  Accept
                </button>
                <button>
                  <i className="fa-solid fa-times"></i>
                  Cancel
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Appointment;
