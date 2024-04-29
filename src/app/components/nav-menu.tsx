'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Logo from './logo';
interface INavProps {
  visible: boolean;
  title?: string;
  links?: string[];
  showAuthNav: boolean;
  username?: string;
  onClose?: (value: boolean) => void;
}

export default function NavMenu(props: INavProps) {
  const { visible = false, showAuthNav } = props;
  const [menuVisible, setMenuVisible] = useState(visible);

  const links = showAuthNav
    ? [
        {
          title: 'Manage',
          url: '/account',
        },
        {
          title: 'Profile',
          url: `/${props.username || ''}`,
        },
      ]
    : [
        {
          title: 'Work',
          url: '/work',
        },
        {
          title: 'Who',
          url: '/who',
        },
        {
          title: 'Services',
          url: '/services',
        },
        {
          title: 'Get in touch',
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
    open: { opacity: 1, x: '0%' },
    closed: { opacity: 0.7, x: '100%' },
    txtOpen: { opacity: 1, x: '0%' },
    txtClosed: { opacity: 0.7, x: '100%' },
    bgOpen: { opacity: 1, x: '0%' },
    bgClosed: { x: '100%' },
  };

  return (
    <div
      className={`md:hidden top-[0px] fixed left-0 w-screen h-screen overflow-x-hidden z-50 ${
        menuVisible ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <motion.div
        animate={menuVisible ? 'open' : 'closed'}
        variants={variants}
        transition={{ ease: 'easeOut' }}
        className="md:hidden translate-x-[-100%] top-0 left-0 w-full h-full"
      >
        <motion.div
          animate={menuVisible ? 'bgOpen' : 'bgClosed'}
          variants={variants}
          className="bg-brand-300 w-full h-full absolute z-100 opacity-100"
        />
        <div
          className="w-full h-full absolute z-40 opacity-100
                p-4 md:p-24
                flex flex-col flex-1 justify-start items-center"
        >
          {menuVisible && (
            <div
              className={'flex flex-row items-center justify-between w-full'}
            >
              <div onClick={onMenuClose} className="cursor-pointer">
                <Logo />
              </div>
              <div
                onClick={onMenuClose}
                className="cursor-pointer justify-center flex items-center p-2 pr-0"
              >
                <Image
                  src="/images/close-x.svg"
                  alt="Close menu"
                  width={24}
                  height={24}
                  priority
                  style={{ fill: 'white', stroke: 'white' }}
                />
              </div>
            </div>
          )}
          {menuVisible && (
            <div className="flex flex-col flex-1 w-full h-full items-start justify-center">
              {links.map((link, i) => (
                <motion.div
                  key={link.title}
                  animate={menuVisible ? 'txtOpen' : 'txtClose'}
                  variants={variants}
                  transition={{ ease: 'easeOut', delay: i * 200 }}
                >
                  <Link
                    key={link.title}
                    href={link.url}
                    className="w-full text-5xl transition-colors border-solid 
              mt-1 mb-1 flex justify-start items-center p-0 pt-2 pb-2 
              w-60 text-hype-dark-950 font-semibold
               hover:bg-brand-300 hover:text-brand-800 hover:border-brand-800"
                  >
                    <h1 className={'TTHovesFont'}>{link.title}</h1>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <motion.div
          animate={menuVisible ? 'bgOpen' : 'bgClosed'}
          variants={variants}
          transition={{ delay: 100 }}
        >
          <div className="w-60 ml-4 absolute bg-black h-1 bottom-8"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}
