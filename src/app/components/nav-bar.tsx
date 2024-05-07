'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { Link } from 'react-scroll';

import { Button, Logo, NavMenu } from '.';
import { useState } from 'react';

interface IBuiltByProps {
  showAuthNav?: boolean;
  username?: string;
  light?: boolean;
  showLogout?: boolean;
  subpage?: boolean;
}

export default function NavBar(props: IBuiltByProps) {
  const { showAuthNav = false, subpage = false, username } = props;
  const [loading, setLoading] = useState(false);
  const [navMenuVisible, setNavMenuVisible] = useState(false);

  const onNavPress = () => {
    setNavMenuVisible(!navMenuVisible);
  };

  const onClose = (value: boolean) => {
    setNavMenuVisible(false);
  };

  const scrollOptions = {
    duration: 150,
    offset: -150,
  };
  return (
    <div
      className={`z-20 w-full self-start fixed top-0 pt-4 pb-4 md:pb-8 left-0 pl-4 pr-4 md:pl-12 md:pr-12 md:pt-10 
      bg-brand-dark-200 overflow-x-hidden z-50
      ${loading ? 'hidden' : 'visible'} `}
    >
      <div className={'flex flex-row justify-between items-center w-full'}>
        <div className="flex content-center cursor-pointer  w-48 z-30 relative">
          {subpage ? (
            <NextLink href="/">
              <Button
                size="sm"
                className="flex flex-row justify-center items-center"
              >
                <span className="pl-2 rotate-180">
                  <Image
                    priority
                    src={'/images/arrow-dark.svg'}
                    width={16}
                    height={16}
                    alt="Call now"
                  />
                </span>
                <span className="">Go Back</span>{' '}
              </Button>
            </NextLink>
          ) : (
            <Link
              to="profile"
              offset={-150}
              onClick={() => onClose(true)}
              duration={scrollOptions.duration}
            >
              <Logo />
            </Link>
          )}
        </div>

        {!subpage && (
          <div
            className="md:hidden pt-2 pb-2 mt-1 -mr-2 z-30"
            onClick={onNavPress}
          >
            <button className="group h-12 w-12 hover:bg-brand-300 transition">
              <div className="grid justify-items-center gap-1.5">
                <span
                  className={`h-1 w-7  bg-brand-dark-900 transition ${
                    navMenuVisible && 'rotate-45 translate-y-[4px]'
                  }`}
                ></span>
                <span
                  className={`h-1 w-7  bg-brand-dark-900 transition ${
                    navMenuVisible && `-rotate-45 -translate-y-[6px]`
                  }`}
                ></span>
              </div>
            </button>
          </div>
        )}

        {subpage ? (
          <></>
        ) : (
          <div className="hidden md:flex w-full items-center justify-end flex-row">
            <Link
              to="experience"
              smooth
              duration={scrollOptions.duration}
              offset={-110}
              className="pr-3"
            >
              <Button variant="outline" size="sm">
                Experience
              </Button>
            </Link>
            <Link
              to="skills"
              smooth
              duration={scrollOptions.duration}
              offset={-110}
              className="pr-3"
            >
              <Button variant="outline" size="sm">
                Skills
              </Button>
            </Link>
            <Link
              to="ask"
              smooth
              duration={scrollOptions.duration}
              className="pr-3"
            >
              <Button variant="outline" size="sm">
                Ask 🤖
              </Button>
            </Link>
            <NextLink href="/contact">
              <Button
                size="sm"
                className="flex flex-row justify-center items-center"
              >
                <span className="">Contact Me</span>{' '}
                <span className="pl-2">
                  <Image
                    priority
                    src={'/images/arrow-dark.svg'}
                    width={16}
                    height={16}
                    alt="Call now"
                  />
                </span>
              </Button>
            </NextLink>
          </div>
        )}
      </div>

      <NavMenu
        visible={navMenuVisible}
        showAuthNav={showAuthNav}
        username={username}
        onClose={onClose}
        subpage={subpage}
      />
    </div>
  );
}
