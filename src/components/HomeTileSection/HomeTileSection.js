import React from "react";
import { Link } from "react-router-dom";
import "./HomeTileSection.css";
const HomeTileSection = () => {
  const cardsData = [
    {
      title: "Visit a Doctor",
      btnName: "Book Now",
      bgImage:
        "https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-07.jpg",
      btnPath: "/booking",
    },
    {
      title: "Find a Pharmacy",
      btnName: "Find Now",
      bgImage:
        "https://doccure.dreamguystech.com/html/template/assets/img/img-pharmacy1.jpg",
      btnPath: "",
    },
    {
      title: "Find a Lab",
      btnName: "Coming Soon",
      bgImage:
        "https://doccure.dreamguystech.com/html/template/assets/img/lab-image.jpg",
      btnPath: "",
    },
  ];
  const auth = localStorage.getItem("LoggedIn");
  return (
    <div className="home-tile-section">
      <h2>What are you looking for?</h2>
      <div className="cardsRow">
        {cardsData.map((item, index) => {
          return (
            <div className="tile-card" key={index}>
              <img src={item.bgImage} alt="" />
              <div className="overlay"></div>
              <div className="txtBx">
                <h3>{item.title}</h3>
                <Link to={auth ? item.btnPath : "/login"} className="book-btn">
                  {item.btnName}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeTileSection;
