import React, { useState } from "react";
import "./Checkout.css";
import { useOrder } from "../../Contexts/Data/OrderContext";
import { DataState } from "../../Contexts/Data/DataContext";
import { AddressState } from "../../Contexts/Data/AddressContext";
import { useNavigate } from "react-router-dom";
import { success } from "../../Services/Toast/ToastServices";

export const Checkout = () => {
  const {
    state: { cart },
  } = DataState();
  const navigate = useNavigate();
  const { orderState } = useOrder();
  const {
    addressState: { address },
  } = AddressState();
  // console.log(orderState.priceDetails);
  const { priceDetails, totalAmount, couponDiscount, discount, totalItems } =
    orderState;
  const [selectedAddress, setSelectedAddress] = useState(address[0]);
  console.log(address, "addddd");
  const handleAddress = (addressInfo) => {
    setSelectedAddress(addressInfo);
  };

  const handleSubmit = () => {
    var options = {
      key: "rzp_test_gZUyFL8iSOmzRO",
      key_secret: "NhxYofCc6J74MYtxV4N736G8",
      amount: totalAmount * 100,
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

 const handlePlaceorder=()=>{
  if(selectedAddress){
    handleSubmit()
  }else{
    navigate("/profile")
    success("Please Add Your Address")
  }
 }

  // if(selectedAddress){
  //   const {  name, street, city, state, country, postalCode, MobileNum } =
  //   selectedAddress;
  // }
  
  return (
    <div className="checkout-main-container">
      <div>
        {address.map((addressData, i) => {
          const {
            id,
            name,
            street,
            city,
            state,
            country,
            postalCode,
            MobileNum,
          } = addressData;
          return (
            <div className="checkout-mainAddress-container">

       
            <div className="checkout-innerAddress-container" key={id}>
              <div
                className="checkout-address cursor-pointer"
                key={id}
                onClick={() => handleAddress(addressData)}
              >
                <input
                  type="radio"
                  name="oneAddress"
                  onChange={() => handleAddress(addressData)}
                  checked={selectedAddress.id === id}
                />{" "}
                <span className="font-bold sm-margin-bottom"> {name}</span>
                <p>
                  {" "}
                  {street},{city},{postalCode}
                </p>
                <p>{state}</p>
                <p>{country}</p>
                {/* <p></p> */}
                <p>Phone Number: {MobileNum}</p>{" "}
              </div>
            </div>
            </div>
          );
        })}
      </div>
<div className="checkout-bill-container">


      <div className="checkout-inner-container">
        <div className="checkout-header-box text-center padding-top-bottom-5 ">
          <h2>ORDER DETAILS</h2>
        </div>
        <hr />
        <div className="flex justify-between text-center padding-bottom-2">
          <div className="font-bold">Item </div>
          <div className="font-bold">QTY</div>
        </div>
        {cart.map(({ itemName, qty, _id }) => (
          <div
            className="flex justify-between text-center padding-bottom-2"
            key={_id}
          >
            <p>{itemName}</p>
            <div>{qty}</div>
          </div>
        ))}
        <div className="text-center border-bottom border-top padding-top-bottom-5 margin-bottom-1">
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
        <div className="flex justify-between padding-bottom-2 ">
          <div>Coupon Discount</div>
          <div>₹{couponDiscount}</div>
        </div>
        <div className="flex justify-between margin-bottom-1">
          <h4>Total Amount</h4>
          <h4>₹{totalAmount}</h4>
        </div>
        <div className="text-center border-bottom border-top padding-top-bottom-5 margin-bottom-1">
          <h3>DELIVER TO</h3>
        </div>
      {selectedAddress && <div className="padding-bottom-5">
         <div className="margin-bottom-1">
            {" "}
            <span className="font-bold sm-margin-bottom"> {selectedAddress.name}</span>
            <p>
              {" "}
              {selectedAddress.street},{selectedAddress.city}  {selectedAddress.postalCode},
            </p>
            <p>{selectedAddress.state}, </p>
            <p> {selectedAddress.country}</p>
            <p>Phone Number :{selectedAddress.MobileNum}</p>{" "}
          </div>
        </div>}
        <div onClick={handlePlaceorder}>
          <button className="place-order-button cursor-pointer">
            Place Order
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};
