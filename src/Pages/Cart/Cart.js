import React, { useEffect, useState } from 'react'
import './Cart.css'
import { SingleCartProduct } from './Components/SingleCartProduct/SingleCartProduct'
import { PriceDetails } from './Components/CartPriceDetails/PriceDetails'
import { DataState } from '../../Contexts/Data/DataContext'
import { Coupon } from './Components/Coupon/Coupon'


export const Cart = () => {

  const { state: { cart } } = DataState();
  const [hideCouponBox,setHideCouponBox]=useState(false)
const[couponDiscount,setCouponDiscount]=useState()
const [isCouponApplied,setIsCouponApplied]=useState(false)

const [offValue,setOffValue]=useState(0)
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

const applyDiscountHandler= (value)=>{
console.log(value)
setCouponDiscount(value)
setHideCouponBox(false)
setIsCouponApplied(true)

}
const cartHasValue=cart.length
  return (
    <>
       {cartHasValue>0 &&<h2 className='text-center top-margin'>My Cart({cartHasValue})</h2>}
      <div className="cart-main">
      {!cartHasValue>0 &&<h2 className='empty-cart'>Your Cart is Empty ☹️</h2>}
     <div className="cart-container">
          {
            cart?.map(product => <SingleCartProduct key={product._id} product={product}  />)
          }
        </div>
  {cartHasValue>0 && <PriceDetails setHideCouponBox={setHideCouponBox} couponDiscount={couponDiscount} isCouponApplied={isCouponApplied} setIsCouponApplied={setIsCouponApplied} setCouponDiscount={setCouponDiscount}/>}
     <Coupon setHideCouponBox={setHideCouponBox} hideCouponBox={hideCouponBox} applyDiscountHandler={applyDiscountHandler} setOffValue={setOffValue} offValue={offValue}/>  
      </div>
    </>
  )
}
