import React  from "react";
import { Card, Image, Space, Typography, Button } from "antd";
import allTours from "../assets/Data/Tours.json";
// import Home from "../views/home";
import { Carousel } from 'antd';


const SingleTour = ({ data }) => {
  return (
    <>
      <div>
        <h1>{data.title}</h1>
        <Carousel autoplay>
        <img src={data.pictures}></img>
        <img src={data.photo}></img>
           
            
        </Carousel>
        
        <h4>{data.description}</h4>
        <h4>{data.dueDate}</h4>
        <h4>{data.amout}</h4>
        <h4>{data.seat}</h4>
      
      <Card title="Applicant Information">
        <space direction="vertical">
          <input placeholder="Email" style={{width:"20rem"}}></input>
          <input placeholder="phone" style={{width:"20rem"}}></input>
          <Button type="primary" htmlType="submit">
            Send booking
          </Button>
        </space>
      </Card>
      </div>
    </>
  );
};
export default SingleTour;
