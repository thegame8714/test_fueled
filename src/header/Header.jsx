import React from "react";
import "./Header.css";

const Header = () => (
  <div className="header">
    <span className="header-title">
      order<span className="header-title-form">form</span>
    </span>
    <span className="header-cart">
      <span className="header-cart-text">Cart</span>
      <span className="header-cart-itmes">
        <span className="header-cart-items-text" data-testid="items-count">
          3
        </span>
      </span>
    </span>
  </div>
);

export default Header;
