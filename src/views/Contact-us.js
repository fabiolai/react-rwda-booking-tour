import React from "react";
import {  Form, Button,Input, Card } from 'antd';
import {FacebookOutlined, TwitterOutlined, InstagramOutlined, WhatsAppOutlined, PhoneOutlined  } from "@ant-design/icons";
import './Contact.css';

const { TextArea } = Input;
const Contact = () => {
return(
    <>
    <div className="contactus-column">
    <div className="contact-head" style={{ color:"gray"}}>
    <h4>We'd love to hear from you</h4>
    <h6>Send us a message and we'll respond as soon as possible</h6>
    </div>
    <div className="contact-column">
      <Card style={{ width: "25%",background:"pink" }}>
            <h3 className="contanct-title">Phone</h3>
            <p><a href="tel:+250786131474" /><PhoneOutlined/>tel:+250-786131474</p>
            <h3 className="contanct-title">whatsApp</h3>
            <p><a href="mail to:fabykalifa" /><WhatsAppOutlined/>faby</p>
            <h3 className="contanct-title"> Instagram</h3>
            <p><a href="mail to:fabykalifa" /><InstagramOutlined />faby-i</p>
            <h3 className="contanct-title">Social-media</h3>
            <div className="icons">
                <FacebookOutlined />
                <TwitterOutlined />
                <InstagramOutlined />
                <WhatsAppOutlined/>
               
                </div>
                </Card>
        </div>
    <form style={{width:"50%", padding:""}}>
     <Form.Item 
    
     name="email"
     rules={[{ required: true, message: 'Please input your username!' }]}
   >
     <Input placeholder="Name" />
    
   </Form.Item>
   <Form.Item 
    
     name="username"
     rules={[{ required: true, message: 'Please input your username!' }]}
   >
     <Input placeholder="Email" />
   </Form.Item>
   <Form.Item >
        <TextArea rows={4} placeholder=" Send Message"/>
      </Form.Item>
      <Button type="primary" htmlType="submit">
            Send Message
          </Button>
   </form>
   
   </div>


   </>
)
};

export default Contact;