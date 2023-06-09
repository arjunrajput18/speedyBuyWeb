import React, { useState } from "react";
import { MdFilterAlt } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import "./Filters.css";
import { DataState } from "../../../Contexts/Data/DataContext";
import { AiFillStar } from "react-icons/ai";

export const Filters = () => {
  const [isFilters, setIsFilters] = useState(false);
  const [priceRange, setPriceRange] = useState(1500);
  const {
    dispatch,
    state: {
      filters: { sort, selectedCategories, selectedSizes, byStock, rating },
    },
  } = DataState();

  const handleRangeChange = (value) => {
    dispatch({ type: "FILTER_BY_RATING", payload: value });
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
    dispatch({ type: "FILTER_BY_PRICE_RANGE", payload: e.target.value });
  };

  return (
    <div>
      <div onClick={() => setIsFilters((prev) => !prev)} className="btn-box">
        {isFilters ? (
          <span className="hide-filters">
            <RxCross1 />{" "}
          </span>
        ) : (
          <div>
            <button className="filter-btn">
              <span className="filters-head">Filters</span>
              <MdFilterAlt className="filter-icon" />
            </button>
          </div>
        )}
      </div>

      <div
        className="filters-box"
        style={{ display: isFilters ? "flex" : "none" }}
      >
       
        <div className="filters-top">
          <h2>Filters</h2>
          <button
            onClick={() => dispatch({ type: "CLEAR_ALL_FILTERS" })}
            className="clear-filters font-1-3"
          >
            Clear
          </button>
        </div>
   
        <h4 className="font-1-2 top-margin margin-bottom-1"> Price Range</h4>
        <div className="bottom-margin-md">
          <input
            type="range"
            className="ratings-box flex justify-between"
            onChange={handlePriceRangeChange}
            value={priceRange}
            min="500"
            max="2000"
            step={500}
          />

          {["500", "1000", "1500", "2000"].map((data) => (
            <span
              className={`price-num ${priceRange === data && "font-bold"}`}
              key={data}
            >
              {data}
            </span>
          ))}
        </div>
        <div>
          <label className="cursor-pointer top-margin bottom-margin-md display-inline-block ">
            <input
              type="checkbox"
              onChange={() => dispatch({ type: "BY_STOCK" })}
              checked={byStock}
            />
            <span className="out-of-stock-input">Include Out of Stock</span>
          </label>
        </div>
        <h4 className="font-1-2  top-margin margin-bottom-1">Sort By Price</h4>

        <label htmlFor="lowToHigh" className="bottom-margin-md ">
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: "SORT_BY_PRICE", payload: "LOW_TO_HIGH" })
            }
            className="cursor-pointer"
            checked={sort === "LOW_TO_HIGH"}
          />

          <span className="display-inline-block bottom-margin-md">
            Low To High
          </span>
        </label>

        <label htmlFor="highToLow" className="bottom-margin-md ">
          <input
            type="radio"
            name="sort"
            className="cursor-pointer"
            onChange={() =>
              dispatch({ type: "SORT_BY_PRICE", payload: "HIGH_TO_LOW" })
            }
            checked={sort === "HIGH_TO_LOW"}
          />
          <span className="display-inline-block bottom-margin-md ">
            {" "}
            High To Low
          </span>
        </label>

   
        <h4 className=" font-1-2  top-margin margin-bottom-1">Categories</h4>
        <div className="flex direction-column">
          {["Men", "Women", "Accessories"].map((category) => (
            <label htmlFor={category}  key={category}>
              <input
                type="checkbox"
                className="bottom-margin-md font-roboto cursor-pointer"
                onChange={() =>
                  dispatch({ type: "FILTER_BY_CATEGORIES", payload: category })
                }
                checked={selectedCategories.includes(category)}
              />{" "}
              <span className="display-inline-block bottom-margin-md">
                {category}
              </span>
            </label>
          ))}
        </div>
   
        <h4 className="bottom-margin-md font-1-2  top-margin margin-bottom-1 ">
          Ratings
        </h4>

        <div className="ratings-box ">
          {[1, 2, 3, 4].map((num) => (
            <label key={num}>
              <input
                type="radio"
                className="bottom-margin-md radio-rating cursor-pointer"
                onChange={() => handleRangeChange(num)}
                value={num}
                name={"group1-rating"}
                checked={rating === num}
              />
              {num}{" "}
              <span className="star-color">
                <AiFillStar />
              </span>{" "}
              & above{" "}
            </label>
          ))}
        </div>

        <h4 className=" font-1-2  top-margin margin-bottom-1  bottom-margin-md font-roboto">
          Sizes
        </h4>
        <div className="flex direction-column">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <label htmlFor="" key={size}>
              <input
                type="checkbox"
                className="bottom-margin-md font-roboto cursor-pointer"
                checked={selectedSizes.includes(size)}
                onChange={() =>
                  dispatch({ type: "FILTER_BY_SIZE", payload: size })
                }
              />{" "}
              <span className="display-inline-block bottom-margin-md">
                {size}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
