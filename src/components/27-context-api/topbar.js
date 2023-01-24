import React, { useContext } from "react";
import StoreContext from "../../store";
import "./topbar.scss";

const Topbar = () => {
  // herhangi bir yerden bu bilgilere ulasmak istiyorsam merkezi state'de oluşturduğum useContext(StoreContex) deyip ulasabiliyorum
  //useContext hook'u App.js'deki { counter, setCounter, currencies } objesini getiriyor yani StoreContext'i getiriyor
  const store = useContext(StoreContext); //Context'e ulaşmak için bu satır yeterli, counter ve setCounter kullanmayacağım sadece currencies lazım diye kullandık burayı onlar lazım olsa burda onları da yazardım, bunu dediğimiz anda app'deki value'leri alıyor burdaki 3 değeri store'a atıyor
  const { currencies } = store; //aşağıda sürekli store.currencies yazmak yerine(destructing)

  const formatCurrency = (val) => {
    return (1 / currencies[val]).toFixed(2);
  };

  //alert(currencies.CAD);
  // alert(currencies["CAD"]);

  return (
    <header className="exchange">
      <nav>
        <h3>Exchange</h3>
        <div>
          <span>$: {formatCurrency("USD")}₺</span>
          <span>€: {formatCurrency("EUR")}₺</span>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
