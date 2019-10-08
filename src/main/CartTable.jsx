import React from "react";
import "./CartTable.css";

const CartTable = () => (
  <div data-testid="cart" className="cart">
    <div className="thead">
      <div className="tr">
        <span className="th"></span>
        <span className="th product_cell">Product Name</span>
        <span className="th">Price</span>
        <span className="th">Quantity</span>
        <span className="th">Remove</span>
      </div>
    </div>
    <div className="tbody">
      <div className="tr">
        <span className="td product_image">
          <img src="./jetsky.png" alt="Jet Sky" />
        </span>
        <span className="td product_cell">
          <div className="product_name">Jet Ski</div>
          <div className="product_id">434556256</div>
        </span>
        <span className="td">$1,500</span>
        <span className="td">
          <span className="product_quantity">1</span>
          <button className="product_update">Update</button>
        </span>
        <span className="td">
          <button className="product_remove">
            <span></span>
          </button>
        </span>
      </div>
      <div className="tr even">
        <span className="td product_image">
          <img src="./bubble_wrap.png" alt="Bubble Wrap" />
        </span>
        <span className="td product_cell">
          <div className="product_name">Bubble Wrap</div>
          <div className="product_id">345245865</div>
        </span>
        <span className="td">$440</span>
        <span className="td">
          <span className="product_quantity">1</span>
          <button className="product_update">Update</button>
        </span>
        <span className="td">
          <button className="product_remove">
            <span></span>
          </button>
        </span>
      </div>
      <div className="tr">
        <span className="td product_image">
          <img src="./croc_pot.jpeg" alt="Crock Pot" />
        </span>
        <span className="td product_cell">
          <div className="product_name">Crock Pot</div>
          <div className="product_id">987123654</div>
        </span>
        <span className="td">$56</span>
        <span className="td">
          <span className="product_quantity">1</span>
          <button className="product_update">Update</button>
        </span>
        <span className="td">
          <button className="product_remove">
            <span></span>
          </button>
        </span>
      </div>
    </div>
  </div>
);

export default CartTable;
