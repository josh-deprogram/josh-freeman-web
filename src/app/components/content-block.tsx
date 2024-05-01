'use client';

import { motion } from 'framer-motion';
import { colors } from '../config';

export default function ContentBlock(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const baseClasses = `flex flex-col justify-center items-start px-4 md:px-12
  bg-brand-dark-100 
  mx-4 md:mx-14 pt-4 pb-4 md:pt-10 md:pb-10 max-w-6xl
  border-brand-dark-300 relative`;

  const combinedClasses = `${baseClasses} ${props.className}`;

  return (
    <motion.div
      initial={{
        opacity: 0.6,
        translateY: 60,
        backgroundColor: colors.brand[300],
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        backgroundColor: colors['brand-dark'][100],
      }}
      viewport={{ once: false }}
      className={combinedClasses}
    >
      {props.children}
    </motion.div>
  );
}
