
export const initialState = {
 address:[{
    id:"1",
    name: "Arjunsingh Rajput",
 street: "204, sai jyot, s. n road Mulund WEST",
 city: "MUMBAI",
 state: "MAHARASHTRA",
 country: "India",
 postalCode: "400080",
 MobileNum: "9320003120"}],
 updatedId: null,
}

export const AddressReducer = (state,action) => {
 switch(action.type){
    case "ADD_NEW_ADDRESS":return{
...state,address:[...state.address,action.payload],updatedId: null
    }
    case "REMOVE_ADDRESS":return{
        ...state,address:state.address.filter(({id},i)=>action.payload!==id)
    }
    case "EDIT_ADDRESS":return{
        ...state,updatedId:action.payload
    }
    case "UPDATE_ADDRESS":return{
        ...state,address:action.payload,updatedId: null
    }
    default: return state
 }
}
