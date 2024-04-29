export default function ProjectCard(props: {
  children: React.ReactNode;
  className?: string;
  image?: string;
  title?: string;
  description?: string;
  url?: string;
}) {
  const { image, title, description, url } = props;
  const baseClasses = `
 text-center rounded-md text-brand-dark-500
 transition-shadow
 hover:bg-brand-100
 group
  pt-2 pb-2 px-3 hover:md:shadow-[4px_4px_0px_0px_#f2ff41]
  border border-brand-dark-200 hover:border-brand-300 relative`;

  const combinedClasses = `${baseClasses} ${props.className}`;

  return (
    <div className={combinedClasses}>
      <div></div>
      <p>
        <span className="text-brand-600 group-hover:text-brand-300">_</span>{' '}
        {title}
      </p>
    </div>
  );
}
