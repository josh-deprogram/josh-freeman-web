import { motion } from 'framer-motion';
import { colors } from '../config';

export default function TextAni(props: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { delay = 0.2 } = props;
  const baseClasses = `overflow-hidden`;

  const combinedClasses = `${baseClasses} ${props.className}`;

  return (
    <motion.div ignoreStrict className={combinedClasses}>
      <motion.p
        ignoreStrict
        transition={{
          ease: 'easeOut',
          duration: delay,
        }}
        initial={{ opacity: 0, translateX: -400 }}
        // animate={{ opacity: 1, translateX: 0 }}
        whileInView={{
          opacity: 1,
          translateX: 0,
        }}
        viewport={{ once: false, amount: 'some' }}
      >
        {props.children}
      </motion.p>
    </motion.div>
  );
}
