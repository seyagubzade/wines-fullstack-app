import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import LOGO from "../../assets/images/logo.png";

const Header = () => {
  return (
    <Fragment>
      <div className="header-top">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="header-bottom">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/wishlist"}>Wishlist</Link>
          </li>
          <li>
            <Link to={"/add"}>Add New</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
