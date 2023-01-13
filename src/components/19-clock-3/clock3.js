import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import "./clock3.scss";
const Clock3 = (props) => {
  const [dateTime, setDateTime] = useState(moment());
  //require('moment/locale/tr');
  const { textColor, bgColor } = props;

  const timeStr = dateTime.format("HH:mm");
  const dateStr = dateTime.format("LL");
  const dayStr = dateTime.format("dddd");
  const hour = dateTime.format("HH");
  const minute = dateTime.format("mm");
  const second = dateTime.format("ss");

  let message = "";
  if (hour >= 6 && hour < 11) {
    message = "Morning";
  } else if (hour >= 11 && hour < 14) {
    message = "Noon";
  } else if (hour >= 14 && hour < 17) {
    message = "Afternoon";
  } else if (hour >= 17 && hour < 22) {
    message = "Evening";
  } else {
    message = "Night";
  }

  console.log(timeStr);

  const clockStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  /* 
  saniyede 1 güncellenecek kodların tamamı bunu yazarsak ama bu sürekli çalışır saniyede, 1 saniye geçince setDateTime çalışır 
  moment güncellenir, state değişti, re-render oldu sonra buraya tekrar gelip her saniyede state'ı günceller ve 
  katlanarak(hem bi önceki hem şimdiki çalışır (1,2,4,8,16,32,64....)) her renderda chrome'daki DOM'u patlatacak duruma gelir
  
  setInterval(() => {
      setDateTime(moment());
    }, 1000);
  
  */

  /* Burda da her saniye çalışacak ama bi öncekini çaılıştırmayacak bir sistem lazım bunu da useEffect ile sağlarız 
    clearInterval ile UNMOUNTING kullanarak, sayfadan tamamen çıkınca clearInterval devreye girer*/
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="clock-container" style={clockStyle}>
      <div className="time">
        {hour}
        <span style={{ opacity: second % 2 === 0 ? 1 : 0 }}>:</span>
        {minute}
      </div>
      <div>
        <div className="date">{dateStr}</div>
        <div className="day">
          {dayStr} {message}
        </div>
      </div>
    </div>
  );
};
export default Clock3;
