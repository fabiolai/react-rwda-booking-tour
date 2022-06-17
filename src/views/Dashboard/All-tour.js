import {Table} from 'antd';
import { useState } from 'react';
import allTours from '../../assets/Data/Tours.json'
const columns = [
  {
    title: 'name',
    dataIndex: 'title',
},
{
   dataIndex:'description'
}
]
 

const AllTours = () => 
 
   
    

      <Table
         columns={columns}
        dataSource={allTours}
      />
    



export default AllTours;