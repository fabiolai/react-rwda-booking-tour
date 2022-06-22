import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/home";
import About from "../views/about";
import Login from "../component/login";
import HomeLayout from "../component/homelayout";
import Tours from "../views/Tours";
import Contact from "../views/Contact-us";
import Admin from "./admin";
import ManagerUsers from "../component/Admin/ManagerUsers";

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

          <Route exact path="/All-tour" element={<Admin />}></Route>
          <Route exact path="/Create-Tours" element={<Admin />}></Route>
          <Route exact path="/users" element={<ManagerUsers />}></Route>
        </Routes>
      </HomeLayout>
    </>
  );
};
export default Index;
