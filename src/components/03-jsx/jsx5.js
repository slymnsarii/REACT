import React from "react";

const Jsx5 = () => {
  const names = ["Ali", "Veli", "Ayşe", "Fatma"];
  const cities = ["Istanbul", "Izmir", "London", "Paris"];

  //x:names dizisinin elemanları, i:index(key vermezsek, console'da her cocuk bir key sahibi olmali)
  return (
    <div>
      <ul>
        {names.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>

      <select>
        {cities.map((city, index) => (
          <option key={index}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default Jsx5;
