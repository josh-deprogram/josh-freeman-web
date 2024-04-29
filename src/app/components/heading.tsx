interface IHeading {
  title: string;
  description: string;
}

export default function Heading(props: IHeading) {
  const { title, description } = props;
  return (
    <div className="flex-col justify-center flex items-center">
      <h3 className="text-brand-dark-950 text-lg lg:text-xl pt-5 TTHovesFont">
        {description}
      </h3>
      <h1
        className="bg-gradient-to-r from-brand-100 to-brand-300 inline-block text-transparent bg-clip-text
      TTHovesFont text-5xl md:text-7xl lg:text-9xl text-center font-semibold mb-6"
      >
        {title}
      </h1>
    </div>
  );
}
