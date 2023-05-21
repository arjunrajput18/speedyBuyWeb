export const addToWishlist=async (product,dispatch)=>{
    try {
      const response=await fetch("/api/user/wishlist",{
        method:"POST",
        body:JSON.stringify({product}),
        headers:{
          authorization:localStorage.getItem("token"),
        }
      })
const data=await response.json();

      dispatch({type:"WISHLIST_OPERATION",payload:data.wishlist})
    } catch (error) {
      console.log(error)
    }
  }

  export const removeFromWishlist=async  (_id,dispatch)=>{
    try {
      const response=await fetch(`/api/user/wishlist/${_id}`,{
        method:"DELETE",
        headers:{
          authorization:localStorage.getItem("token")
        }
      })
      const data=await response.json();
      dispatch({type:"WISHLIST_OPERATION",payload:data.wishlist})
    } catch (error) {
      console.log(error)
    }

  }