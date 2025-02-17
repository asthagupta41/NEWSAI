import React from 'react'
import { motion } from 'motion/react'

const App = () => {
  return (
    <div>
      <motion.h2
      //  initial={{ scale: 0 }}
      //  whileHover={{scale: 1}}
      //  transition={{duration : 0.5}}
       animate={{ rotate : 360 }} className='text-3xl text-red-500'>
        App
      </motion.h2>
    </div>
  );
}

export default App