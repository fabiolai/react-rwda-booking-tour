import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/home";
import About from "../views/about";
import Login from "../component/login";
import HomeLayout from "../component/homelayout";
import Tours from "../views/Tours";
import Contact from "../views/Contact-us";

import ManagerUsers from "../component/Admin/Userstable";
import ManagingTrips from "../views/admin/ManagingTrips";

const Index = () => {
  return (
    <>
      <HomeLayout>
        
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/Tours" element={<Tours />}></Route>
          <Route exact path="/Contact-us" element={<Contact />}></Route>
          <Route exact path="/login" element={<Login />}></Route>

         
          <Route exact path="/users" element={<ManagerUsers />}></Route>
          <Route exact path="/trips" element={<ManagingTrips />}></Route>

        </Routes>
      </HomeLayout>
    </>
  );
};
export default Index;
