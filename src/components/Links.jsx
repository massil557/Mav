import React from 'react'
import { Link } from 'react-router-dom'

export const Links = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr_2fr_1fr]  font-poppins-light text-md">
      <Link to="/shop" className=" m-auto ">
        Shop
      </Link>
      <Link to="/onSales" className=" m-auto ">
        on Sale
      </Link>
      <Link to="/" className="m-auto ">
        New Arrivals
      </Link>
      <Link to="/" className=" m-auto ">
        Brands
      </Link>
    </div>
  )
}

export default Links
