import { ArrowUpRight, Coins, Home } from 'lucide-react'
import { motion } from 'framer-motion'

export function Stats() {
  return (
    <div className="w-full px-4 mx-auto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg bg-white p-6 shadow-lg"
        >
          <div className="flex items-center justify-center mb-4">
            <Coins className="h-8 w-8 text-green-500" />
          </div>
          <motion.h3 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-2"
          >
            $172.6B
          </motion.h3>
          <p className="text-gray-600 text-sm sm:text-base text-center">2023 Real Estate Transactions</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg bg-white p-6 shadow-lg"
        >
          <div className="flex items-center justify-center mb-4">
            <ArrowUpRight className="h-8 w-8 text-blue-500" />
          </div>
          <motion.h3
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-2"
          >
            20%
          </motion.h3>
          <p className="text-gray-600 text-sm sm:text-base text-center">Annual Market Growth</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-lg bg-white p-6 shadow-lg"
        >
          <div className="flex items-center justify-center mb-4">
            <Home className="h-8 w-8 text-purple-500" />
          </div>
          <motion.h3
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-2"
          >
            0%
          </motion.h3>
          <p className="text-gray-600 text-sm sm:text-base text-center">Personal Income Tax</p>
        </motion.div>
      </div>
    </div>
  )
}
