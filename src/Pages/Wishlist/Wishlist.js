import React, { useEffect } from 'react'
import './Wishlist.css';
import { SingleProduct } from '../../Components/SingleProdcut/SingleProduct';
import { DataState } from '../../Contexts/Data/DataContext';

import empty_wishlist from "../../Assets/empty_wishlist.svg"

export const Wishlist = () => {

  const {state:{wishlist}}=DataState()

  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
{wishlist?.length>0?<div>
<h2 className='text-center top-margin'>My Wishlist({wishlist?.length})</h2>
      <div className='wishlist-container'>
        {
          wishlist?.map(product => <SingleProduct key={product._id} product={product} />)
        }
      </div>
</div>:
<div className="text-center">
<img src={empty_wishlist} alt="empty_cart" height={250} width={250}/>
<h2 className="text-center top-margin">Your Wishlist is Empty ☹️</h2>
</div>}

    
    </>
  )
}
