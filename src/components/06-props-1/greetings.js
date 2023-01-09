import React from "react";
import Welcome from "./welcome";
//eger parametre sayisi coksa props diye yazariz
//ana component burdaki props olayında
const Greetings = () => {
  return (
    <div>
      <h1>Greetings Component</h1>
      <Welcome firstName="Ali" lastName="Gel" />
      <Welcome firstName="Ayşe" lastName="Gel" />
    </div>
  );
};
export default Greetings;
