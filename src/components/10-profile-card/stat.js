import React from "react";

//name:shot, value:1
const Stat = ({ name, value }) => {
  return (
    <div>
      <h3>{value}</h3>
      <h6>{name}</h6>
    </div>
  );
};

export default Stat;

/* 
Shot:name, 1:value / followers:name, 2:value / foolowing:name, 10:value
bu component'i profile-card componentine import ediyoruz
*/
