interface ILogo {
  light?: boolean;
}
export default function Logo(props: ILogo) {
  const { light = true } = props;
  return (
    <p
      className={`${
        light ? 'text-brand-dark-950' : 'text-brand-dark-100 font-semibold '
      } text-2xl TTHovesFont`}
    >
      Josh Freeman
    </p>
  );
}
