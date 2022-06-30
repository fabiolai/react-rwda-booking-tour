import React from "react";
import DashLayout from "../Dashlayout";
import { Table, Tag, Space, Drawer, Modal, notification } from "antd";
import users from "../../assets/Data/users.json";
import SingleUser from "./ViewSingleUser";
import { useState } from "react";

const UsersTable = () => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [userSelected, setUserSelected] = useState({});

  const [visibleModal, setVisibleModal] = useState(false);
 
  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "name",
      render: (text) => <a>{text.split("")}</a>,
    },
    {
      title: "Gender",
      dataIndex: "Gender",
      key: "gender",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "emai;",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "isActive",
      dataIndex: "isActive",
      key: "active;",
      render: (text) => (
        <Tag color={text ? "blue" : "red"}>{text.toString()}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Activate</a>
          <a
            onClick={() => {
              setUserSelected(record);
              setVisibleDrawer(true);
            }}
          >
            view
          </a>
          <a
            onClick={() => {
              setVisibleModal(true);
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Modal
        visible={visibleModal}
        onOk={() => {
          setVisibleModal(false);
          notification.success({ message: "Deleted" });
        }}
        onCancel={() => {
          setVisibleModal(false)
          notification.warn({ message: "canceled" });
        }}
      >
        <h4> are sure you want to Delete?{userSelected.name}</h4>
      </Modal>
      <Drawer
         visible={visibleDrawer}
        onClose={() => {
          setVisibleDrawer(false);
        }}
      >
        <SingleUser data={userSelected} />
      </Drawer>

      <Table columns={columns} dataSource={users} />
    </>
  );
};
export default UsersTable;
