import React from 'react'

export const initialState={
priceDetails:0,
discount:0,
couponDiscount:0, 
totalAmount:0,
totalItems:0

}



export const OrderReducer = (state,action) => {
  const {totalOldPrice,totalAmount,couponDiscount,discount,totalItems}=action.payload
switch (action.type){
case "CHECKOUT":return{
  ...state,priceDetails:totalOldPrice,totalAmount,couponDiscount,discount,totalItems
}

default:
  return state
}

}
