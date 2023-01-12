import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const UseEffect1 = ({ id }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  //bu kod render olsun re-render olsun her türlü çalışır
  console.log(
    "Bu satır render ve re-render durumlarında ve alttaki return kısmı render edilmeden önce çalıştırılır, yani önce burası sonra return kısmı çalışıyor"
  );

  //bu ilk render'da çalışır
  useEffect(() => {
    console.log(`
            MOUNTING: Bu bölümdeki kodlar sadece render durumunda çalışır.
            Ancak re-render larda çalışmaz.Ayrıca maliyeti düşürmek amaçlardan biri,
             API çekerken ücret alanlar var
        `);

    return () => {
      console.log(`
            UNMOUNTING:Bu bölümdeki kodlar component hafızadan atılmadan hemen önce çalıştırılır
        `);
    };
  }, []);

  //bu her render'da çalışır
  useEffect(() => {
    console.log(`UPDATING:Bu bölümdeki kodlar render ve re-render durumlarında ve 
    alttaki return kısmı render edildikten sonra çalıştırılır 
    Bu useEffect özellikle alttaki elementlere useRef ile erişmek için kullanılır`);
  });

  //mesajı takip et mesajda bir değişiklik olursa burdaki kodları çalıştır
  //prop veya state değiştiğinde vs
  useEffect(() => {
    console.log(`
    UPDATING:Bu bölümdeki kodlar alt taraftaki yazılan dependency'lerin(message,id) değişmesi durumunda değişir`);
  }, [message, id]);

  //return kısmı her zaman useEffect'lerden önce çalışır
  return (
    <div>
      <div>
        {message} - {error}
      </div>
      <Button variant="info" onClick={() => setMessage("Hello")}>
        Set Message
      </Button>
      <Button variant="danger" onClick={() => setError("Some errors")}>
        Throw Error
      </Button>
    </div>
  );
};
export default UseEffect1;
