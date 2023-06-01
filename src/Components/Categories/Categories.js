import React from 'react'
import './Categories.css'
import { SingleCategory } from './SingleCategory'
import { DataState } from '../../Contexts/Data/DataContext'


export const Categories = () => {
  const { state: { categories } } = DataState();


  return (
    <>

      <p className='category-header'>Featured shops by categories</p>
      <div className='categories'>
        {
          categories?.map(category => <SingleCategory category={category} key={category._id} />)
        }
      </div>
    </>
  )
}
