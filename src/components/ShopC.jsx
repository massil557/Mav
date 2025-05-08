import React from 'react'
import { motion } from 'framer-motion'
import { manP, womanP } from '../../assets'
import { useNavigate } from 'react-router-dom'
const ShopC = ({ setShow }) => {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ height: 0, opacity: 1 }}
      animate={{ height: 300, opacity: 1 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
      onMouseLeave={() => {
        setShow(false)
      }}
      className=" w-[100vw] shadow-lg  h-[400px] z-20 absolute top-[50px]  bg-white  left-[0px] overflow-hidden "
    >
      <div className=" grid grid-cols-2 h-full w-full">
        <p
          className="font-poppins-semibold text-white bg-black cursor-pointer  text-center m-auto h-full w-full  p-[100px] text-5xl transition-transform duration-300 ease-in-out hover:scale-115"
          onClick={() => {
            navigate('/menProducts')
          }}
        >
          Men's Products
        </p>
        <p
          onClick={() => {
            navigate('/womenProducts')
          }}
          className="font-poppins-semibold  cursor-pointer text-center m-auto h-full p-[100px] text-5xl transition-transform duration-300 ease-in-out hover:scale-115"
        >
          Women's Products
        </p>
      </div>
    </motion.div>
  )
}

export default ShopC
