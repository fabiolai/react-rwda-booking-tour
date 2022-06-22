import React from "react";
import logo from "../assets/image/logo1.png"
import "./navbar.css";
import { Button, Modal,Form, Input, Checkbox } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Nav=()=>{
    const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };
    return(
        <>
        <div className="nav">
        <img src={logo} alt="rwanda-booking-tour" className="logo-img"/>
        <div className="navigation-links">
            <ul className="nav-links">
                <li><a href="/ " className="nav-link">HOME</a></li>
                <li><a href="/about" className="nav-link">ABOUT-US</a></li>
                <li><a href="Contact-us " className="nav-link">CONTACT-US </a></li>
                {/* <li><a href=" " className="nav-link link-green">SIGN-UP </a></li> */}
                <li><a href=" /Tours" className="nav-link btn-link">TOURS </a></li>
                <li><a href="/Login" className="nav-link btn-link">login</a></li>



                <Button type="primary" onClick={showModal} style={{color:"white"}}>
        SignUp
      </Button>
      <Modal
        title="Sign Up"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          disabled: true,
        }}
        cancelButtonProps={{
          disabled: true,
        }}
      >
        <p><Form.Item
       name="First-Name"
         rules={[
           {
             required: true,
            message: 'Please input your Username!',
          },
         ]}
       >
         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Firstname" />
      </Form.Item></p>
        <p><Form.Item
         name="Last-Name"
         rules={[
           {
             required: true,
             message: 'Please input your Username!',
           },
        ]}
       >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Lastname" />
       </Form.Item></p>
        <p> <Form.Item
         name="Phone"
         rules={[
           {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Phone" />
       </Form.Item></p>
       <p><Form.Item
        name="Email-adress"
        rules={[
          {
            required: true,
             message: 'Please input your Username!',
           },
         ]}
       >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email-Adress" />
       </Form.Item></p>
       <p> <Form.Item
        name="password"
         rules={[
           {
             required: true,
            message: 'Please input your Password!',
          },
         ]}
       >
         <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
           placeholder="Password"
         />
      </Form.Item></p>
      <p><Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
           <Checkbox>I have read and accept the <a>Terms and Privacy Policy</a></Checkbox>
         </Form.Item>
       </Form.Item>

      <Form.Item style={{color:"rgb(79, 152, 219"}}>
        <Button type="primary" htmlType="submit" className="login-form-button"style={{color:"white", width:"100%"}} >
           SignUp
         </Button><br></br>
         Already have an account? <a href="login.jx">login</a>
       </Form.Item></p>
      </Modal>
            </ul>

        </div>
        
            </div>
        </>
    )
}
export default Nav;