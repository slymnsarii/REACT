import React from "react";
import { FcHome } from "react-icons/fc";
import { BiAlbum, BiHomeSmile } from "react-icons/bi";
import { FiMic, FiCheck, FiAlertCircle } from "react-icons/fi";

const Icon = () => {
  return (
    <div>
      <FcHome style={{ fontSize: "3rem", color: "red" }} />
      <BiHomeSmile style={{ fontSize: "3rem", color: "red" }} />
      <FiMic style={{ fontSize: "3rem", color: "red" }} />
      <FiCheck style={{ fontSize: "3rem", color: "red" }} />
      <FiAlertCircle style={{ fontSize: "3rem", color: "red" }} />
      <BiAlbum />
    </div>
  );
};

export default Icon;
