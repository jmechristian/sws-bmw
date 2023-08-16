'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';

const FadeIn = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FadeIn;
