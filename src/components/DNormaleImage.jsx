import React from 'react'
import { motion } from 'framer-motion'
export const DnNormalImage = ({ src }) => {
  return (
    <motion.div
      initial={{ opacity: 1.1 }}
      whileHover={{
        opacity: 0.8,
        transition: {
          duration: 1,
        },
      }}
    >
      <img
        src={src}
        alt="img"
        className="rounded-xl object-cover h-[280px] object-contain"
      />
    </motion.div>
  )
}
