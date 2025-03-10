import React, { useEffect } from 'react'
import Card from '../components/Card'
import ImageCarousel from '../components/ImageCarousel'
import { useTransform, useScroll, motion } from 'framer-motion'
import MotionComponent from '../components/MotionComponent'
import Column from '../components/Column'
import styles from '../page.module.scss'
import { useRef } from 'react'
import Lenis from '@studio-freight/lenis'

import {
  dark,
  magma,
  emerald,
  perfume,
  tint,
  powder,
  pictsTab,
  sky,
  louboutin,
  makeup,
  elexir,
  skincare,
  Rolex,
} from '../../assets'
import CostumeButton from '../components/CostumeButton'

export const Home = () => {
  // const styles = {
  //   main: '',
  //   gallery: '',
  // }
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 3])
  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 2.5]
  )
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 1.5]
  )
  const y3 = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 2])

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (
    <div className="pt-[100px]">
      <h2 className="font-poppins-semibold ml-5 mb-10 text-xl ">
        Welcome Massil
      </h2>

      {/* <div className="w-full relative mb-10">
        <p className="absolute top-3 left-3 text-4xl w-full  font-poppins-semibold text-center m-auto">
          MAVERICK where Luxury meets Elegance
        </p>
      </div> */}
      {/* <MotionComponent amount={0.7}>
        <div className="w-full font-GreatVibes mb-[150px] pt-[100px] text-white text-5xl  text-center relative mb-2 mt-2 ">
          <img
            src={sky}
            alt="sky"
            className=" object-cover   rounded-xl m-auto"
          />
        </div>
      </MotionComponent> */}

      {/* <motion.p
        className="font-poppins-semibold text-3xl  m-auto text-center mb-[100px] mt-10"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{
          once: true,
          amount: 1,
        }}
      >
        What are you looking for?
      </motion.p> */}

      {/* <div className="w-[1000px] m-auto relative pl-[150px]">
        <MotionComponent amount={1}>
          <div className="grid grid-cols-2 w-full m-auto">
            <img
              src={louboutin}
              alt=""
              className="h-[300px] rounded-xl  mb-10 shadow-2xl "
            />
            <p className="font-poppins-semibold m-auto pr-[200px] text-start text-4xl">
              Shoes
            </p>
          </div>
        </MotionComponent>
        <MotionComponent amount={1}>
          <div className="grid grid-cols-2 w-full m-auto">
            <p className="font-poppins-semibold m-auto pr-[200px] text-start text-4xl">
              Makeup
            </p>

            <img
              src={makeup}
              alt=""
              className="h-[300px] rounded-xl  mb-10 shadow-2xl "
            />
          </div>
        </MotionComponent>
        <MotionComponent amount={1}>
          <div className="grid grid-cols-2 w-full m-auto">
            <img
              src={elexir}
              alt=""
              className="h-[300px] rounded-xl  mb-10 shadow-2xl "
            />
            <p className="font-poppins-semibold m-auto pr-[200px] text-start text-4xl">
              Fragrances
            </p>
          </div>
        </MotionComponent>
        <MotionComponent amount={1}>
          <div className="grid grid-cols-2 w-full m-auto">
            <p className="font-poppins-semibold m-auto pr-[200px] text-start text-4xl">
              Skin Care
            </p>

            <img
              src={skincare}
              alt=""
              className="h-[300px] rounded-xl  mb-10 shadow-2xl "
            />
          </div>
        </MotionComponent>
        <MotionComponent amount={1}>
          <div className="grid grid-cols-2 w-full  m-auto">
            <img
              src={Rolex}
              alt=""
              className="h-[300px] rounded-xl  mb-10 shadow-2xl "
            />
            <p className="font-poppins-semibold m-auto pr-[200px] text-start text-4xl">
              watches
            </p>
          </div>
        </MotionComponent>
      </div> */}

      {/* <MotionComponent amount={0.7}>
        <div className="bg-black w-[1349px] h-[150px] m-auto">
          <p className="font-poppins-semibold pt-10 text-white text-5xl text-center mt-10 mb-5">
            All of this and more on MAVERICK
          </p> */}

      {/* <button className="rounded-2xl ml-[605px]  bg-black bg-white text-sm  w-[150px] h-[30px]  cursor-pointer	font-poppins-regular">
            Buy Now
          </button> */}
      {/* <CostumeButton
            text="Buy Now"
            w="150px"
            hg="30px"
            styles="ml-[605px]"
          />
        </div> */}

      {/* </MotionComponent> */}
      <div className="mb-[200px] h-[100vh]"></div>
      <main className={styles.main}>
        <div className={styles.spacer}></div>

        <div ref={container} className={styles.gallery}>
          <Column images={[pictsTab[0], pictsTab[1], pictsTab[2]]} y={y} />
          <Column images={[pictsTab[3], pictsTab[4], pictsTab[5]]} y={y1} />
          <Column images={[pictsTab[6], pictsTab[7], pictsTab[8]]} y={y2} />
          <Column images={[pictsTab[9], pictsTab[10], pictsTab[11]]} y={y3} />
        </div>
      </main>

      <MotionComponent amount={0.7}>
        <div className="bg-[#181818] min-w-[100vw] h-[150px] m-auto ">
          <p className="font-poppins-semibold pt-10 text-white text-5xl text-center  mb-5">
            All of this and more on MAVERICK
          </p>

          {/* {/* <button className="rounded-2xl ml-[605px]  bg-black bg-white text-sm  w-[150px] h-[30px]  cursor-pointer	font-poppins-regular">
            Buy Now
          </button>  */}
          <div className="flex items-center w-inherit">
            <CostumeButton
              text="Buy Now"
              w="150px"
              hg="30px"
              styles="ml-[605px]"
            />
          </div>
        </div>
      </MotionComponent>

      <main className="grid grid-rows-3 mt-[300px] ">
        <MotionComponent amount={0.5}>
          <h1 className="font-poppins-semibold text-3xl ml-[-100px] absolute -left-8	 ">
            Best Sellers
          </h1>
          <div className="grid grid-cols-3 mt-10 m-auto">
            <Card src={dark} title="Polo T-Shirt Black" />
            <Card src={magma} title="Polo T-Shirt Magma" />
            <Card src={emerald} title="Polo T-Shirt Emerald" />
          </div>
        </MotionComponent>
        <MotionComponent amount={0.5}>
          <h1 className="font-poppins-semibold text-3xl ml-[-100px] absolute -left-8">
            Men's Best Sellers
          </h1>
          <div className="grid grid-cols-3 m-auto mt-10">
            <Card src={dark} title="Polo T-Shirt Black" />
            <Card src={magma} title="Polo T-Shirt Magma" />
            <Card src={emerald} title="Polo T-Shirt Emerald" />
          </div>
        </MotionComponent>
        <MotionComponent amount={0.5}>
          <h1 className="font-poppins-semibold text-3xl ml-[-100px] absolute -left-8">
            Women's Best Sellers
          </h1>
          <div className="grid grid-cols-3 mt-10 m-auto">
            <Card src={perfume} title="Perfume" />
            <Card src={tint} title="Skin Tint" />
            <Card src={powder} title="Skin Powder" />
          </div>
        </MotionComponent>
      </main>
    </div>
  )
}
export default Home
