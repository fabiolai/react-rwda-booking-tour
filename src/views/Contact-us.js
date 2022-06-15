import React from "react";
import {  Form, Button,Input } from 'antd';
import {FacebookOutlined, TwitterOutlined, InstagramOutlined, WhatsAppOutlined, PhoneOutlined  } from "@ant-design/icons";
import './Contact.css';

const { TextArea } = Input;
const Contact = () => {
return(
    <>
    <div className="contactus-column">
    <div className="contact-head">
    <h2>GET IN TOUCH</h2>
    <h3>I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.</h3>
    </div>
    <div className="contact-column">
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
        </div>
    <form style={{width:"50%", padding:""}}>
     <Form.Item 
    
     name="email"
     rules={[{ required: true, message: 'Please input your username!' }]}
   >
     <Input placeholder="your name" />
    
   </Form.Item>
   <Form.Item 
    
     name="username"
     rules={[{ required: true, message: 'Please input your username!' }]}
   >
     <Input placeholder="your email" />
   </Form.Item>
   <Form.Item >
        <TextArea rows={4} placeholder="your message"/>
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