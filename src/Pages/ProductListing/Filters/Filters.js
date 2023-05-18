import React, { useState } from 'react'
import { MdFilterAlt } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import './Filters.css'
import { DataState } from '../../../Contexts/Data/DataContext'

export const Filters = () => {
  const [isFilters, setIsFilters] = useState(false);
  const [rangeValue, setRangeValue] = useState(3);
  const { dispatch, state: { filters: { sort, selectedCategories, selectedSizes } } } = DataState();

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value)
    dispatch({ type: "FILTER_BY_RATING", payload: e.target.value })
  }

  return (
    <div>
      <div onClick={() => setIsFilters(prev => !prev)} className='btn-box'>
        {isFilters ? <span className='hide-filters'><RxCross1 /> </span> : <div>
          <button className='filter-btn'><span className='filters-head'>Filters</span><MdFilterAlt className='filter-icon' /></button>
        </div>}
      </div>

      <div className='filters-box' style={{ display: isFilters ? "flex" : "none" }}>
        {/* By price */}
        <div className='filters-top'>
          <h2>Filters</h2>
          <button onClick={() => dispatch({ type: "CLEAR_ALL_FILTERS" })} className='clear-filters font-1-3'>Clear</button>
        </div>
        <h4 className='font-1-2  top-margin margin-bottom-1'>Sort By Price</h4>

        <label htmlFor="lowToHigh" className='cursor-pointer bottom-margin-md' onClick={() => dispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" })}>
          <input type="radio" name="sort" checked={sort === "LOW_TO_HIGH"} />
          <span className='display-inline-block bottom-margin-md'>Low To High</span>
        </label>

        <label htmlFor="highToLow" onClick={() => dispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" })} className='cursor-pointer bottom-margin-md '>
          <input type="radio" name="sort" checked={sort === "HIGH_TO_LOW"} />
          <span className='display-inline-block bottom-margin-md '>  High To Low</span>
        </label>

        {/* Categories */}
        <h4 className=' font-1-2  top-margin margin-bottom-1'>Categories</h4>
        <div className='flex direction-column'>
          {
            ["Men", "Women", "Kids"].map(category => <label htmlFor={category} className='cursor-pointer' onClick={() => dispatch({ type: "FILTER_BY_CATEGORIES", payload: category })}>
              <input type="checkbox" className='bottom-margin-md font-roboto' checked={selectedCategories.includes(category)} /> <span className='display-inline-block bottom-margin-md'>{category}</span>
            </label>)
          }
        </div>


        {/* Sizes */}
        <h4 className=' font-1-2  top-margin margin-bottom-1  bottom-margin-md font-roboto'>Sizes</h4>
        <div className='flex direction-column'>

          {
            ["S", "M", "L", "XL", "XXL"].map(size => <label htmlFor="" className='cursor-pointer' key={size} onClick={() => dispatch({ type: "FILTER_BY_SIZE", payload: size })}>
              <input type="checkbox" className='bottom-margin-md font-roboto' checked={selectedSizes.includes(size)} /> <span className='display-inline-block bottom-margin-md'>{size}</span>
            </label>)
          }
        </div>


        {/* Ratings */}
        <h4 className='bottom-margin-md font-1-2  top-margin margin-bottom-1 '>Ratings</h4>

        <label htmlFor="" className='range-input cursor-pointer'>
          <input type="range" id="range" className='bottom-margin-md' onChange={handleRangeChange} min="1" max="5" value={rangeValue} />
        </label>
        <div className='ratings-box flex justify-between' >
          <span className='rating-num'>1</span>
          <span className='rating-num'>2</span>
          <span className='rating-num'>3</span>
          <span className='rating-num'>4</span>
          <span className='rating-num'>5</span>
        </div>
      </div>
    </div >
  )
}
