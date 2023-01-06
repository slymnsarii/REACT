import React from "react";
import "./welcome.scss";

const Welcome = (props) => {
  //aşağıda h2 tagı içine props.firstname olarak yazmamak için bunu yapıyoruz
  //eger props sayısı az ise const Welcome = (props) 'daki props yerine
  //parametreleri direk yazıp aşağıdakini yazmam
  const { firstName, lastName } = props;

  return (
    <div className="welcome">
      <h2>
        Welcome {firstName} {lastName}
      </h2>
    </div>
  );
};
export default Welcome;

/*
 // 1.yontem

const Welcome = (props) => {
  return (
    <div className="welcome">
      <h2>
        Welcome {props.firstName} {props.lastName}
      </h2>
    </div>
  );
};

*/

/*
    // 2.yontem
const Welcome = (props) => {
    const { firstName, lastName } = props; //destructing
    return (
      <div className="welcome">
        <h2>
          Welcome {firstName} {lastName}
        </h2>
      </div>
    );
  };

*/

/*
// 3.yontem
const Welcome = ({ firstName, lastName }) => {
    return (
      <div className="welcome">
        <h2>
          Welcome {firstName} {lastName}
        </h2>
      </div>
    );
  };
*/
