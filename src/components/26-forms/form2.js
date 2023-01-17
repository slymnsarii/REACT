import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
const Form2 = () => {
  //her form elemanlarını ayrı state e bağladık
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);

  useEffect(() => {
    //num1 ve num2 de değişiklik olursa burayı çalıştıracak
    setNum3(Number(num1) + Number(num2));
  }, [num1, num2]);

  return (
    <Container className="mt-5">
      <Form>
        <Form.Group className="mb-3">
          {" "}
          {/*Form.Group: formların alt alta gelmesini sağlıyor */}
          <Form.Control
            type="text"
            placeholder="1.Sayı"
            onChange={(e) => setNum1(e.target.value)} //onChange:form kontrollerini onChange üzerinden state'e bağlıyoruz
            value={num1} //value:bu state'deki datayı form kontrole aktarmak için value'u kullandık(form'da value'yi gösteris ilk değeri 0 olduğu için formda ilk 0 görünüyor)
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="2.Sayı"
            onChange={(e) => setNum2(e.target.value)}
            value={num2}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="3.Sayı"
            value={num3}
            disabled
          />
        </Form.Group>
      </Form>
    </Container>
  );
};
export default Form2;
