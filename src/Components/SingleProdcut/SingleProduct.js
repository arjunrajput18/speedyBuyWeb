import React from "react";
import { AiOutlineStar, AiFillHeart,AiOutlineShoppingCart  } from "react-icons/ai";
import {BsFillCartCheckFill,BsCartCheck} from "react-icons/bs"
import "./SingleProduct.css";
import { DataState } from "../../Contexts/Data/DataContext";
// import { AddToCart } from "../../Services/Cart/CartServices";
import { NavLink, useNavigate } from "react-router-dom";
// import {DataState} from "../../Contexts/Data/DataContext"
export const SingleProduct = ({ product }) => {
  const navigate = useNavigate();
  
  const { dispatch } = DataState()
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
  } = product;
  const {
    state: { cart },
  } = DataState();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };


  const addToCartHandler = async (product) => {
    try {
      const response = await fetch("/api/user/cart", {
        method: "POST",
        body: JSON.stringify({product}),
        headers: {
          authorization: localStorage.getItem("token"),
        }
      });
      const data = await response.json();

      // console.log(data,"kk")
      dispatch({type:"CART_OPERATIONS",payload:data.cart})

    } catch (error) {
  
      console.log(error)
    }

  };
  
  return (
    <div className="product-card">
      <div className="card-header">
      {isTrending && <span className="trending">Trending</span>}
        <img
          src={image}
          alt={itemName}
          className="product-image"
          onClick={() => handleProductClick(_id)}
        />
        <div>
          <p className="prod-size">{size}</p>
        </div>
      </div>
      <div className="name-rating-like">
        <p className="product-name">{itemName}</p>
        <div className="rating-like">
          <div className="rating-and-size">
            <p className="ratings-info">
              <span className="rating-star">
                <AiOutlineStar />
                <span className="rating">{rating}</span>
              </span>
            </p>
          </div>

          <div className="trending-like-box">
          {/* <h2>hi</h2> */}

            <span className="like">
              <AiFillHeart />
            </span>
          </div>
        </div>
      </div>

      <div className="price-and-discount">
        <div className="prices">
          <span className="new-price">₹{newPrice}</span>
          <span className="old-price">₹{oldPrice}</span>
        </div>
        <p className="discount">{discount}% OFF</p>
      </div>
      {cart?.some((data)=>data._id===product._id)?<NavLink to="/cart"><button className="go-to-cart">Go To Cart <BsCartCheck className="icon-size"/></button></NavLink>:<button className="add-to-cart" onClick={() => addToCartHandler(product)}>
        Add To Cart
      </button>}
    </div>
  );
};
