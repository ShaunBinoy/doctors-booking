import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import About from "./pages/About";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Login from "./pages/Login";
import Appointment from "./pages/Appointment";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
