import React from "react";
import DashLayout from "../../component/Dashlayout";
import { Form, Input,Select, TreeSelect, Cascader, Card, Button, DatePicker} from 'antd';



const { RangePicker } = DatePicker;
const ManagerTrips =()=>{

    return (
        <DashLayout>
            <Card style={{width:"70%" }}>
                <Form>
       <Form.Item label="Trips Name">
        <Input  />
      </Form.Item>
      <Form.Item label="TRIPS">
        <Select>
          <Select.Option value="demo">Akagera</Select.Option>
          <Select.Option value="demo">Nyungwe</Select.Option>
          <Select.Option value="demo">Gishwati</Select.Option>
          <Select.Option value="demo">Kivu lake</Select.Option>
        </Select>
      </Form.Item>
    
      <Form.Item label="Date">
        <DatePicker />
      </Form.Item>
      <Form.Item label="choose date">
        <RangePicker />
      </Form.Item>
      <Form.Item >
        <Button style={{background:"gray"}}>Create</Button>
      </Form.Item>
      </Form>
      </Card>
      
        </DashLayout>
    )
};
export default   ManagerTrips;