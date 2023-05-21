import React from 'react'
import { RiCoupon2Fill } from 'react-icons/ri'
import './PriceDetails.css'
import { DataState } from '../../../../Contexts/Data/DataContext'
import {RxCross2} from "react-icons/rx"
import {RiCoupon3Line} from "react-icons/ri"
export const PriceDetails = ({setCouponDiscount,setHideCouponBox,couponDiscount,setIsCouponApplied,isCouponApplied}) => {

const {state:{cart}}=DataState()


const totalNewPrice=cart.reduce((acc,curr)=>curr.newPrice*curr.qty+acc,0).toFixed(2);
const totalOldPrice=cart.reduce((acc,curr)=>curr.oldPrice*curr.qty+acc,0).toFixed(2);


const removeHandler =()=>{
  setIsCouponApplied(false)
  setCouponDiscount(0)
}

  return (
    <div className='price-detail-card'>
      <h4 className='price-detail-heading'>Price Details</h4>

      <div>

        <div className='displayFlex'>
          <p className='sm-fontsize sm-margin-bottom '>Price ({cart.length}items)</p>
          <p className='sm-fontsize'>₹ {totalOldPrice}</p>
        </div>

        <div className='displayFlex'>
          <p className='sm-fontsize sm-margin-bottom'>Discount</p>
          <p className='sm-fontsize sm-margin-bottom'>₹ {(totalNewPrice-totalOldPrice).toFixed(2)}</p>
        </div>

        <div className='displayFlex'>
          <p className='sm-fontsize sm-margin-bottom'>Cuopon Discount</p>
          <p className='sm-fontsize sm-margin-bottom'>₹ 0.00</p>
        </div>
{ isCouponApplied &&<div className='displayFlex sm-margin-bottom'>
  <p> <RiCoupon3Line/> Applied Coupon</p>
  <RxCross2 onClick={removeHandler}/>
</div>}

        <div className='displayFlex total-amt'>
          <h5 className='sm-fontsize sm-margin-bottom'>Total Amount</h5>
          <h5 className='sm-fontsize sm-margin-bottom'>₹ {!couponDiscount?totalNewPrice :totalNewPrice-totalNewPrice*couponDiscount/100 }</h5>
        </div>
        <div className='displayFlex coupon-box'>
          <p className='sm-fontsize sm-margin-bottom coupon-text'><RiCoupon2Fill />Have a Coupon ?</p>
          <button className='apply-coupon-btn' onClick={()=>setHideCouponBox(true)}>Apply</button>
        </div>

      </div>

      <p className='sm-fontsize sm-margin-bottom saved-price-info'>You will save ₹ 958 on this order</p>
      <button className='checkout-btn'>Checkout</button>
    </div>
  )
}
