import React, { useContext, useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import StoreContext from "../../store";
const Content = () => {
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState(0);

  const store = useContext(StoreContext);
  const { currencies } = store; //merkezi state'te yerleştirdiğimiz currencies

  useEffect(() => {
    const rslt = (amount / currencies[currency]).toFixed(2);
    setResult(rslt);
  }, [amount, currency]);

  return (
    <div className="p-5">
      <InputGroup className="mb-3">
        <Form.Control
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Form.Select
          value={currency}
          setCurrency={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </Form.Select>
        <InputGroup.Text id="basic-addon1">Result: {result}</InputGroup.Text>
      </InputGroup>
    </div>
  );
};
export default Content;
