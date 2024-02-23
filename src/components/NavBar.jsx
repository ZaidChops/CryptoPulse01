import React from "react";
import FormControl from "./FormControl";
import { Link } from "react-router-dom";
import icon  from "../assets/icon.png"

const NavBar = () => {
  return (
    <>
      <nav class="navbar " style={{ backgroundColor: "#49654E",height:"70px" }}>
        <div class="container-fluid">
          {/* <img src={icon} alt="" /> */}
          <Link to={"/"} class="navbar-brand mb-0 h1" style={{ color: "white" }}>
            Crypto Coin
          </Link>
          {/* <img src="file:///E:/Redux/Crypto/src/assets/icon.png" alt="" /> */}
          <FormControl/>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
