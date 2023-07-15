import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const Pages = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
