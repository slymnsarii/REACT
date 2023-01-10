import React from "react";
const Events = () => {
  // Event handler
  const sayHello1 = () => {
    alert("Hello");
  };

  const sayHello2 = (name) => {
    alert(`Merhabalar ${name} Bey`);
  };

  return (
    <div>
      {/* Event handler parametresiz kullanılacaksa aşağıdaki gibi fonksiyon kullanmadan çağrılabilir. */}
      <div onClick={sayHello1}>Say Hello 1</div>

      {/* Event handler a  parametre gönderilecekse aşağıdaki gibi fonksiyon kullanmak zorunludur. */}
      <div onClick={() => sayHello2("Ali")}>Say Hello 2</div>
    </div>
  );
};
export default Events;
