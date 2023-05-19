import React from 'react'
import './Header.css'
import headerImg from './Images/head-img-6.png'
import { NavLink, useNavigate,  } from 'react-router-dom'
import  {DataState} from "../../Contexts/Data/DataContext"
export const Header = () => {
  const {dispatch}=DataState()
const  navigate=useNavigate()
  const clickHandler=()=>{
    dispatch({type:"CLEAR_ALL_FILTERS"})
    navigate(`/productlisting`)
  }
  return (
    <div>
      <div className='header'>
        <div className='header-left'>
          <p className='sale-on'>winter sale is on</p>
          <h3 className='header-title'>Polish Your Fashion to Perfection</h3>
          <p className='header-desc'>Discover the World of Online Shopping.</p>
          <button  className='exploreMore-link' onClick={clickHandler}>Explore More</button>
          <div className='toggle-div'>

         
            <img src={headerImg} alt="header" className='img' />
          </div>
        </div>

      </div>

    </div>
  )
}
