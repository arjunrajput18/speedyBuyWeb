import React, { useState } from 'react'
import { AiOutlineMenu,  AiOutlineShoppingCart, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { MdOutlineLocalMall } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import './Navbar.css'
import { NavLink,  useNavigate } from 'react-router-dom'
import { DataState } from '../../Contexts/Data/DataContext'
// import { AuthState } from '../../Contexts/Auth/AuthContext'


export const Navbar = () => {
  const [menuClass, setMenuClass] = useState("hide-menu");
  // const [searchBar, setSearchBar] = useState(false);

  const { state: { products }, dispatch } = DataState()
  const navigate = useNavigate();

  const handleMenuClick = (data) => {
    const updatedDisplay = data === "hide" ? "hide-menu" : "menus";
    setMenuClass(updatedDisplay)
  }

  const handleSearchProduct = (e) => {
    navigate("/productlisting");
    dispatch({ type: "SEARCH_PRODUCT", payload: e.target.value })
  }

  const allProductNames = products.reduce((acc, curr) => acc.includes(curr.itemName) ? acc : [...acc, curr.itemName], [])

  return (
    <>
      <nav className='navigation flex justify-between align-center'>
        <h1 className='navigation-header'><NavLink className="header-link" to="/" >SpeedyBuy</NavLink></h1>
            <div>
            <input type="text" list="search-products" className='search-bar' placeholder='Search Product' onChange={handleSearchProduct} />
            <span></span>
          </div>
        
        <datalist id='search-products' >
          {
            allProductNames.map(name => <option key={name}>{name}</option>)
          }
        </datalist>

        {
          menuClass === "hide-menu" ? <div className='navigation-menu' onClick={() => handleMenuClick()}><AiOutlineMenu /></div> : <div className='navigation-menu' onClick={() => handleMenuClick("hide")}><RxCross1 /></div>
        }

      

        <ul className={menuClass}>
          {/* <li className='menu-item'><NavLink onClick={() => setSearchBar(prev => !prev)} className="nav-link">{searchBar ? <RxCross1 /> : <AiOutlineSearch />}</NavLink></li> */}

          <li className='menu-item'>
            <NavLink className="nav-link" to="/productlisting"><MdOutlineLocalMall /></NavLink>
          </li>
          <li className='menu-item'><NavLink to="/wishlist" className="nav-link"><AiOutlineHeart /></NavLink></li>
          <li className='menu-item'><NavLink to="/cart" className="nav-link"><AiOutlineShoppingCart /></NavLink></li>
          <li className='menu-item'><NavLink to="/profile" className="nav-link"><AiOutlineUser /></NavLink></li>
        </ul>

        <ul className='menus-md' >
          {/* <li className='menu-item'><NavLink onClick={() => setSearchBar(prev => !prev)} className="nav-link">{searchBar ? <RxCross1 /> : <AiOutlineSearch />}</NavLink></li> */}
          <li className='menu-item'><NavLink className="nav-link" to="/productlisting" ><MdOutlineLocalMall /></NavLink></li>
          <li className='menu-item'><NavLink to="/wishlist" className="nav-link"><AiOutlineHeart /></NavLink></li>
          <li className='menu-item'><NavLink to="/cart" className="nav-link"><AiOutlineShoppingCart /></NavLink></li>
          <li className='menu-item'><NavLink to="/profile" className="nav-link"><AiOutlineUser /></NavLink></li>
        </ul>

      </nav>
    </>
  )
}
