import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Pie
} from 'recharts';

import DashLayout from '../../component/Dashlayout';


const data = [
  {
    name: 'Akagera park',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Nyungwe park',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Kivu Lake',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Gishwati',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
];


const Graph = () => {

  return (
   
      
      <ResponsiveContainer width="70%" height="30%" display="flex">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    
  );
};

export default Graph;