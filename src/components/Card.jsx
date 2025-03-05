import React from 'react'

export const Card = ({ src, title }) => {
  return (
    <div className="w-[190px] h-[250px] transition-transform duration-300 ease-in-out hover:scale-110 rounded-[30px] bg-[#e0e0e0] m-10 shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] grid grid-row-2">
      <img
        src={src}
        alt={title}
        className="object contain m-auto rounded-[30px] h-[200px]"
      />
      <p className="font-poppins-regular ml-5"> {title}</p>
    </div>
  )
}

export default Card
