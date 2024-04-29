'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button, Logo, NavMenu } from '.';
import { useEffect, useState } from 'react';

interface IBuiltByProps {
  showAuthNav?: boolean;
  username?: string;
  light?: boolean;
  showLogout?: boolean;
}

export default function NavBar(props: IBuiltByProps) {
  const {
    showAuthNav = false,
    light = false,
    showLogout = false,
    username,
  } = props;
  const [loading, setLoading] = useState(false);
  const [navMenuVisible, setNavMenuVisible] = useState(false);

  const onNavPress = () => {
    setNavMenuVisible(true);
  };

  const onClose = (value: boolean) => {
    setNavMenuVisible(false);
  };

  // bg-gradient-to-b ${
  //   light ? 'from-brand-dark-100' : 'from-brand-dark-200'
  // }

  return (
    <div
      className={`z-10 w-full self-start fixed top-0 pt-4 pb-8 left-0 pl-4 pr-4 md:pl-12 md:pr-12 md:pt-10 
      bg-brand-dark-200
      ${loading ? 'hidden' : 'visible'} `}
    >
      <div className={'flex flex-row justify-between items-center w-full'}>
        <div className="flex content-center cursor-pointer  w-48">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="md:hidden pt-2 pb-2" onClick={onNavPress}>
          <Image
            src={'/images/nav-icon-dark.svg'}
            alt="nav menu"
            className=""
            width={24}
            height={24}
          />
        </div>
        {showAuthNav ? (
          <div className="hidden md:block">
            {showLogout && (
              <Link href="/" className="pr-3">
                <Button variant="outline" size="sm">
                  Signout
                </Button>
              </Link>
            )}
            <Link href="/account" className="pr-3">
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </Link>
            <Link href={`/${username || ''}`}>
              <Button size="sm">Profile</Button>
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex w-full items-center justify-end flex-row">
            <Link href="#work" className="pr-3">
              <Button variant="outline" size="sm">
                Experience
              </Button>
            </Link>
            <Link href="#services" className="pr-3">
              <Button variant="outline" size="sm">
                Skills
              </Button>
            </Link>
            <Link href="#ask" className="pr-3">
              <Button variant="outline" size="sm">
                Ask 🤖
              </Button>
            </Link>
            <Link href="/contact">
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
            </Link>
          </div>
        )}
      </div>

      <NavMenu
        visible={navMenuVisible}
        showAuthNav={showAuthNav}
        username={username}
        onClose={onClose}
      />
    </div>
  );
}
