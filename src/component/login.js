import React from "react";
import {  Form, Button,Input, Card } from 'antd';
import {FacebookOutlined, TwitterOutlined, InstagramOutlined, WhatsAppOutlined, PhoneOutlined  } from "@ant-design/icons";

const login=()=>{
    return(
        <Card style={{ width: "30%"}}>
        <form style={{width:"50%"}}>
         <Form.Item 
        
         name="email"
         rules={[{ required: true, message: 'Please input your username!' }]}
       >
         <Input placeholder="Name" />
        
       </Form.Item>
       <Form.Item
        name="password"
         rules={[
           {
             required: true,
            message: 'Please input your Password!',
          },
         ]}
       ></Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
           login
         </Button>
         i don't have an account <a href="">SignUp</a>
       </Form.Item>
       
       </form>
       </Card>

    );
}
export default login;