import React from "react";

const SingleUser = ({ data }) => {
  return (
  
      <div
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifycontent: "center",
          flexDirection: "column",
          heigh: "100vh",
          width:"100%"
          
        }}

      >
        <img src={data?.Profile} />
        <h2>{data?.Name}</h2>
        <h3>{data?.Email}</h3>
        <h3>{data?.Home}</h3>
        <h3>{data?.Phone}</h3>
      </div>
   
  );
};
export default SingleUser;
