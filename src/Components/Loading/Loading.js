import React from 'react'
import loading from "../../Assets/loading.gif"
import "./Loading.css"
export const Loading = () => {
  return (
    <div className='loading-div'>
        <img src={loading} alt='loading' className='first-loading'/>
    </div>
  )
}
