export const addToCart = async (product, dispatch) => {
  try {
    const response = await fetch("/api/user/cart", {
      method: "POST",
      body: JSON.stringify({ product }),
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    dispatch({ type: "CART_OPERATIONS", payload: data.cart });
  } catch (error) {
    console.log(error);
  }
};

export const RemoveFromCart = async (_id, dispatch) => {
  try {
    const response = await fetch(`api/user/cart/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    // const filterCart=cart.filter((data)=>data._id!== _id)
    //
    dispatch({ type: "CART_OPERATIONS", payload: data.cart });
  } catch (error) {
    console.log(error);
  }
};

export const moveToWishlist = async (product, dispatch, _id) => {
  try {
    const response = await fetch(`api/user/wishlist/`, {
      method: "POST",
      headers: {
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ product }),
    });
    const data = await response.json();
    console.log(data);
    dispatch({ type: "WISHLIST_OPERATION", payload: data.wishlist });
    RemoveFromCart(_id, dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const updatedQtyFromCart = async (product,_id,dispatch,type) => {
  try {
    const response= await fetch(
      `api/user/cart/${_id}`,{
            method:"POST",
           body:JSON.stringify({ action: {type}}) ,
           headers: {
            authorization: localStorage.getItem("token"),
          },
          },
      );
    console.log(response)
    const data=await response.json()
    console.log(data);
    dispatch({ type: "UPDATE_QTY_IN_CART", payload: data.cart });

  } catch (error) {
    console.log(error);
  }
};
