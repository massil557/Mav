import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const Card = ({ img, name, price = 2000, favorite, rated }) => {
  return (
    <div className="w-[200px] h-[320px]  overflow-hidden font-poppins-regular m-10  ">
      <img
        src={img}
        alt={name}
        className="object contain  m-auto mt-0 mb-0  h-[200px]  transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <div className="w-full mt-3 ml-1">
        <p className=" mb-3"> {name}</p>
        <div>
          <i className="fa-solid fa-star text-yellow-500 "></i>
          <i className="fa-solid fa-star text-yellow-500 "></i>
          <i className="fa-solid fa-star text-yellow-500 "></i>
          <i className="fa-solid fa-star text-yellow-500 "></i>
          <i className="fa-solid fa-star text-yellow-500 "></i>
        </div>
        <div className="flex justify-between  ">
          <p>{`${price}DA`}</p>
          <i className="fa-regular fa-heart fa-lg text-gray-500 mt-[11px] mr-[7px] transition-transform duration-300 ease-in-out hover:scale-130"></i>
        </div>
      </div>
    </div>
  )
}

export default Card
