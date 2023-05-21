import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import "./Coupon.css"
export const Coupon = ({setHideCouponBox,applyDiscountHandler,hideCouponBox,offValue,setOffValue}) => {

//whole component called then useState value also reset
// console.log(offValue,"lll")
  return (
    <>
   {hideCouponBox && <div className='main-coupon-container'>
   <div className='inner-coupon-container'>
     <h2>Apply Coupon</h2>
     <div className='relative'>
        <ImCross  className='coupon-imCross-box cursor-pointer' onClick={()=>setHideCouponBox(false)} />
     </div>
     <div className='discount-box'>
     <label>
       <input type='radio' name="coupon-discount" value={50} onChange={()=>setOffValue(50)} checked={offValue===50}/>
     50% OFF: SUMMER_SALE
     </label>
     </div>
     <div className='discount-box'>
       <label>
         <input type='radio' name="coupon-discount"  value={10} onChange={()=>setOffValue(10)} checked={offValue===10}/> 10% OFF:NEW_USER
       </label>
     </div>
     <button className="apply-discount-btn" onClick={()=>applyDiscountHandler(offValue)}> Apply</button>
   </div>
 </div>}
 </>
  )
}
