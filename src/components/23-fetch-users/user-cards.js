import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import UserCard from "./user-card";

const UserCards = () => {
  /* react, fetch'i gördüğü anda ayrı thread'e geçiyor fetch, önce return render ediliyor bundan dolayı data çekemez
  bunu çözmek için useState kullanıyoruz, useState(data) yapıyoruz, state değiştiği için re-render olur ancak
  bu re-render döngüsü sürekli olacağı için fetch sürekli çalışacağı için bunu da useEffect ile çözeriz(sadece ilk render'da çalışır)
  
  */
  const [users, setUsers] = useState([]);
  const [loading, setLoading] =
    useState(true); /* spinner'ın loading'de göstermek için true yaptık*/

  useEffect(() => {
    setTimeout(() => {
      //yüklenme zamanı uzarsa gecikme için timeout kullanırız(5sn dönsün sonra data gelsin)
      fetch("https://63c2f11fe3abfa59bdb61a48.mockapi.io/api/v1/users")
        .then((resp) => resp.json())
        .then((data) => {
          setUsers(data); //data geldikten sonra setLoading'i false'a alıyoruz
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 5000);
  }, []);

  return (
    <Container className="mt-5">
      {loading && <Spinner animation="border" variant="primary" />} {/*   */}
      <Row className="g-4">
        {users.map((user) => (
          <Col key={user.id} sm={6} md={4} lg={3} xl={2}>
            <UserCard {...user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserCards;
