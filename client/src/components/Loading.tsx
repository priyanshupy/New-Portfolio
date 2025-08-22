import React from 'react';
import { motion } from 'framer-motion';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-primary">
      <div className="text-center">
        {/* Loading Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full mx-auto mb-6"
        />
        
        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-900 mb-2"
        >
          Loading Portfolio
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600"
        >
          Please wait while we prepare your experience...
        </motion.p>
        
        {/* Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-1 mt-4"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
              className="w-2 h-2 bg-primary-600 rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
