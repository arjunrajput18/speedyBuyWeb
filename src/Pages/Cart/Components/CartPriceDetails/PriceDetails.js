import React, { useState } from 'react'
import { RiCoupon2Fill } from 'react-icons/ri'
import './PriceDetails.css'
import { DataState } from '../../../../Contexts/Data/DataContext'
import {RxCross2} from "react-icons/rx"
import {RiCoupon3Line} from "react-icons/ri"
import { Coupon } from '../Coupon/Coupon'
import {  useOrder } from '../../../../Contexts/Data/OrderContext'
import { NavLink } from 'react-router-dom'
import { remove } from '../../../../Services/Toast/ToastServices'
export const PriceDetails = () => {

const {state:{cart},dispatch}=DataState()

const {couponInfo, setCouponInfo,orderDispatch}=useOrder()

const totalNewPrice=cart.reduce((acc,curr)=>curr.newPrice*curr.qty+acc,0).toFixed(2);
const totalOldPrice=cart.reduce((acc,curr)=>curr.oldPrice*curr.qty+acc,0).toFixed(2);
const [isHideBox,setIsHideBox]=useState(true)


 
const couponDiscount=(totalNewPrice*couponInfo.value/100).toFixed(2)

const totalAmount=totalNewPrice-couponDiscount


const handlerRemoveCoupon=()=>{
  setCouponInfo({name:"",value:0})
  remove("Coupon Remove successfully!")
}


const handleCheckoutSubmit=()=>{
  orderDispatch({type:"CHECKOUT",payload:{totalOldPrice,totalAmount,couponDiscount,discount,totalItems}})

  dispatch({type:"CLEAR_CART"})

}

const discount=(totalOldPrice-totalNewPrice).toFixed(2)
const totalItems=cart.length
  return (
    <div className='price-detail-card'>
      <h4 className='price-detail-heading'>Price Details</h4>

      <div>

        <div className='displayFlex'>
          <p className='sm-fontsize sm-margin-bottom '>Price ({totalItems}items)</p>
          <p className='sm-fontsize'>₹ {totalOldPrice}</p>
        </div>

        <div className='displayFlex'>
          <p className='sm-fontsize sm-margin-bottom'>Discount</p>
          <p className='sm-fontsize sm-margin-bottom'>-₹{discount}</p>
        </div>

        <div className='displayFlex'>
          <p className='sm-fontsize sm-margin-bottom'>Cuopon Discount</p>
          <p className='sm-fontsize sm-margin-bottom'>-₹{couponDiscount}</p>
        </div>
{couponInfo.name &&  <div className='displayFlex sm-margin-bottom'>
  <p className='color-green'> <RiCoupon3Line/> {couponInfo.name}</p>
  <span onClick={handlerRemoveCoupon}><RxCross2  /></span>
</div>}

        <div className='displayFlex total-amt'>
          <h5 className='sm-fontsize sm-margin-bottom'>Total Amount</h5>
          <h5 className='sm-fontsize sm-margin-bottom'>₹{(totalAmount).toFixed(2)}</h5>
        </div>
        <div className='displayFlex coupon-box'>
          <p className='sm-fontsize sm-margin-bottom coupon-text'><RiCoupon2Fill />Have a Coupon ?</p>
          <button className='apply-coupon-btn' onClick={()=>setIsHideBox(false)}>Apply</button>
        </div>
      </div>

      <p className='sm-fontsize sm-margin-bottom saved-price-info'>You will save ₹ {(totalOldPrice-totalAmount).toFixed(2)} on this order</p>
      <NavLink to={"/checkout"}><button className='checkout-btn cursor-pointer' onClick={handleCheckoutSubmit}>Checkout</button></NavLink>
     {!isHideBox && <Coupon  setIsHideBox={setIsHideBox}  />  }
    </div>
  )
}
