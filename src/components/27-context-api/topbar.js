import React, { useContext } from "react";
import StoreContext from "../../store";
import "./topbar.scss";

const Topbar = () => {
  // herhangi bir yerden bu bilgilere ulasmak istiyorsam useContext StoreContex deyip ulasabiliyorum
  const store = useContext(StoreContext); //Context'e ulaşmak için bu satır yeterli, counter ve setCounter kullanmayacağım sadece currencies lazım diye kullandık burayı, bunu dediğimiz anda app'deki value'leri alıyor burdaki 3 değeri store'a atıyor
  const { currencies } = store; //aşağıda sürekli store.currencies yazmak yerine

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
