import React from "react";
import ahmet from "../../assets/img/image1.jpg";

const Image = () => {
  return (
    <div>
      {/* External url veya CDN(ayri sunucularda tutulabilir) */}
      <img
        src="https://images.unsplash.com/photo-1673234759103-4bc13ee175d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
        width="300"
      />

      {/* Statik yöntemde görüntüler public klasörü içinde aranır, locald'de çalışırken kullanılır daha çok */}
      <img src="assets/img/car.jpg" alt="" width="300" />

      {/* Import ve require yönteminde dosyalar src içinde olmalıdır, bu yontemde backend'den veya json'dan geliyor resimler*/}
      <img src={ahmet} alt="" width="300" />

      {/* requir'de kod calistigi zaman elementler'de resmin hash kodlu adresini verir, aynı zamanda import etmene gerek kalmaz ve 
      backend'den veya json'dan geliyor resimler en mantıklı yontem bu gibi */}
      <img src={require("../../assets/img/123.jpg")} alt="" width="300" />
    </div>
  );
};

export default Image;
