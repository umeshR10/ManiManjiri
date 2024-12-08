import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import SignUp from "./components/SignUp/signup";
import Login from "./components/Login/login";
import Frontpage from"./components/Frontpage/front";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path ="/frontpage" element={< Frontpage/>}/>
      
    </Routes>
  );
};

export default App;
