interface IMarquee {
  label: string;
}

export default function Marquee(props: IMarquee) {
  const { label } = props;
  const textMargue = 'TTFirsFont text-5xl md:text-7xl lg:text-9xl mx-4 lg:mx-7';

  return (
    <>
      <div className="relative flex overflow-x-hidden mt-[-48px]">
        <div className="py-12 animate-marquee whitespace-nowrap">
          <span className={textMargue}>{label}</span>
          <span className={textMargue}>{label}</span>
          <span className={textMargue}>{label}</span>
          <span className={textMargue}>{label}</span>
          <span className={textMargue}>{label}</span>
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span className={textMargue}>{label}</span>
          <span className={textMargue}>{label}</span>
          <span className={textMargue}>{label}</span>
          <span className={textMargue}>{label}</span>
          <span className={textMargue}>{label}</span>
        </div>
      </div>
    </>
  );
}
