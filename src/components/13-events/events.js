import React from "react";
const Events = () => {
  //nfn kısayolu ile fonksiyon açabilirsin
  // Event handler kısmı
  const sayHello1 = () => {
    alert("Hello");
  };

  const sayHello2 = (name) => {
    alert(`Merhabalar ${name} Bey`);
  };

  return (
    <div>
      {/* Event handler parametresiz kullanılacaksa aşağıdaki gibi fonksiyon kullanmadan çağrılabilir.
      onClick koyacağımız zaman {} koymak zorundayız JS ifadesi olduğu için
      */}
      {/* Event Listener kısmı */}
      <div onClick={sayHello1}>Say Hello 1</div>
      {/* Eğer bir üst satırda <div onClick={sayHello1()}>Say Hello 1</div> parantez eklersek direk o
      fonksiyonu çağırır, event olan onClick'i felan beklemez*/}

      {/* Event handler a  parametre gönderilecekse aşağıdaki gibi fonksiyon kullanmak zorunludur.
      [ () => fonksiyonunu tanimlamak gerek, bunu gördüğü zaman event'ı çalıştırıp sonra ("Ali") yi atar,
      yani önce event olan onClick'e basıp çalışacak o sonra atamalar gerçekleşecek ve ileride (event) =>
    içine event koyup sonra "Ali",event yaparak göndericez ]  
      */}
      {/* Event Listener kısmı */}
      <div onClick={() => sayHello2("Ali")}>Say Hello 2</div>
    </div>
  );
};
export default Events;
