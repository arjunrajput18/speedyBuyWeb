import { DataState } from '../../../../Contexts/Data/DataContext';
import { RemoveFromCart, moveToWishlist, updatedQtyFromCart } from '../../../../Services/Cart/CartServices';
import './SingleCartProduct.css';

export const SingleCartProduct = ({ product }) => {
  const { _id, image,    itemName, oldPrice, newPrice, discount,  } = product
  const {dispatch } = DataState();


const qtyHandler=(type)=>updatedQtyFromCart(product,_id,dispatch,type)

  return (
    <div className="cart-product-card ">
      <div className="cart-product-details">
        <img src={image} alt={itemName} className="cart-product-img" />
        <div className="product-info">
          <h4 className='cart-item-name'>{itemName}</h4>
          <div className="cart-product-prices">
            <span className='new-price get-fontsize font-1-rem'>₹{newPrice}</span>
            <span className='old-price font-1-rem'>₹{oldPrice}</span>
            <span className='discount get-fontsize'>({discount}%OFF)</span>
          </div>
          <div className='quantity-operations'>

            <p className='qty-label'>Quantity: </p>
            <button className='decrease-qty cursor-pointer'  onClick={()=>qtyHandler("decrement")} disabled={product.qty<2}>-</button>
            <p className='qty'>{product.qty}</p>
            <button className='increase-qty cursor-pointer'  onClick={()=>qtyHandler("increment")}>+</button>
          </div>
        </div>
      </div>
      <div className='remove-operations'>
        <button className='remove-product ' onClick={()=>RemoveFromCart(_id,dispatch)}>Remove</button>
        <button className='move-to-wishlist'onClick={()=>moveToWishlist(product,dispatch,_id)}>Move To Wishlist</button>
      </div>
    </div>
  )
}