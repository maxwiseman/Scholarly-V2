'use client'

import { motion } from 'framer-motion'

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.75, type: 'spring' }}
      style={{ width: '100%', overflow: 'hidden', margin: '16px' }}
    >
      {children}
    </motion.div>
  )
}
