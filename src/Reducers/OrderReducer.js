

export const initialState={
priceDetails:0,
discount:0,
couponDiscount:0, 
totalAmount:0,
totalItems:0,
selectedAddress:{},
OrderPlacedItems:[],

}



export const OrderReducer = (state,action) => {
  const {totalOldPrice,totalAmount,couponDiscount,discount,totalItems}=action.payload
switch (action.type){
case "CHECKOUT":return{
  ...state,priceDetails:totalOldPrice,totalAmount,couponDiscount,discount,totalItems
}
case "Selected_Address": return {
  ...state,selectedAddress:action.payload
}
case "ORDER_PLACED_ITEMS":return{
  ...state,OrderPlacedItems:action.payload
}

default:
  return state
}

}
