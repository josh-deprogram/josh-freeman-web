import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '../assets/page.module.css';
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

interface ILinkProps {
  title: string;
  description?: string;
  url: string;
  page?: boolean;
}

export default function LinkCard(props: ILinkProps) {
  const { title, description, url, page = true } = props;
  if (page) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, translateY: 10 }}
        animate={{ opacity: 1, scale: 1, translateY: 0 }}
        transition={{
          delay: 0.5,
        }}
      >
        <Link
          href={url}
          className={
            'border-hype-700 text-xl border-solid border-4 transition-colors border-solid mt-2 mb-2 flex justify-center items-center p-3 pt-6 pb-6 rounded-lg w-60 hover:bg-hype-dark-950 hover:text-hype-600 hover:border-hype-500'
          }
        >
          <h2 className={''}>{title}</h2>
          <p className={inter.className}>{description}</p>
        </Link>
      </motion.div>
    );
  }
  return null;
}
