import './SingleCartProduct.css';

export const SingleCartProduct = ({ product }) => {
  const { _id, image, rating, reviews, size, category, itemName, oldPrice, newPrice, discount, isTrending } = product
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
            <button className='decrease-qty'>-</button>
            <p className='qty'>1</p>
            <button className='increase-qty'>+</button>
          </div>
        </div>
      </div>
      <div className='remove-operations'>
        <button className='remove-product '>Remove</button>
        <button className='move-to-wishlist'>Move To Wishlist</button>
      </div>
    </div>
  )
}