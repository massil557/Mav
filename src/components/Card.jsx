import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Card = ({
  id,
  img,
  name,
  price = 2000,
  favorite,
  rated = 3,
  isOnSale = true,
  amount = 0.4,
}) => {
  const navigate = useNavigate()

  const handelClick = () => {
    navigate(`/product/${id}`)
  }
  const [isFavorite, setIsFavorite] = useState(favorite)
  return (
    <div className="w-[200px] h-[320px] cursor-pointer overflow-hidden font-poppins-regular m-10">
      <img
        src={img}
        alt={name}
        className="object contain  m-auto mt-0 mb-0  h-[200px]  transition-transform duration-300 ease-in-out hover:scale-110"
        onClick={handelClick}
      />
      <div className="w-full mt-3 ml-1">
        <p className=" mb-3"> {name}</p>
        <div>
          {Array.from({ length: rated }).map((_, i) => (
            <i key={i} className="fa-solid fa-star text-yellow-500 "></i>
          ))}
          {Array.from({ length: 5 - rated }).map((_, i) => (
            <i key={i} className="fa-regular fa-star text-yellow-500"></i>
          ))}
        </div>
        {isOnSale ? (
          <div>
            <p className="line-through">{`${price}DA`}</p>
            <div className="flex justify-between  ">
              <p>{`${price - amount * price}DA`}</p>
              <i
                className={
                  isFavorite
                    ? 'fa-solid fa-heart fa-lg text-red-500 mt-[11px] mr-[7px] transition-transform duration-300 ease-in-out hover:scale-130'
                    : 'fa-regular fa-heart fa-lg text-gray-500 mt-[11px] mr-[7px] transition-transform duration-300 ease-in-out hover:scale-130'
                }
                onClick={() => setIsFavorite(!isFavorite)}
              ></i>
            </div>
          </div>
        ) : (
          <div className="flex justify-between  ">
            <p>{`${price}DA`}</p>
            <i
              className={
                isFavorite
                  ? 'fa-solid fa-heart fa-lg text-red-500 mt-[11px] mr-[7px] transition-transform duration-300 ease-in-out hover:scale-130'
                  : 'fa-regular fa-heart fa-lg text-gray-500 mt-[11px] mr-[7px] transition-transform duration-300 ease-in-out hover:scale-130'
              }
              onClick={() => setIsFavorite(!isFavorite)}
            ></i>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
