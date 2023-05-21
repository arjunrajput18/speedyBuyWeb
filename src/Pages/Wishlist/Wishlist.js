import React, { useEffect } from 'react'
import './Wishlist.css';
import { SingleProduct } from '../../Components/SingleProdcut/SingleProduct';
import { DataState } from '../../Contexts/Data/DataContext';



export const Wishlist = () => {

  const {state:{wishlist}}=DataState()

  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <h2 className='text-center top-margin'>My Wishlist(6)</h2>
      <div className='wishlist-container'>
        {
          wishlist?.map(product => <SingleProduct key={product._id} product={product} />)
        }
      </div>
    </>
  )
}
