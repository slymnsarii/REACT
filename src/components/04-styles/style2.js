import React from "react";

const Style2 = () => {
  //aynı stili birkaç component'te kullanmak için

  const styleTitle = {
    fontSize: "2rem",
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  };

  return (
    <div>
      <h2 style={styleTitle}>JSX Loops</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga corporis
        sad molestias suscipit quidem culpa, consectetur nihil possimus quasi
        perferendis, ipsam repellendus aliquam accusamus porro doloribus? Quas
        tempore eligendi sapiente expedita.
      </p>

      <h2 style={{ ...styleTitle, color: "blue" }}>Component Props</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga corporis
        molestias suscipit quidem culpa, consectetur nihil possimus quasi
        perferendis, ipsam repellendus aliquam accusamus porro doloribus? Quas
        tempore eligendi sapiente expedita.
      </p>
    </div>
  );
};

export default Style2;
