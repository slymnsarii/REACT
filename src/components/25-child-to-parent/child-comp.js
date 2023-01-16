import React from "react";

const ChildComp = ({ handleCounter }) => {
  //bana buraya prop olarak gelen objeyi oraya geri göndermişim
  return (
    <div>
      <button onClick={() => handleCounter(10)}>Set Counter</button>
    </div>
  );
};

export default ChildComp;
