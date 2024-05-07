'use client';

import { motion } from 'framer-motion';
import { colors } from '../config';

export default function ContentBlock(props: {
  children: React.ReactNode;
  className?: string;
  showOnce?: boolean;
}) {
  const baseClasses = `flex flex-col justify-center items-start px-4 md:px-12
  bg-brand-dark-100 
  mx-4 md:mx-14 pt-4 pb-4 md:pt-10 md:pb-10 max-w-6xl
  border-brand-dark-300 relative overflow-hidden `;

  const combinedClasses = `${baseClasses} ${props.className}`;

  return (
    <motion.div
      initial={{
        // opacity: 0,
        backgroundColor: colors.brand[200],
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        backgroundColor: colors['brand-dark'][100],
      }}
      viewport={{ once: props.showOnce || false }}
      className={combinedClasses}
    >
      <motion.div
        // whileTap={{ scale: 0.95 }}
        initial={{
          opacity: 0,
          translateY: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          translateY: 0,
        }}
        viewport={{ once: props.showOnce || false }}
        className={'w-full'}
      >
        {props.children}
      </motion.div>
    </motion.div>
  );
}
