import React from "react";
import { AiOutlineStar, AiFillHeart } from "react-icons/ai";

import "./SingleProduct.css";
import { DataState } from "../../Contexts/Data/DataContext";
import { addToCart } from "../../Services/Cart/CartServices";
import { useNavigate } from "react-router-dom";

export const SingleProduct = ({ product }) => {
  const navigate = useNavigate();

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
      <button className="add-to-cart" onClick={() => addToCart}>
        Add To Cart
      </button>
    </div>
  );
};
