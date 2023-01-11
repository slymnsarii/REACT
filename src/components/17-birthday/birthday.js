import React, { useState } from "react";
import { Container } from "react-bootstrap";
import data from "./people.json";
import PersonCard from "./preson-card";

const Birthday = () => {
  const [people, setPeople] = useState(data);

  return (
    <Container>
      <h1>Bugün Doğanlar</h1>
      <p>Bugün doğan {people.length} kişi bulundu</p>

      {people.map((item) => (
        <PersonCard
          {...item}
          key={item.id}
        /> /* key={item.id} koymasak da çalışır ama console'da hata verir */
      ))}
    </Container>
  );
};

export default Birthday;
