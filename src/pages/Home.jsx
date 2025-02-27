import React from 'react'
import Card from '../components/Card'
import { dark, magma, emerald, perfume, tint, powder } from '../../assets'
export const Home = () => {
  return (
    <>
      <h2 className="font-poppins-semibold ml-5 mb-5 text-xl ">
        Welcome Massil
      </h2>
      <div className="w-full"></div>

      <main className="grid grid-rows-3 ">
        <div className="m-auto relative">
          <h1 className="font-poppins-semibold text-3xl ml-[-100px] absolute -left-8	 ">
            Best Sellers
          </h1>
          <div className="grid grid-cols-3 m-auto">
            <Card src={dark} title="Polo T-Shirt Black" />
            <Card src={magma} title="Polo T-Shirt Magma" />
            <Card src={emerald} title="Polo T-Shirt Emerald" />
          </div>
        </div>
        <div className="m-auto relative">
          <h1 className="font-poppins-semibold text-3xl ml-[-100px] absolute -left-8">
            Men's Best Sellers
          </h1>
          <div className="grid grid-cols-3 m-auto">
            <Card src={dark} title="Polo T-Shirt Black" />
            <Card src={magma} title="Polo T-Shirt Magma" />
            <Card src={emerald} title="Polo T-Shirt Emerald" />
          </div>
        </div>
        <div className="m-auto relative">
          <h1 className="font-poppins-semibold text-3xl ml-[-100px] absolute -left-8">
            Women's Best Sellers
          </h1>
          <div className="grid grid-cols-3 m-auto">
            <Card src={perfume} title="Perfume" />
            <Card src={tint} title="Skin Tint" />
            <Card src={powder} title="Skin Powder" />
          </div>
        </div>
      </main>
    </>
  )
}
export default Home
