import React from "react";
import ahmet from "../../assets/img/image1.jpg";

const Image = () => {
  return (
    <div>
      {/* External url veya CDN(ayri sunucularda tutulabilir) */}
      {/* Harici API'lara baglandığımızda fotoğraflı data gönderiyorlarsa uzun adres gönderirler,
      API'dan JSon içinde link(url) olarak gelir fotoğraflar
      */}
      <img
        src="https://images.unsplash.com/photo-1673234759103-4bc13ee175d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
        width="300"
      />

      {/* Statik yöntemde görüntüler public klasörü içinde aranır, local'de çalışırken kullanılır daha çok */}
      <img src="assets/img/car.jpg" alt="" width="300" />

      {/* Import ve require yönteminde dosyalar src içinde olmalıdır, bu yontemde backend'den veya json'dan geliyor resimler*/}
      <img src={ahmet} alt="" width="300" />

      {/* require'de kod calistigi zaman elementler'de resmin hash kodlu adresini verir, aynı zamanda import etmene gerek kalmaz ve 
      backend'den veya json'dan geliyor resimler en mantıklı yontem bu gibi, kendi API'mızdan geliyorsa bu yöntem kullanılır
      Resimler backend API'dan dinamik bir şekilde(ürün bilgileri, kullanıcı bilgileri, fotoğraflar vs) geliyorsa bunlar
      Frontend kısmında asset içinde olmaz çünkü backend'den gelen fotoğraflar değişebilir o tip API'dan gelen datalar
      url olarak(en yukardaki external url kısmı gibi) gelir öyle kullanırız burda, frontend kısmında logo gibi
      sabit kalacak fotoğraflar olur, onları asset içinde tutarız ve statik,import,require yöntemlerini kullanarak yaparız
      */}
      <img src={require("../../assets/img/123.jpg")} alt="" width="300" />
    </div>
  );
};

export default Image;
