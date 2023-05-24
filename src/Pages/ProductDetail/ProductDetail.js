import React from "react";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import "./ProductDetail.css";
import { NavLink, useParams } from "react-router-dom";
import { DataState } from "../../Contexts/Data/DataContext";
import { addToCart } from "../../Services/Cart/CartServices";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../Services/Wishlist/WishlistServices";

export const ProductDetail = () => {
  const { id } = useParams();

  const {
    state: { products, cart, wishlist },
    dispatch,
  } = DataState();

  const product = products?.find((product) => product._id === id);
  // console.log(product, "detail")
  const {
    _id,
    image,
    rating,
    reviews,
    size,
    category,
    itemName,
    oldPrice,
    newPrice,
    discount,
    isTrending,
    inStock,
    delivery_time,
    fewLeft,
    description,
  } = product;
  return (
    <div className="product-detail-main-container">
    <div className="product-detail-container flex justify-center align-center wrap">
      <div className="detail-img-box">
        {isTrending &&<span className="product-details-trending">Trending</span>}
        <img src={image} alt={itemName} className="detail-img" />
        <div className="detail-star-rating rating-star ">
          <AiFillStar className="star-color-productDetail" />
          <span>{rating}</span>
        </div>
      </div>

      <div className="product-details flex direction-column justify-between">
        <div className="flex justify-between ">
          <h2 className="font-1-3 header-md">{itemName}</h2>
          {wishlist.some((product) => product._id === _id) ? (
            <span
              className="liked"
              onClick={() => removeFromWishlist(_id, dispatch)}
            >
              <AiFillHeart />
            </span>
          ) : (
            <span
              className="like"
              onClick={() => addToWishlist(product, dispatch)}
            >
              <AiFillHeart />
            </span>
          )}
        </div>
        <div>
          <span className="new-price sm-fontsize">₹{newPrice}</span>
          <span className="old-price right-margin sm-fontsize">
            ₹{oldPrice}
          </span>
          <span className="discount sm-fontsize">{discount}% OFF</span>
        </div>
        {fewLeft && (
          <p className="few-left font-extra-sm font-bold-md">
            {" "}
            Hurry, Only Few Left!
          </p>
        )}
        <div>
          <span className="right-margin font-bold font-sm font-md">
            Availability :{" "}
          </span>{" "}
          <span className="in-stock font-md sm-fontsize">
            {inStock ? (
              "In Stock"
            ) : (
              <span className="font-sm font-md" style={{ color: "red" }}>
                Out Of Stock
              </span>
            )}
          </span>
        </div>
        <div>
          <span className="right-margin font-sm font-bold font-md">
            Description :{" "}
          </span>
          <span className="sm-fontsize line-height">{description}</span>
        </div>
        <div>
          <span className="right-margin font-bold font-sm font-md">Size :</span>
          <span className="sm-fontsize">{size}</span>
        </div>
        <div>
          <span className="right-margin font-bold font-sm font-md">
            Delivery :{" "}
          </span>
          <span className="sm-fontsize">{delivery_time}</span>
        </div>

        <div className="top-margin">
          {cart.some((data) => data._id === _id) ? (
            <NavLink to="/cart">
              <button className="go-to-cart">
                Go To Cart <BsCartCheck className="icon-size" />
              </button>
            </NavLink>
          ) : (
            <button
              className="add-to-cart sm-fontsize"
              onClick={() => addToCart(product, dispatch)}
            >
              Add To Cart
            </button>
          )}
        </div>
        <div className="top-margin margin-bottom-1">
          {wishlist.some(data=>data._id===_id)?<NavLink to={"/wishlist"}><button className="go-to-cart liked">Go To Wishlist <AiFillHeart /></button></NavLink>:<button onClick={()=>addToWishlist(product, dispatch)} className="add-to-cart sm-fontsize like">Add To Wishlist <AiFillHeart /></button>}
        </div>
      </div>
    </div>
    </div>
  );
};
