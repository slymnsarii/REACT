import React, { useState } from "react";
import { Button } from "react-bootstrap";
const State = () => {
  /* ilk değer:light bu mode'a atanıyor */
  const [mode, setMode] = useState("light");

  let classNames = "bg-light text-dark p-5";

  if (mode === "dark") {
    classNames = "bg-dark text-light p-5";
  }

  return (
    <div className={classNames}>
      <h1 className="text-center">Dark/Light Mode Switcher</h1>
      <div className="d-flex justify-content-evenly mt-5">
        <Button onClick={() => setMode("dark")}>Dark Mode</Button>
        <Button onClick={() => setMode("light")}>Light Mode</Button>
      </div>
    </div>
  );
};
export default State;

/* setMode("dark") çalıştığı anda, mode defaultu light olandan dark'a geçiyor(setMode, mode'a atanıyor) ve  6.satırdan itibaren aşağı kadar yani aslında JSX(return içi) kısmının yeniden çalışması
dom yeniden re-render(ilk çalıştığında hepsi çalışıyor bu render oluyor) ediliyor ve component güncelleniyor, bu güncellemeyi state yapıyor

Kaç tane state olursa olsun birbirini etkilemez state'ler korunur ve biri re-render oluyorsa diğeri olmaz
Set mode'u çalıştırdığımızda asenkron oluyor, asenkron:bagimsiz,ayri thread'te calisir, islemci onlar icin ayri thread belirleyip orda calisirlar
 */
