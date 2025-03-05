import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
const DImage = ({ src }) => {
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey((prevKey) => prevKey + 1) // Change key when src updates to re-trigger animation
  }, [src])
  return (
    // <motion.div
    // key={key} // Forces animation to restart when src changes
    // initial={{ scale: 1 }}
    // animate={{ scale: 2 }}
    // transition={{ duration: 1, ease: 'easeInOut' }}
    //   className="rounded-2xl overflow-hidden shadow-lg flex justify-center items-center"
    // >
    <motion.img
      src={src}
      alt="img"
      className="rounded-xl object-cover  h-[300px] w-[270px] transition-all duration-500 ease-in-out object-contain"
    />
    // </motion.div>
  )
}

export default DImage
