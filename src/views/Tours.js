import React, { useState } from "react";
import { Card, Image, Space, Typography, Button, Drawer } from "antd";
import SingleTour from "../component/Single-tour";


import allTours from "../assets/Data/Tours.json";
const { Text, Title } = Typography;
const Tours = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedTour, setSelectedTour] = useState();
  return (
    <>
      <div style={{ width: "100%", height: "auto", padding: "10px" }}>
        <Card style={{ width: "100%" }}>
          {allTours.map((tour) => (
            <Card.Grid style={{ width: "32%", minHeight: "30rem" }}>
              <Space direction="vertical">
                <Image preview={true} src={tour.photo} />
                <Title level={4} style={{ color: "#1976D1" }}>
                  {tour.title.toUpperCase()}
                </Title>
                <Text type="secondary" italic>
                  {tour.description}
                </Text>
                <Space>
                  <Text> Due Date</Text>
                  <Text strong> {tour.dueDate}</Text>
                </Space>
              </Space>
              <Button
                onClick={() => {
                  setSelectedTour(tour);
                  setShowDrawer(true);
                }}
              >
                Book Now
              </Button>
            </Card.Grid>
          ))}
        </Card>
      </div>

      <Drawer
        title="Single Tour"
        placement="right"
        onClose={() => {
          setShowDrawer(false);
        }}
        visible={showDrawer}
      >
        <SingleTour data={selectedTour} />
      </Drawer>
    </>
  );
};
export default Tours;
