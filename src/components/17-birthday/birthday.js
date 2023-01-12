import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import data from "./people.json";
import PersonCard from "./preson-card";

const Birthday = () => {
  const [people, setPeople] = useState(data);

  const deletePerson = (id) => {
    /* bu id hariç diğerlerini getir diyerek silmek istediğimi siliyorum */
    const arr = people.filter((item) => item.id !== id);
    setPeople(arr);
  };

  return (
    <Container>
      <h1>Bugün Doğanlar</h1>
      <p>Bugün doğan {people.length} kişi bulundu</p>
      {/* burda data.length yapmayız çünkü useState'de data'yı people'a atadım */}
      {people.map((item) => (
        <PersonCard /* her dönüşte bir PersonCard oluşturuyoruz */
          {...item} /* people'ı dönerken json'daki bütün elemanların hepsini ayrı ayrı PersonCard'a ayrı ayrı gönderme işi yapıyor, prop göndermenin kısayolu */
          key={item.id}
          deletePersonProp={deletePerson}
        /> /* key={item.id} koymasak da çalışır ama console'da hata verir, neden peki item.id yazdı key içine? */
      ))}

      <Button variant="danger" onClick={() => setPeople([])}>
        Remove All
      </Button>
      <Button variant="success" onClick={() => setPeople(data)}>
        Reload Data
      </Button>
    </Container>
  );
};

export default Birthday;
