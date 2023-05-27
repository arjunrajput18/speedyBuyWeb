import React from 'react'
import { NavLink } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div className='text-center margin-top-1'>
<h1>Page Not Found</h1>
{/* <></> */}
<p  className='margin-top-1 font-2'>click Here to see 👉🏻 <NavLink to="/productlisting">Products</NavLink></p>
    </div>
  )
}
