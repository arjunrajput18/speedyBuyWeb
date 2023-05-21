import React, { useEffect } from 'react'
import './Cart.css'
import { SingleCartProduct } from './Components/SingleCartProduct/SingleCartProduct'
import { PriceDetails } from './Components/CartPriceDetails/PriceDetails'
import { DataState } from '../../Contexts/Data/DataContext'

export const Cart = () => {

  const { state: { cart } } = DataState();


  useEffect(() => {
    // getFakeFetch()
    window.scrollTo(0, 0)
  },[])
  return (
    <>
      <h2 className='text-center top-margin'>My Cart(3)</h2>
      <div className="cart-main">
        <div className="cart-container">
          {
            cart?.map(product => <SingleCartProduct key={product._id} product={product}  />)
          }
        </div>
        <PriceDetails />
      </div>
    </>
  )
}
