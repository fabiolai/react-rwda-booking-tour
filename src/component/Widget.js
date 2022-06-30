import React from "react";
// import DashLayout from "../DashLayout" 
import "./Widget.css";
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import PersonIcon from '@mui/icons-material/Person';


const Widgets=({type})=> {
    let data;
    switch (type) {
        case "User":
        data={
         title:"USERS",
        counter:"1,000,000",
        link:"see all Users",
      //   icon:<PersonIcon className="icon"/>,
            };
     break;
     case "TOTALBOOKED":
        data={
         title:"TOTALBOOKED",
        counter:"1000000",
        link:"see all Users",
      //   icon:<PersonIcon className="icon"/>,
        };
        break;
     case "INCOME":
        data={
         title:"INCOME",
        counter:"4000000",
        link:"see all Users",
      //   icon:<PersonIcon className="icon"/>,
     };
    break;
    case "PRICE":
    data={
        title:"PRICE",
        counter:"600000",
        link:"see all Users",
      //   icon:<PersonIcon className="icon"/>,
    };
    break;
    case "TOTALEARNING":
    data={
         title:"TOTAEARNING",
        counter:"5000000",
        link:"see all Users",
      //   icon:<PersonIcon className="icon"/>,
    };
            
    }
    return(
        <>
        <div className=" widget">
           <div className="left">
           <span className="title">{data?.title}</span>
           <span className="counter">{data?.counter}</span>
           <span className="link  ">{data?.link}</span>
           </div>
           <div className="right">
            <div className="percentage positive">
             {/* <UpOutlined /> */}
               20 %
            </div>
            <span className="icon">{data?.icon}</span>
           </div>
        </div>
        
       </> 
    );
};
export default Widgets;