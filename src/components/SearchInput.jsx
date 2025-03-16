import React from 'react'
import { loop } from '../../assets'
import InputField from './InputField'

export const SearchInput = () => {
  return (
    <div
      className="grid grid-cols-[1fr_8fr] 
    border-0 rounded-2xl gap-5  bg-gray-200"
    >
      <div className=" border-black h-[30px]">
        <img
          src={loop}
          alt="Search"
          className="w-full h-full object-contain "
        />
      </div>

      {/* <input
        type="text"
        className="w-full h-full  focus:outline-none text-start m-auto font-poppins-regular text-sm"
        placeholder="search what you're interested in"
      /> */}
      <InputField
        placeholder={"search what you're interested in"}
        styles={
          'w-full h-full  focus:outline-none text-start m-auto font-poppins-regular text-sm'
        }
        type={'text'}
      />
    </div>
  )
}

export default SearchInput
