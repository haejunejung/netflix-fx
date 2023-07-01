import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import TVProgram from "./pages/TVProgram";
import Movies from "./pages/Movies";
import WishLists from "./pages/WishLists";
import NotFound from "./pages/NotFound";

const Pages = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/tvprogram" element={<TVProgram />} />
        <Route exact path="/moives" element={<Movies />} />
        <Route exact path="/wishlists" element={<WishLists />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
