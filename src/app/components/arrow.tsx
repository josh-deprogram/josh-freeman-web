import Image from 'next/image';
interface ILogo {
  direction?: 'up' | 'down' | 'left' | 'right';
}
export default function Arrow(props: ILogo) {
  const { direction = 'down' } = props;
  return (
    <div
      className={`w-28 h-28 w-full md:pl-10 flex justify-start items-center group overflow-hidden relative`}
    >
      <div
        className={`w-14 h-14 flex justify-center items-center
        group-hover:translate-y-24 transition-transform duration-300 ease-in-out
         ${direction === 'up' ? 'transform rotate-180' : ''}
        ${direction === 'down' ? 'transform rotate-90' : ''}
        ${direction === 'left' ? 'transform -rotate-90' : ''}
        ${direction === 'right' ? 'transform rotate-90' : ''}`}
      >
        <Image
          priority
          src={'/images/arrow.svg'}
          width={54}
          height={54}
          alt="go to next section"
        />
      </div>

      <div
        className={`w-14 h-14 flex justify-center items-center
        translate-y-[-80px]
        absolute
        group-hover:translate-y-0 transition-transform duration-300 ease-in-out
         ${direction === 'up' ? 'transform rotate-180' : ''}
        ${direction === 'down' ? 'transform rotate-90' : ''}
        ${direction === 'left' ? 'transform -rotate-90' : ''}
        ${direction === 'right' ? 'transform rotate-90' : ''}`}
      >
        <Image
          priority
          src={'/images/arrow-color.svg'}
          width={54}
          height={54}
          alt="go to next section"
        />
      </div>
    </div>
  );
}
