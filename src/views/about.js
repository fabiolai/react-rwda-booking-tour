import React from "react";
import {Card, Image, Space, Typography } from "antd";
import park from "../assets/image/akagera p3.jpg";
import pic from "../assets/image/kivu1.webp";
const { Title, Text } = Typography;
const About = () => {
  return (
    <>
      <Card style={{height: "auto",width: "100%" ,justifyContent: "space-between"}}>
        <Space direction="horizontal">
          <Image src={park}style={{ height: "30rem", width: "70rem", alignItems: "center" }}/>
          <div>
            <Title style={{ color: "blue", textAlign: "center", fontSize:"15px" }}>
              KNOW MORE ABOUT US
            </Title>
            <Text style={{ textAlign: "center" }}>
              <span style={{ color: "green", fontSize: "30px" }}>
                Rwanda Cultural Tours and Primates Safari Experiences
              </span>
              <br /> Ikaze Rwanda Tours and Travel Services Ltd is a tour
              operating company with in-depth knowledge of Rwanda destinations
              offering Rwanda cultural tours and safari packages in Rwanda,
              Uganda, Kenya, Tanzania, and DR Congo. Explore the undiscovered
              ever-changing views of the scenic African savannah plains with
              exceptional activities of mountain gorilla trekking, golden monkey
              tracking, wildlife expeditions, wildebeest migration safaris,
              Rwanda cultural tours, and beautiful scenery landscape,
              picturesque villages, breathtaking volcanoes and countless boat
              trips on your safari holiday!
            </Text>
          </div>
        </Space>
      </Card>
      <Card style={{height: "auto",width: "100%" ,justifyContent: "space-between"}}>
        <Space direction="horizontal">
          <Image src={pic}style={{ height: "30rem", width: "70rem", alignItems: "center" }}/>
          <div>
           
            <Text style={{ textAlign: "center", fontSize:"15px" }}>
              <span style={{ color: "green", fontSize: "30px" }}>
              Rwanda Booking Tours
              </span>
              <br />Plan Your trip to Rwanda today for a chance to explore the Land of
          Thousand Hills dubbed as one of the most attractive safari
          destinations in Africa. Book a Tour holiday to Rwanda to experience a
          number of adventurous activities including the most sought after
          gorilla trekking tours, chimpanzee tracking, golden monkey tracking,
          wildlife viewing, Kigali the cleanest African City, Visit and tour the
          genocide memorial sites, have a cultural experience with the local
          people and enjoy a taste of African local dishes.
            </Text>
          </div>
        </Space>
      </Card>
      {/* <Title><h2 style={{textAlign:"center"}}>Rwanda Booking Tours</h2></Title>
      <Card style={{ background: "transparent", ShadowColor: "black",width:"40%",height:"auto", 
    textAlign: "center", backgroundColor:"red",opacity:"0.5",
    justifyContent: "center", marginLeft:"45rem",
    alignContent: "center",
    padding: "30px"
    }}>
        <Text style={{color:"white"}}>
          Plan Your trip to Rwanda today for a chance to explore the Land of
          Thousand Hills dubbed as one of the most attractive safari
          destinations in Africa. Book a Tour holiday to Rwanda to experience a
          number of adventurous activities including the most sought after
          gorilla trekking tours, chimpanzee tracking, golden monkey tracking,
          wildlife viewing, Kigali the cleanest African City, Visit and tour the
          genocide memorial sites, have a cultural experience with the local
          people and enjoy a taste of African local dishes.
        </Text>
      </Card> */}

      
    </>
  );
};
export default About;