import Image from 'next/image';

interface IMarquee {
  label?: string;
}

export default function MarqueeLogos(props: IMarquee) {
  const { label } = props;
  const textMargue = 'TTFirsFont mx-6 px-0';

  const width = 250;
  const height = 250;

  const Logos = () => (
    <>
      <div className={textMargue}>
        <Image
          src={'/images/logos/deprogram-24-dark.svg'}
          width={width}
          height={height}
          alt="deprogram"
          className="max-w-[250px]"
        />
      </div>
      <div className={textMargue}>
        <Image
          src={'/images/logos/deprogram-24-dark.svg'}
          width={width}
          height={height}
          alt="deprogram"
          className="max-w-[250px]"
        />
      </div>
      <div className={textMargue}>
        <Image
          src={'/images/logos/deprogram-24-dark.svg'}
          width={width}
          height={height}
          alt="deprogram"
          className="max-w-[250px]"
        />
      </div>
      <div className={textMargue}>
        <Image
          src={'/images/logos/deprogram-24-dark.svg'}
          width={width}
          height={height}
          alt="deprogram"
          className="max-w-[250px]"
        />
      </div>
    </>
  );

  return (
    <>
      <div className="relative flex overflow-x-hidden mt-[-24px]">
        <div className="py-12 animate-marquee whitespace-nowrap flex flex-row">
          <Logos />
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex flex-row">
          <Logos />
        </div>
      </div>
    </>
  );
}
