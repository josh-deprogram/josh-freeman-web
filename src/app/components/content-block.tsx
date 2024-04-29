export default function ContentBlock(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const baseClasses = `flex flex-col justify-center items-start px-4 md:px-12
  bg-brand-dark-100 
  mx-4 md:mx-14 pt-4 pb-4 md:pt-10 md:pb-10 max-w-6xl
  border-brand-dark-300 relative`;

  const combinedClasses = `${baseClasses} ${props.className}`;

  return <div className={combinedClasses}>{props.children}</div>;
}
