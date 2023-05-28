import React from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { BiSupport } from 'react-icons/bi'
import {RiArrowGoBackLine} from "react-icons/ri"
import {GiDeliveryDrone} from "react-icons/gi"
import {TbDiscountCheck} from "react-icons/tb"
import {AiOutlineGift} from "react-icons/ai"
import './Features.css'

export const Features = () => {
  return (
    <div className='features'>
      <ul className='features-list'>
      <li className='features-list-item'>
          <div className='feature-icon'><GiDeliveryDrone /></div>
          <p className='feature-title'>Fast Delivery</p>
        </li>
        <li className='features-list-item'>
          <div className='feature-icon'><TbDiscountCheck /></div>
          <p className='feature-title'>Verified Product</p>
        </li>
        <li className='features-list-item'>
          <div className='feature-icon'><RiArrowGoBackLine /></div>
          <p className='feature-title'>Ease return</p>
        </li>
        <li className='features-list-item'>
          <div className='feature-icon'><AiOutlineGift /></div>
          <p className='feature-title'>Gift Wrapping</p>
        </li>
     
        <li className='features-list-item'>
          <div className='feature-icon'><FaShippingFast /></div>
          <p className='feature-title'>Free Shipping</p>
        </li>
       
        <li className='features-list-item'>
          <div className='feature-icon'><RiSecurePaymentLine /></div>
          <p className='feature-title'>Secure Payments</p>
        </li>
      
        <li className='features-list-item'>
          <div className='feature-icon'> <BiSupport /></div>
          <p className='feature-title'>24/7 Support</p>
        </li>
      </ul>
    </div>
  )
}
