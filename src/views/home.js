import React from "react";
import Nav from "../component/navbar";
import gorilla from "../assets/image/gorilla1.jpg";
import nyungwe from "../assets/image/gorilla2.jpg"; 
import forest from "../assets/image/image4.jpg";
import park from "../assets/image/nyungwe3.jpg";

import './home.css'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import Footer from "../component/footer";
import HomeLayout from "../component/homelayout";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const Home = () => {
    return( 
      
        <>
         <div className="home-container">
        
         <div className="home-content">
        <h1 className="heading-title">RWANDA BOOKING TOUR</h1>
        <div className="carousel-img">
        <Carousel autoplay>
            <img src={gorilla} alt="gorilla"/>
            <img src={nyungwe} alt="nyungwe"/>
            <img src={forest} alt="forest"/>
            <img src={park} alt="park"/>

        </Carousel>
        <Search
      placeholder="search Tour"
      enterButton="Search"
      size="large"
      suffix={suffix}
    
    />
        </div>
        
       
    <h2 className="top-tour"> Top-tour</h2>
    <hr className="align"></hr>
    
    </div>
   
         </div>
      
      
    </>
    )

};
export default Home;