import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";

const Counter = () => {
  //useStateStatment yaz otomatik gelir
  const [counter, setCounter] = useState(0);

  /* burda val olarak 5 girersem setCounter 5 olacak onu da counter'a aktaracak yani handleClick'e ne değer gelirsei girilirse value o oluyor */
  /* diyelim en alttaki butona bastı handle=0 -> val=0 -> setCounter=0 -> counter=0 */
  const handleClick = (val) => {
    if (val < 0) val = 0;
    setCounter(val);
  };

  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="info" onClick={() => handleClick(counter + 1)}>
        <AiOutlinePlusCircle />
      </Button>
      <Button variant="light" disabled>
        {counter}
      </Button>
      <Button
        variant="warning"
        onClick={() => handleClick(counter - 1)}
        disabled={!counter}
      >
        <AiOutlineMinusCircle />
      </Button>
      <Button
        variant="danger"
        onClick={() => handleClick(0)}
        disabled={!counter} /* disabled={counter===0} */
      >
        <GrPowerReset />
      </Button>
    </ButtonGroup>
  );
};

export default Counter;

/*
ilk hali
setter ile getter aynı anda kullanılacaksa bu öneriliyor setCounter(counter+1) yerine setCounter((prev)=>prev+1) kullanmalıyız
                                                          (setter)   (getter)

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="info" onClick={() => setCounter((prev) => prev<=0 ? 0 : prev + 1)}>
        <AiOutlinePlusCircle />
      </Button>
      <Button variant="light" disabled>
        {counter}
      </Button>
      <Button variant="warning" onClick={() => setCounter((prev) => prev<=0 ? 0 : prev - 1)}>
        <AiOutlineMinusCircle />
      </Button>
      <Button variant="danger" onClick={() => setCounter(0)}>
        <GrPowerReset />
      </Button>
    </ButtonGroup>
  );
};
export default Counter; */
