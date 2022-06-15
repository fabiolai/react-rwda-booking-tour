import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../views/home";
import About from "../views/about";
import HomeLayout from "../component/homelayout";
import Tours from "../views/Tours";
import Contact from "../views/Contact-us"; 


    const Index = () =>{
        return (
            <HomeLayout>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/about" element={<About/>}></Route>
                <Route exact path="/Tours" element={<Tours/>}></Route>
                <Route exact path="/Contact-us" element={<Contact/>}></Route>
                
            </Routes>
            </HomeLayout>
        );
    }
    export default Index;
