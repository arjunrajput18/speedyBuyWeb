export const addToCart = async (product, dispatch, token) => {
  try {
    const response = await fetch("/api/user/cart", {
      method: "POST",
      body: JSON.stringify({ product }),
      headers: {
        authorization: token,
      },
    });
    const data = await response.json();
    dispatch({ type: "CART_OPERATIONS", payload: data.cart });
  } catch (error) {
    console.log(error);
  }
};

export const RemoveFromCart = async (_id, dispatch, token) => {
  try {
    const response = await fetch(`api/user/cart/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    });

    const data = await response.json();

    dispatch({ type: "CART_OPERATIONS", payload: data.cart });
  } catch (error) {
    console.log(error);
  }
};

export const moveToWishlist = async (product, dispatch, _id, token) => {
  try {
    const response = await fetch(`api/user/wishlist/`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ product }),
    });
    const data = await response.json();
    dispatch({ type: "WISHLIST_OPERATION", payload: data.wishlist });
    RemoveFromCart(_id, dispatch, token);
  } catch (error) {
    console.log(error);
  }
};

export const updatedQtyFromCart = async (
  product,
  _id,
  dispatch,
  type,
  token
) => {
  try {
    const response = await fetch(`api/user/cart/${_id}`, {
      method: "POST",
      body: JSON.stringify({ action: { type } }),
      headers: {
        authorization: token,
      },
    });

    const data = await response.json();

    dispatch({ type: "UPDATE_QTY_IN_CART", payload: data.cart });
  } catch (error) {
    console.log(error);
  }
};
