import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../views/home";
import About from "../views/about";
import login from "../component/login"
import HomeLayout from "../component/homelayout";
import Tours from "../views/Tours";
import Contact from "../views/Contact-us"; 
import AllTours from "../views/Dashboard/All-tour";
import Createtours from "../views/Dashboard/Create-Tours";
import DashboardLayout from "../component/dashboard";





    const Index = () =>{
        return (
            <>
             
            
            <HomeLayout>
            
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/about" element={<About/>}></Route>
                <Route exact path="/Tours" element={<Tours/>}></Route>
                <Route exact path="/Contact-us" element={<Contact/>}></Route>
                <Route exact path="/login" element={<login/>}></Route>
                
            </Routes>
           
            </HomeLayout>
            <DashboardLayout>
                <Routes>
                <Route exact path="/admin/All-tour" element={<AllTours/>}></Route>
                <Route exact path="/admin/Create-Tours" element={<Createtours/>}></Route>
               
                </Routes>

            </DashboardLayout>
           
            </>
        );
    }
    export default Index;
