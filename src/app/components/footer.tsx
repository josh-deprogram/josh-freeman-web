import Link from 'next/link';
import ShortLogo from './short-logo';
import Section from './section';

export default function Footer() {
  const renderLink = (href: string, text: string) => {
    return (
      <Link
        href={href}
        className='w-full text-2xl transition-colors border-solid 
      mt-1 mb-1 flex justify-start items-center p-0 pt-1 pb-1 
      w-60 text-hype-dark-950 font-semibold
      hover:text-brand-200 hover:border-brand-800"'
      >
        <p className="TTFirsFont">{text}</p>
      </Link>
    );
  };

  return (
    <Section className="relative bg-brand-dark-400 justify-end">
      <div className="px-4 md:px-12 text-lg md:text-2xl relative z-1">
        <ul>
          <li>{renderLink('mailto:info@deprogram.io', 'Email')}</li>
          <li>{renderLink('#', 'LinkedIn')}</li>
          <li>{renderLink('#', 'X')}</li>
        </ul>
      </div>
      <div
        className="text-center text-gray-100 text-lg md:text-xl
          mt-6 px-4 md:px-12 first-letter:
          flex flex-row items-center justify-between"
      >
        <p className="TTFirsFont text-sm">
          &copy; Josh Freeman _ {new Date().getFullYear()}
        </p>
      </div>
    </Section>
  );
}
