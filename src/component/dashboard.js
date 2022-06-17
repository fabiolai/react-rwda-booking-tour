import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu, Typography } from 'antd';
  import React, {  useState } from 'react';
  import { Link } from 'react-router-dom';
  

  
  const { Header, Sider, Content } = Layout;
  
  const Dashboard = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          {/* <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
               
                label: 'All-tour',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Create-Tours',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3',
              },
            ]}
          /> */}
          <Link to="/admin/All-tour">AllTours</Link><br></br>
          <Link to="/admin/All-tour">Createtours</Link>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
          
            className="site-layout-background"
            style={{
                
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              
            }}
            
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default Dashboard;