import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import SignUp from "./components/SignUp/signup";
import Login from "./components/Login/login";
import Authent from "./components/LandingPage/authent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/header" element={<Header />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/authent" element={<Authent />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
