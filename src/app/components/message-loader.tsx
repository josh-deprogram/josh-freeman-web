import { motion } from 'framer-motion';

interface IMsgLoader {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  count?: number;
}

export default function MessageLoader(props: IMsgLoader) {
  const { count = 3, size = 'medium', color = 'bg-brand-400' } = props;
  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeOut',
    },
    backgroundColor: {
      duration: 0.4,
      yoyo: Infinity,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeOut',
    },
  };

  return (
    <div className="flex flex-row scale-75 self-start">
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className={`h-2 w-2 p-2 mt-4 mb-4 ${color} rounded-lg mr-2`}
          transition={{
            y: { ...bounceTransition.y, delay: i * 0.15 },
            backgroundColor: { ...bounceTransition.backgroundColor },
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: ['25%', '-50%'],
            backgroundColor: ['#f2ff41', '#d1b800'],
          }}
        ></motion.span>
      ))}
    </div>
  );
}
