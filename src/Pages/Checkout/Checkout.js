import React from "react";
import "./Checkout.css";
import { useOrder } from "../../Contexts/Data/OrderContext";
import { DataState } from "../../Contexts/Data/DataContext";
export const Checkout = () => {
  const {
    state: { cart },
  } = DataState();

  const { orderState } = useOrder();

  // console.log(orderState.priceDetails);
  const { priceDetails, totalAmount, couponDiscount, discount, totalItems } =
    orderState;
  const amount = 200;

  const handleSubmit = () => {
    var options = {
      key: "rzp_test_gZUyFL8iSOmzRO",
      key_secret: "NhxYofCc6J74MYtxV4N736G8",
      amount: amount * 100,
      currency: "INR",
      name: "SpeedyBuy",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Arjun",
        email: "asr9320003120@gmail.com",
        contact: "9320003120",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#2e2e2e",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className="checkout-main-container">
      <div className="checkout-inner-container">
        <div className="checkout-header-box text-center padding-top-bottom-5 ">
          <h2>ORDER DETAILS</h2>
        </div>
        <hr />
        <div className="flex justify-between text-center padding-bottom-2">
          <div className="font-bold">Item </div>
          <div className="font-bold">QTY</div>
        </div>
        {cart.map(({ itemName, qty,_id }) => (
          <div className="flex justify-between text-center padding-bottom-2" key={_id}>
            <p>{itemName}</p>
            <div>{qty}</div>
          </div>
        ))}
        <div className="text-center border-bottom border-top padding-top-bottom-5">
          <h2>PRICE DETAILS</h2>
        </div>

        <div className="flex justify-between padding-bottom-2 ">
          <div>Price({totalItems} items)</div>
          <div>₹{priceDetails}</div>
        </div>
        <div className="flex justify-between padding-bottom-2">
          <div>Discount</div>
          <div>-₹{discount}</div>
        </div>
        <div className="flex justify-between padding-bottom-2">
          <div>Delivery Charges</div>
          <div>FREE</div>
        </div>
        <div className="flex justify-between padding-bottom-2">
          <div>Coupon Discount</div>
          <div>₹{couponDiscount}</div>
        </div>
        <div className="flex justify-between padding-bottom-2">
          <h4>Total Amount</h4>
          <h4>₹{totalAmount}</h4>
        </div>
        <div className="text-center border-bottom border-top padding-top-bottom-5">
          <h3>DELIVER TO</h3>
        </div>
        <div className="padding-bottom-5">
          <p> address details </p>
        </div>
        <div onClick={handleSubmit}>
          <button className="place-order-button">Place Order</button>
        </div>
      </div>
    </div>
  );
};
