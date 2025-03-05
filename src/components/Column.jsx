import React from 'react'
import { motion } from 'framer-motion'
// const styles = {
//   main: '',
//   column: '',
//   imageContainer: '',
// }
import styles from '../../src/page.module.scss'
export const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src, index) => {
        return (
          <div key={index} className={styles.imageContainer}>
            <img src={src} className="object-fill" alt="image" />
          </div>
        )
      })}
    </motion.div>
  )
}

export default Column
