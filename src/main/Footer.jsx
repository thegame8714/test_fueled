import React from "react";
import "./Footer.css";

const Footer = () => (
  <div data-testid="footer" className="footer">
    <div>
      <label htmlFor="additional_comments">Additional Comments</label>
      <textarea id="additional_comments"></textarea>
    </div>
    <div>
      <div className="delivery_info">Delivery Info</div>
      <div className="delivery_info_text">
        All orders will be sent by Special Delivery, which will be insured and
        will need to be signed for. Allow 4-6 weeks for delivery.
      </div>
    </div>
    <div className="total_ctas">
      <div className="cost">
        <span className="sub_total">Sub Total</span>
        <span className="value">$1,995</span>
      </div>
      <div className="cost">
        <span className="tax">Tax</span>
        <span className="value">$0</span>
      </div>
      <div className="total_cost">
        <span className="total">Total</span>
        <span className="value">$1,995</span>
      </div>
      <div className="ctas">
        <div className="ctas_item">
          <button className="checkout" data-testid="checkout">
            Checkout
          </button>
        </div>
        <div className="ctas_item">
          <span className="or">or</span>
          <button className="continue_shopping">Continue Shopping</button>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
