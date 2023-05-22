import React from "react";
import "./Checkout.css"
export const Checkout = () => {
  return (
    <div className="checkout-main-container">
      <div className="checkout-inner-container">
        <div className="checkout-header-box text-center ">
          <h2>ORDER DETAILS</h2>
        </div>
        <hr />
        <div className="flex justify-between text-center">
          <div>Item </div>
          <div>QTY</div>
        </div>
        <div className="flex justify-between text-center">
          <div>Title_Name</div>
          <div>1</div>
        </div>
        <div className="text-center border-bottom border-top">
        <h2>PRICE DETAILS</h2>
        </div>
     
        <div className="flex justify-between ">
          <div>
            Price(1 items)
          </div>
          <div>₹399</div>
        </div>
        <div className="flex justify-between">
          <div>Discount</div>
          <div>-₹180</div>
        </div>
        <div className="flex justify-between">
          <div>
            Delivery Charges
          </div>
          <div>FREE</div>
        </div>
        <div className="flex justify-between">
          <div>Coupon Discount</div>
          <div>₹ 0</div>
        </div>
        <div className="flex justify-between">
          <h4>Total Amount</h4>
          <h4>₹219.00</h4>
        </div>
        <div className="text-center border-bottom border-top">
          <h3>DELIVERY TO</h3>
        </div>
        <div>
          <p> address details  </p>
        </div>
<button className="place-order-button">Place Order</button>
      </div>
    </div>
  );
};
