// import React from 'react';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { Button, Checkbox, Form, Input, Card } from 'antd';

// const SignUp = () => {
//   const onFinish = (values) => {
//     console.log('Received values of form: ', values);
//   };

//   return (
//     <Card style={{width:"40%"}}>
//     <Form
//       name="normal_login"
//       className="login-form"
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//     >
//       <Form.Item
//         name="First-Name"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Username!',
//           },
//         ]}
//       >
//         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Firstname" />
//       </Form.Item>
//       <Form.Item
//         name="Last-Name"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Username!',
//           },
//         ]}
//       >
//         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Lastname" />
//       </Form.Item>
//       <Form.Item
//         name="Phone"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Username!',
//           },
//         ]}
//       >
//         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Phone" />
//       </Form.Item>
//       <Form.Item
//         name="Email-adress"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Username!',
//           },
//         ]}
//       >
//         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email-Adress" />
//       </Form.Item>
//       <Form.Item
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Password!',
//           },
//         ]}
//       >
//         <Input
//           prefix={<LockOutlined className="site-form-item-icon" />}
//           type="password"
//           placeholder="Password"
//         />
//       </Form.Item>
//       <Form.Item>
//         <Form.Item name="remember" valuePropName="checked" noStyle>
//           <Checkbox>I have read and accept the <a>Terms and Privacy Policy</a></Checkbox>
//         </Form.Item>
//       </Form.Item>

//       <Form.Item>
//         <Button type="primary" htmlType="submit" className="login-form-button">
//           SignUp
//         </Button>
//         Already have an account? <a href="">login</a>
//       </Form.Item>
//     </Form>
//     </Card>
//   );
// };

// export default SignUp;


import React from 'react';
import 'antd/dist/antd.css';

import { Button, Modal,Form, Input, Checkbox } from 'antd';
import { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const SignUp = () => {
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

  return (
    <>
      <Button type="primary" onClick={showModal}>
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

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
           SignUp
         </Button>
         Already have an account? <a href="">login</a>
       </Form.Item></p>
      </Modal>
    </>
  );
};

export default SignUp;
