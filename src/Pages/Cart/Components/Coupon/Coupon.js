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
       <input type='radio' name="coupon-discount" value={30} onChange={()=>setCouponDetails({name:"DIWALI_SALE",value:30})} checked={couponDetails.value===30}/>
     30% OFF: DIWALI_SALE
     </label>
     </div>
     <div className='discount-box'>
       <label>
         <input type='radio' name="coupon-discount"  value={15} onChange={()=>setCouponDetails({name:"NEW_USER",value:15})} checked={couponDetails.value===15}/> 15% OFF:NEW_USER
       </label>
     </div>
     <button className="apply-discount-btn" onClick={handleApplyCoupon}> Apply</button>
   </div>
 </div>
 </>
  )
}
