import React from "react";
import SoLofi from "../logo/SoLofi.png";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={SoLofi} alt="Logo" className="logo" />
      <p className="heading">SoLofi</p>
    </div>
  );
};

export default Navbar;
