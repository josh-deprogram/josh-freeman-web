export default function Section(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const baseClasses = `w-full min-h-screen pt-4 md:pt-12
  pb-4 md:pb-12 flex flex-col relative`;

  const combinedClasses = `${baseClasses} ${props.className}`;

  return <div className={combinedClasses}>{props.children}</div>;
}
