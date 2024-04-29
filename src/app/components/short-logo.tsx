interface ILogo {
  light?: boolean;
}
export default function ShortLogo(props: ILogo) {
  const { light = true } = props;
  return (
    <p
      className={`text-center
       ${
         light ? 'text-brand-500' : 'text-brand-dark-800 font-medium '
       } text-2xl TTFirsFont TTHovesFont text-[14cqw] lg:text-[14cqw] lg:mt-16 font-semibold pt-32`}
    >
      JoshFreeman
    </p>
  );
}
