import { useState } from "react";
import { DataState } from "../../../../Contexts/Data/DataContext";
import {
  RemoveFromCart,
  updatedQtyFromCart,
} from "../../../../Services/Cart/CartServices";
import { remove, success } from "../../../../Services/Toast/ToastServices";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../../Services/Wishlist/WishlistServices";
import "./SingleCartProduct.css";
import { AiFillHeart } from "react-icons/ai";
export const SingleCartProduct = ({ product }) => {
  const { _id, image, itemName, oldPrice, newPrice, discount } = product;
  const {
    dispatch,
    state: { token, wishlist },
  } = DataState();
  const [isDisabledWishlist, setIsDisabledWishlist] = useState(false);
  const qtyHandler = (type) =>
    updatedQtyFromCart(product, _id, dispatch, type, token);

  const handleRemoveFromWishlist = () => {
    setIsDisabledWishlist(true);
    if (token) {
      removeFromWishlist(_id, dispatch, token);
      remove("Removed from Wishlist!");
      setTimeout(() => {
        setIsDisabledWishlist(false);
      }, 1000);
    }
  };

  const handleAddToWishlist = () => {
    setIsDisabledWishlist(true);
    if (token) {
      addToWishlist(product, dispatch, token);
      success("Added To Wishlist!");
      setTimeout(() => {
        setIsDisabledWishlist(false);
      }, 1000);
    }
  };

const handleRemove=()=>{
 setIsDisabledWishlist(true)
  if(token){
    RemoveFromCart(_id, dispatch, token)
    remove("Removed from Cart!")
    setTimeout(()=>{
      setIsDisabledWishlist(false);
    },1000)
  }
}

  return (
    <div className="cart-product-card ">
      <div className="cart-product-details">
        <img src={image} alt={itemName} className="cart-product-img" />
        <div className="product-info">
          <h4 className="cart-item-name">{itemName}</h4>
          <div className="cart-product-prices">
            <span className="new-price get-fontsize font-1-rem">
              ₹{newPrice}
            </span>
            <span className="old-price font-1-rem">₹{oldPrice}</span>
            <p className="discount get-fontsize">({discount}%OFF)</p>
          </div>
          <div className="quantity-operations">
            <p className="qty-label">Quantity: </p>
            <button
              className="decrease-qty cursor-pointer"
              onClick={() => qtyHandler("decrement")}
              disabled={product.qty < 2}
            >
              -
            </button>
            <p className="qty">{product.qty}</p>
            <button
              className="increase-qty cursor-pointer"
              onClick={() => qtyHandler("increment")}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="remove-operations">
        <button
          className="remove-product "
          onClick={handleRemove}
          disabled={isDisabledWishlist}
        >
          Remove
        </button>
        
          {" "}
          <div className="trending-like-box">
            {/* <h2>hi</h2> */}

            {token && wishlist?.some((data) => data._id === _id) ? (
              <button
                className="liked cart-like-btn"
                onClick={handleRemoveFromWishlist}
                disabled={isDisabledWishlist}
              >
                <AiFillHeart />
              </button>
            ) : (
              <button
                onClick={handleAddToWishlist}
                disabled={isDisabledWishlist}
                className="like cart-like-btn"
              >
                <AiFillHeart />
              </button>
            )}
          </div>
      
      </div>
    </div>
  );
};
