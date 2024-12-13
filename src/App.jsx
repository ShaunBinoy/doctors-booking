import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import About from "./pages/About";
import MyAppoinments from "./pages/MyAppoinments";
import MyProfile from "./pages/MyProfile";
import Login from "./pages/Login";
import Appoinment from "./pages/Appoinment";
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
        <Route path="my-appoinments" element={<MyAppoinments />} />
        <Route path="my-appoinments/:docId" element={<Appoinment />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
