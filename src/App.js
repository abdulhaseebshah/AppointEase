import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomeScreen/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Splash from "./components/SplashScreen/Splash";
import Profile from "./components/ProfileScreen/Profile";
import ProtectedRoute from "./components/Services/ProtectedRoute";
import Appointment from "./components/AppointmentScreen/Appointment";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BookingScreen from "./components/BookingScreen/BookingScreen";

const App = () => {
  const [splash, setSplash] = useState(false);
  useEffect(() => {
    setSplash(true);
    setTimeout(() => {
      setSplash(false);
    }, 5000);
  }, []);
  return (
    <>
      <BrowserRouter>
        {splash ? (
          <Splash />
        ) : (
          <>
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact element={<ProtectedRoute />}>
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/appointment" element={<Appointment />} />
              </Route>
              <Route exact path="/booking" element={<BookingScreen />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
