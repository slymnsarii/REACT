import React from "react";

const Jsx7 = ({ rate = 3 }) => {
  /*
  1.yöntem
  const arr = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rate) {
      arr.push("O");
    } else {
      arr.push("X");
    }
  }
 */

  return (
    <div>
      {/* 1.yöntem */}
      {/* {arr.join(" ")} */}

      {
        /* ["","","","","",""].map(() => <span>Hello</span>) bunun yerine daha dinamik olan*/

        [...new Array(10)].map((item, index) => (index < rate ? "O" : "X"))
      }
    </div>
  );
};
export default Jsx7;
