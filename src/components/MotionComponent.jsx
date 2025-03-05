import { motion } from 'framer-motion'
export const MotionComponent = ({ children, amount }) => {
  return (
    <motion.div
      className="m-auto relative"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
        },
      }}
      viewport={{
        once: true,
        amount: amount,
      }}
    >
      {children}
    </motion.div>
  )
}
export default MotionComponent
