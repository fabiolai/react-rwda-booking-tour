import React from "react";

import DashLayout from "../../component/Dashlayout";


import Widgets from "../../component/Widget";
import Graph from "./Graph";
import Chart from "../../views/admin/piechart";


const  Dashboard=()=>{

    return (
      <>
        <DashLayout>
          <div className="Widgets">
            <Widgets type="User"/>
            <Widgets type="TOTALBOOKED"/>
            <Widgets type="INCOME"/>
            <Widgets type="TOTALEARNING"/>
          </div>
          <Graph></Graph>
          <Chart></Chart>
          {/* <div className="Pie" style={{display:'flex'}}> */}
          {/* <PieChart/> */}
          {/* <Charts/> */}
          {/* <PieChart/> */}
        </DashLayout>
        </>
    )
};
export default  Dashboard;