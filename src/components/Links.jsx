import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShopC from './ShopC'

export const Links = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="grid grid-cols-[1fr_1fr_2fr_1fr]  font-poppins-light text-md ">
      <div
        className=" m-auto cursor-pointer "
        onMouseEnter={() => setShow(true)}
      >
        Shop
      </div>
      <Link to="/onSales" className=" m-auto ">
        on Sale
      </Link>
      <Link to="/iASearch" className="m-auto ">
        IA Search
      </Link>

      {show && <ShopC setShow={setShow} />}
    </div>
  )
}

export default Links
