import React from "react";
import { AiOutlineStar, AiFillHeart,AiOutlineShoppingCart, AiFillStar  } from "react-icons/ai";
import {BsFillCartCheckFill,BsCartCheck,BsCartPlus} from "react-icons/bs"
import "./SingleProduct.css";
import { DataState } from "../../Contexts/Data/DataContext";
import { addToCart } from "../../Services/Cart/CartServices";
import { NavLink, useNavigate } from "react-router-dom";
import { addToWishlist, removeFromWishlist } from "../../Services/Wishlist/WishlistServices";
// import {DataState} from "../../Contexts/Data/DataContext"
export const SingleProduct = ({ product }) => {
  const navigate = useNavigate();
  
  const { state:{wishlist},dispatch } = DataState()
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
    inStock
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
              <span className="star-color-card">
                <AiFillStar />
              </span>
                <span className="rating">{rating}</span>
              </span>
            </p>
          </div>

          <div className="trending-like-box">
          {/* <h2>hi</h2> */}

            {wishlist.some((data)=>data._id===_id)?<span className="liked" onClick={()=>removeFromWishlist(_id,dispatch)}>
              <AiFillHeart />
            </span>:<span className="like" onClick={()=>addToWishlist(product,dispatch)}>
              <AiFillHeart />
            </span>}
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
      {/* {cart?.some((data)=>data._id===product._id)?<NavLink to="/cart"><button className="go-to-cart">Go To Cart <BsCartCheck className="icon-size"/></button></NavLink>:<button className={inStock?"add-to-cart":"go-to-cart"} onClick={() => addToCart(product,dispatch)}>
        {inStock?"Add To Cart":"Out Of Stock" } <BsCartPlus  className="icon-size"/>
      </button>} */}
      {cart?.some((data)=>data._id===product._id)?<NavLink to="/cart"><button className="go-to-cart">Go To Cart <BsCartCheck className="icon-size"/></button></NavLink>:inStock?<button className={inStock?"add-to-cart":"go-to-cart"} onClick={() => addToCart(product,dispatch)}>
        Add To Cart <BsCartPlus  className="icon-size"/>
      </button>:<button className="go-to-cart disabled-element" disabled>Out Of Stock</button>}
    </div>
  );
};
