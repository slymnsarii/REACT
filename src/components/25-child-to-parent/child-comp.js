import React from "react";

const ChildComp = ({ handleCounterP }) => {
  //bana buraya prop olarak gelen objeyi oraya geri göndermişim
  //burda handleCounterP'daki 10 değeri parentta handleCounter fonksiyonundaki value'ye gidiyor
  return (
    <div>
      <button onClick={() => handleCounterP(10)}>Set Counter</button>
    </div>
  );
};

export default ChildComp;
