import Card from '../components/Card'
import { useTransform, useScroll } from 'framer-motion'
import MotionComponent from '../components/MotionComponent'
import Column from '../components/Column'
import styles from '../page.module.scss'
import { useRef } from 'react'
import { motion } from 'framer-motion'

import {
  dark,
  magma,
  emerald,
  perfume,
  tint,
  powder,
  pictsTab,
} from '../../assets'
import CostumeButton from '../components/CostumeButton'
const Banner_image =
  'https://content.asos-media.com/-/media/homepages/mw/2025/march/03-gbl/wk27_28/wk27_28/heroes/mw_dt_hero_2880x1280_colour.jpg'
export const Home = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 3.3])
  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 2.7]
  )
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, window.innerHeight * 1.5]
  )
  const y3 = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * 2])

  return (
    <div className="pt-[50px] overflow-x-hidden">
      {/* <div className="">
        <img
          src={Banner_image}
          alt=""
          className="object-cover min-h-[100vh] "
        />
      </div> */}
      <div className="relative w-full h-screen">
        <img
          src={Banner_image}
          alt="Banner"
          className="object-cover w-full h-full"
        />

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute font-poppins-regular bottom-90 left-1/2 -translate-x-1/2 text-white text-3xl md:text-5xl font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)] px-4 text-center whitespace-nowrap"
        >
          Discover the Perfect Style—Crafted Just for You
        </motion.div>
      </div>

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
        <div className="bg-[#181818] min-w-[100vw] h-[120px] m-auto ">
          <p className="font-poppins-semibold pt-4 text-white text-5xl text-center  mb-5">
            All of this and more on MAVERICK
          </p>

          <div className="flex items-center justify-center w-full m-auto">
            <CostumeButton text="Buy Now" w="150px" hg="30px" />
          </div>
        </div>
      </MotionComponent>

      <main className="grid grid-rows-3 mt-[150px] ">
        <MotionComponent amount={0.5}>
          <div className="relative">
            <h1 className="font-poppins-semibold text-3xl ml-[-100px]  absolute left-[110px]	 ">
              Best Sellers
            </h1>
            <div className="grid grid-cols-5 mt-10 m-auto">
              <Card img={dark} name="Polo T-Shirt Black" />
              <Card img={magma} name="Polo T-Shirt Magma" />
              <Card img={emerald} name="Polo T-Shirt Emerald" />
              <Card img={dark} name="Polo T-Shirt Black" />
              <Card img={magma} name="Polo T-Shirt Magma" />
            </div>
          </div>
        </MotionComponent>
        <MotionComponent amount={0.5}>
          <div className="relative">
            <h1 className="font-poppins-semibold text-3xl ml-[-100px] absolute left-[110px]">
              Men's Best Sellers
            </h1>
            <div className="grid grid-cols-5 m-auto mt-10">
              <Card img={dark} name="Polo T-Shirt Black" />
              <Card img={magma} name="Polo T-Shirt Magma" />
              <Card img={emerald} name="Polo T-Shirt Emerald" />
              <Card img={dark} name="Polo T-Shirt Black" />
              <Card img={magma} name="Polo T-Shirt Magma" />
            </div>
          </div>
        </MotionComponent>
        <MotionComponent amount={0.5}>
          <div className="relative">
            <h1 className="font-poppins-semibold text-3xl ml-[-100px] absolute left-[110px]">
              Women's Best Sellers
            </h1>
            <div className="grid grid-cols-5 mt-10 m-auto">
              <Card img={perfume} name="Perfume" />
              <Card img={tint} name="Skin Tint" />
              <Card img={powder} name="Skin Powder" />
              <Card img={tint} name="Skin Tint" />
              <Card img={powder} name="Skin Powder" />
            </div>
          </div>
        </MotionComponent>
      </main>
    </div>
  )
}
export default Home
