import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import "./Coupon.css"
import { useOrder } from '../../../../Contexts/Data/OrderContext'
export const Coupon = ({setIsHideBox}) => {

  const {setCouponInfo,couponInfo}=useOrder()
  const [couponDetails,setCouponDetails]=useState({name:"",value:couponInfo.value})

  //context value remain same but page value become  reset radio box logic.
  //


  const handleApplyCoupon=()=>{
    if(couponDetails.name){
      setIsHideBox(true)
      setCouponInfo(couponDetails) // value set for entire children orderContext
    }
  }
console.log(couponInfo.value);

  return (
    <>
  <div className='main-coupon-container'>
   <div className='inner-coupon-container'>
     <h2>Apply Coupon</h2>
     <div className='relative' onClick={()=>setIsHideBox(true)}>
        <ImCross  className='coupon-imCross-box cursor-pointer'  />
     </div>
     <div className='discount-box'>
     <label>
       <input type='radio' name="coupon-discount" value={50} onChange={()=>setCouponDetails({name:"SUMMER_SALE",value:50})} checked={couponDetails.value===50}/>
     50% OFF: SUMMER_SALE
     </label>
     </div>
     <div className='discount-box'>
       <label>
         <input type='radio' name="coupon-discount"  value={10} onChange={()=>setCouponDetails({name:"NEW_USER",value:10})} checked={couponDetails.value===10}/> 10% OFF:NEW_USER
       </label>
     </div>
     <button className="apply-discount-btn" onClick={handleApplyCoupon}> Apply</button>
   </div>
 </div>
 </>
  )
}
