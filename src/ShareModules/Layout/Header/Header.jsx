import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
const ShowSidebar = () => {
document.body.classList.add("body-active");
};
const CloseSidebar = () => {
document.body.classList.remove("body-active");
};


return (
<>
  <div className="header">
    <div className="header__menu">
      <div className="header__menu-logo">
        <div className="logo">
          <Link to="#">
          <img src="./images/logo.svg" alt="" />
          </Link>
        </div>
      </div>

      <div className="header__menu--ul">
        <div className="mobile-menu">
          <button onClick={ShowSidebar}>
            <img src="./images/icons/menu.svg" alt="" />
          </button>
        </div>
        <ul>
          <li className="close-mobile-menu">
            <button onClick={CloseSidebar}>
              <img src="./images/icons/close.svg" alt="" />
            </button>
          </li>
          <li>
            <Link to="#">
            FAQ
            </Link>
          </li>
          <li>
            <Link to="#">
            Contact
            </Link>
          </li>
          <li>
            <Link to="#" className="primary-btn">
            Get Started
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</>
);
}

export default Header;