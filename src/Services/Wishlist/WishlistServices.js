export const addToWishlist=async (product,dispatch,token)=>{
    try {
      const response=await fetch("/api/user/wishlist",{
        method:"POST",
        body:JSON.stringify({product}),
        headers:{
          authorization:token,
        }
      })
const data=await response.json();

      dispatch({type:"WISHLIST_OPERATION",payload:data.wishlist})
    } catch (error) {
      console.log(error)
    }
  }

  export const removeFromWishlist=async  (_id,dispatch,token)=>{
    try {
      const response=await fetch(`/api/user/wishlist/${_id}`,{
        method:"DELETE",
        headers:{
          authorization:token
        }
      })
      const data=await response.json();
      dispatch({type:"WISHLIST_OPERATION",payload:data.wishlist})
    } catch (error) {
      console.log(error)
    }

  }