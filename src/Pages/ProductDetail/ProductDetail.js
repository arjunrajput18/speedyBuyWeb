import React, { useEffect, useState } from "react";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import "./ProductDetail.css";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { DataState } from "../../Contexts/Data/DataContext";
import { addToCart } from "../../Services/Cart/CartServices";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../Services/Wishlist/WishlistServices";

import {
  loginTocontinue,
  remove,
  success,
} from "../../Services/Toast/ToastServices";
// import { ProductDetailsServices } from "../../Services/ProductDetails/ProductDetailsServices";
// import { ProductListing } from "../ProductListing/ProductListing";

export const ProductDetail = () => {
  const { id } = useParams();
  const {
    state: {  cart, wishlist,products },
    dispatch,
  } = DataState();
  let location = useLocation();
  const [isDisabled, setISDisabled] = useState(false);
  const token=localStorage.getItem("token")




  // const [product, setProduct] = useState();

  // const handleProduct = async () => {
  //   const data = await ProductDetailsServices(id);
  //   setProduct(data);
  // };

  // useEffect(() => {
    // setLoading(true)
    // handleProduct();
    // console.log("handleProduct")
// setTimeout(()=>{setLoading(false)},500)
  // }, []);
  // const product=await ProductDetailsServices(id)
  // console.log(product, "prod");

  // const product = products?.find((product) => product._id === id);
  // console.log(product, "detail")
  const navigate = useNavigate();
 
  const product=products?.find((prod)=>prod?.id===id) || {}


  const handleAddToCart = () => {
    setISDisabled(true);
    if (token) {
      addToCart(product, dispatch, token, navigate, location);
      success("Added To Cart!");
      setTimeout(() => setISDisabled(false), 1500);
    } else {
      navigate("/login", { state: { from: location } });
      loginTocontinue("Login To Continue");
    }
  };
  const handleAddToWishlist = () => {
    setISDisabled(true);
    if (token) {
      addToWishlist(product, dispatch, token);
      success("Added To Wishlist!");
      setTimeout(() => setISDisabled(false), 1500);
    } else {
      navigate("/login", { state: { from: location } });
      loginTocontinue("Login To Continue");
    }
  };

  const handleRemoveFromWishlist = () => {
    setISDisabled(true);
    if (token) {
      removeFromWishlist(product._id, dispatch, token);
      remove("Removed from Wishlist!");
      setTimeout(() => setISDisabled(false), 1500);
    }
  };

  return (
    <>{
      product && <div className="product-detail-main-container">
      <div className="product-detail-container flex justify-center align-center wrap">
        <div className="detail-img-box">
          {product.isTrending && (
            <span className="product-details-trending">Trending</span>
          )}
          <img src={product.image} alt={product.itemName} className="detail-img" />
          <div className="detail-star-rating rating-star ">
            <AiFillStar className="star-color-productDetail" />
            <span>{product.rating}</span>
          </div>
        </div>

        <div className="product-details flex direction-column justify-between">
          <div className="flex justify-between ">
            <h2 className="font-1-3 header-md">{product.itemName}</h2>
            {token && wishlist.some((prod) => prod._id ===product._id) ? (
              <button
                className="cart-like-btn liked"
                onClick={handleRemoveFromWishlist}
                disabled={isDisabled}
              >
                <AiFillHeart />
              </button>
            ) : (
              <button
                className="cart-like-btn like"
                onClick={handleAddToWishlist}
                disabled={isDisabled}
              >
                <AiFillHeart />
              </button>
            )}
          </div>
          <div>
            <span className="new-price sm-fontsize">₹{product.newPrice}</span>
            <span className="old-price right-margin sm-fontsize">
              ₹{product.oldPrice}
            </span>
            <span className="discount">{product.discount}%OFF</span>
          </div>
          {product.fewLeft && (
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
              {product.inStock ? (
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
            <span className="sm-fontsize line-height">{product.description}</span>
          </div>
          <div>
            <span className="right-margin font-bold font-sm font-md">
              Size :
            </span>
            <span className="sm-fontsize">{product.size}</span>
          </div>
          <div>
            <span className="right-margin font-bold font-sm font-md">
              Delivery :{" "}
            </span>
            <span className="sm-fontsize">{product.delivery_time}</span>
          </div>

          <div className="top-margin">
            {token && cart.some((data) => data._id === product._id) ? (
              <NavLink to="/cart">
                <button className="go-to-cart">
                  Go To Cart <BsCartCheck className="icon-size" />
                </button>
              </NavLink>
            ) : product.inStock ? (
              <button
                className="add-to-cart sm-fontsize"
                onClick={handleAddToCart}
                disabled={isDisabled}
              >
                Add To Cart
              </button>
            ) : (
              <button className="go-to-cart disabled-element" disabled>
                Out Of Stock
              </button>
            )}
          </div>
          <div className="top-margin margin-bottom-1">
            {token && wishlist.some((data) => data._id === product._id) ? (
              <NavLink to={"/wishlist"}>
                <button className="go-to-cart liked">
                  Go To Wishlist <AiFillHeart />
                </button>
              </NavLink>
            ) : (
              <button
                onClick={handleAddToWishlist}
                className="add-to-cart sm-fontsize "
                disabled={isDisabled}
              >
                Add To Wishlist <AiFillHeart />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    }</>
  );
};
