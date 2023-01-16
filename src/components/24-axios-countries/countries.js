import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    /* await kodu bekletir, await kullanmak için method'u async olarak işaretlemek gerek*/
    const resp = await axios.get("https://restcountries.com/v3.1/all");
    console.log(resp.data);
    setCountries(resp.data); //state'i güncellemek için
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Bayrak</th>
          <th>Ülke</th>
          <th>Nüfus</th>
          <th>Başkent</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {" "}
          {/* her dönüşte bir satır oluşturacağım için tr yaptık */}
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Countries;
