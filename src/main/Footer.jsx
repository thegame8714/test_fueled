import React from 'react'
import './Footer.css'
import { useCartContext } from '../state'

const Footer = () => {
  const {
    state: {
      cart: { subtotal, tax, additionalComments }
    },
    dispatch
  } = useCartContext()

  const onChange = e => {
    dispatch({
      type: 'UPDATE_ADDITIONAL_COMMENTS',
      newAdditionalComments: e.target.value
    })
  }

  return (
    <div data-testid="footer" className="footer">
      <div>
        <label htmlFor="additional-comments">Additional Comments</label>
        <textarea
          id="additional-comments"
          data-testid="additional-comments"
          onChange={e => onChange(e)}
          value={additionalComments}
        ></textarea>
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
          <span className="value" data-testid="sub-total">
            ${parseInt(subtotal)}
          </span>
        </div>
        <div className="cost">
          <span className="tax">Tax</span>
          <span className="value">${tax}</span>
        </div>
        <div className="total_cost">
          <span className="total">Total</span>
          <span className="value">${parseInt(subtotal) + parseInt(tax)}</span>
        </div>
        <div className="ctas">
          <div className="ctas_item">
            <button
              className="checkout"
              data-testid="checkout"
              onClick={() => console.log('Checkout click!')}
            >
              Checkout
            </button>
          </div>
          <div className="ctas_item">
            <span className="or">or</span>
            <button
              className="continue_shopping"
              onClick={() => console.log("Let's carry on shopping!")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
