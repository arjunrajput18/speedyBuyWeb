import React, { useEffect } from 'react'
import './Cart.css'
import { SingleCartProduct } from './Components/SingleCartProduct/SingleCartProduct'
import { PriceDetails } from './Components/CartPriceDetails/PriceDetails'
import { DataState } from '../../Contexts/Data/DataContext'


export const Cart = () => {

  const { state: { cart } } = DataState();



  useEffect(() => {
    window.scrollTo(0, 0)
  },[])


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
  {cartHasValue>0 && <PriceDetails />}
    
      </div>
    </>
  )
}
