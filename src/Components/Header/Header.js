import React from 'react'
import './Header.css'
import headerImg from './Images/head-img-6.png'
import { NavLink } from 'react-router-dom'
export const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='header-left'>
          <p className='sale-on'>winter sale is on</p>
          <h3 className='header-title'>Polish Your Fashion to Perfection</h3>
          <p className='header-desc'>Discover the World of Online Shopping.</p>
          <NavLink to='/productlisting' className='exploreMore-link'>Explore More</NavLink>
          <div className='toggle-div'>

         
            <img src={headerImg} alt="header" className='img' />
          </div>
        </div>

      </div>

    </div>
  )
}
