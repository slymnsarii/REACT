import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form1 = () => {
  //kullanıcıdan bilgileri alıp işlem yapmak istiyorsak bir state yapmamız lazım
  const [name, setName] = useState(""); //textbox ile bunu ilişkilendirmek için onChange kullanıyoruz

  return (
    <Container className="mt-5">
      <Form>
        <h1>Merhaba {name}</h1>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)} //onChange her değişiklikte çalışır, bunu e.target.value ile setName'e gönderiyoruz, o da name e gönderiyor ve böylece re-render ediliyor sürekli halde
        />
      </Form>
    </Container>
  );
};

export default Form1;
