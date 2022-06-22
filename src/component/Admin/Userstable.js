import React from "react";
import DashLayout from "../Dashlayout";
import { Table, Tag, Space } from "antd";
import users from "../../assets/Data/users.json";
import ManagerUsers from "../../views/admin/Manageruser";

const columns =[
    {
        title: 'Name',
        dataIndex: 'Name',
        key: 'name',
        render: (text) => <a>{text.split("")}</a>,
      },
      {
        title: 'Gender',
        dataIndex: 'Gender',
        key: 'gender',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Email',
        dataIndex: 'Email',
        key: 'emai;',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'isActive',
        dataIndex: 'isActive',
        key: 'active;',
        render: (text) => <Tag color={text?"blue":"red"}>{text.toString()}</Tag>,
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a>Activate</a>
            <a>view</a>
            <a>Delete</a>
          </Space>
        ),
      },
]

const UsersTable =()=>{

    return (
        <Table columns={columns} dataSource={users} />
    )
};
export default UsersTable;