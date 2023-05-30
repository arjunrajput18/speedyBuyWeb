import React from "react";
import "./OrderPlaced.css";

import { useOrder } from "../../Contexts/Data/OrderContext";
import { NavLink } from "react-router-dom";

export const OrderPlaced = () => {
    

      const {orderState:{totalAmount,selectedAddress,OrderPlacedItems}}=useOrder()
      const payment_key=localStorage.getItem("payment_key")
const { 
  name,
  street,
  city,
  state,
  country,
  postalCode,
  MobileNum,}=selectedAddress
  return (
    <div>
     {OrderPlacedItems.length<1?<div className="empty-cart-order">Your Order is Empty click here to <NavLink to="/productlisting"><button className="shop-now-btn"> Shop Now</button></NavLink> </div>: <div className="order-plcaed-main-container">
        <div className="top-margin font-bold font-2">Order Summary</div>
        <div className="Order-placed-container ">
          <h3 className="margin-bottom-1">Order Confirmed</h3>
          <p>Payment Id: {payment_key}</p>
          <p>Total Amount : ₹ {totalAmount} </p>
          <p>Order will be delivered to:</p>
          <div>
            {/* <span className="font-bold sm-margin-bottom"> {name}</span>
                <p>
                  {" "}
                  {street},{city},{postalCode}
                </p>
                <p>{state}</p>
                <p>{country}</p>
                {/* <p></p> */}
            {/* <p>Phone Number: {MobileNum}</p>{" "} */}
            <p>

            </p>
            <div className="padding-bottom-5">
         <div className="margin-bottom-1">
            {" "}
            <span className="font-bold sm-margin-bottom"> {name}</span>
            <p>
              {" "}
              {street},{city}  {postalCode},
            </p>
            <p>{state}, </p>
            <p> {country}</p>
            <p>Phone Number :{MobileNum}</p>{" "}
          </div>
        </div>
          </div>
          <div className="order-placed-product">
          {OrderPlacedItems.map(({_id, image, itemName, oldPrice, newPrice, discount,qty })=><div key={_id} className="flex">
            <img
              src={
               image
              }
              alt={itemName}
              className="order-placed-img"
            />
            <div className="placed-order-cartdetail">
              <h4 className="margin-bottom-1">{itemName}</h4>
              <p className=" font-sm">Total Quantity: {qty}</p>
              <div className="cart-product-prices">
            <span className="new-price get-fontsize font-1-rem">
              ₹{newPrice}
            </span>
            <span className="old-price font-1-rem">₹{oldPrice}</span>
            <p className="discount get-fontsize">({discount}%OFF)</p>
          </div>
            
            </div>
          </div>)}
           
          </div>
       
            
            
          
        </div>
      </div> }
    </div>
  );
};
