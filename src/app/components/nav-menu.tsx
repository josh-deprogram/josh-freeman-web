'use client';
import Image from 'next/image';
import NextLink from 'next/link';
import { Link } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Logo from './logo';
interface INavProps {
  visible: boolean;
  title?: string;
  links?: string[];
  showAuthNav: boolean;
  subpage?: boolean;
  username?: string;
  onClose?: (value: boolean) => void;
}

export default function NavMenu(props: INavProps) {
  const { visible = false, subpage } = props;
  const [menuVisible, setMenuVisible] = useState(visible);

  const links = [
    {
      title: 'Experience',
      url: 'experience',
    },
    {
      title: 'Skills',
      url: 'skills',
    },
    {
      title: 'Ask me',
      url: 'ask',
    },
    {
      title: 'Contact Me',
      url: '/contact',
    },
  ];

  useEffect(() => {
    setMenuVisible(visible);
  }, [visible]);

  const onMenuClose = () => {
    props.onClose && props.onClose(false);
    setMenuVisible(false);
  };

  const variants = {
    open: { opacity: 1, x: '-100%' },
    closed: { opacity: 1, x: '0%' },
    txtOpen: { opacity: 1, x: -2 },
    txtClosed: { opacity: 0, x: 50 },
    // bgOpen: { opacity: 1, x: '0%' },
    // bgClosed: { x: '100%' },
  };

  return (
    <AnimatePresence>
      <motion.div
        animate={menuVisible ? 'open' : 'closed'}
        exit={{ opacity: 1, x: '0%' }}
        variants={variants}
        transition={{ ease: 'easeOut', duration: 0.25 }}
        className={`md:hidden top-[0px] fixed left-[100%] w-full h-screen overflow-x-hidden z-20 ${
          menuVisible ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="md:hidden top-0 left-0 w-full h-full">
          <motion.div
            animate={menuVisible ? 'bgOpen' : 'bgClosed'}
            variants={variants}
            className="bg-brand-600 w-full h-full absolute z-100 opacity-100"
          />
          <div
            className="w-full h-full absolute z-40 opacity-100
                p-4 md:p-24
                flex flex-col flex-1 justify-start items-center"
          >
            <div className="flex flex-col flex-1 w-full h-full items-start justify-start pt-20">
              {links.map((link, i) => (
                <motion.div
                  key={link.title}
                  animate={menuVisible ? 'txtOpen' : 'txtClosed'}
                  variants={variants}
                  transition={{
                    ease: 'linear',
                    delay: 0.2 + i * 0.1,
                    duration: 0.1,
                  }}
                >
                  {link.url === '/contact' ? (
                    <NextLink
                      key={link.title}
                      href={link.url}
                      className="w-full text-3xl transition-colors border-solid 
              mt-1 mb-1 flex justify-start items-center p-0 pt-2 pb-2 
              w-60 text-hype-dark-950 text-brand-300
              hover:opacity-50 hover:text-brand-800 hover:border-brand-800"
                    >
                      <h1 className={'TTFirsFont'}>{link.title}</h1>
                    </NextLink>
                  ) : (
                    <Link
                      key={link.title}
                      to={link.url}
                      onClick={onMenuClose}
                      offset={-90}
                      className="w-full text-3xl transition-colors border-solid 
              mt-1 mb-1 flex justify-start items-center p-0 pt-2 pb-2 
              w-60 text-hype-dark-950 text-brand-300
               hover:opacity-50 hover:text-brand-800 hover:border-brand-800"
                    >
                      <h1 className={'TTFirsFont'}>{link.title}</h1>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
