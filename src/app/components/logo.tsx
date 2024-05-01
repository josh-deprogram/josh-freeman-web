import Image from 'next/image';

interface ILogo {
  light?: boolean;
}
export default function Logo(props: ILogo) {
  const { light = true } = props;
  return (
    <p
      className={`${
        light ? 'text-brand-dark-950' : 'text-brand-dark-100 font-semibold '
      } text-2xl TTHovesFont flex flex-row  w-48 items-center`}
    >
      <span className="pr-2 text-brand-300">_</span>
      {/* <span className="pr-2">
        <Image
          priority
          src={'/images/jf.svg'}
          width={16}
          height={16}
          alt="Call now"
        />
      </span> */}
      Josh Freeman
    </p>
  );
}
