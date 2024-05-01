export default function Avalible(props: {
  avalible: boolean;
  className?: string;
}) {
  const baseClasses = `
 text-center text-brand-dark-500 text-sm curosor-pointer
 hover:bg-brand-dark-200
 bg-brand-dark-100
 transition-colors
 px-3 rounded-xl
 group
  flex flex-row justify-center items-center
  border border-brand-dark-200 hover:border-brand-300 relative`;

  const combinedClasses = `${baseClasses} ${props.className}`;

  return (
    <div className={combinedClasses}>
      <div
        className={`${
          props.avalible ? 'bg-green-500' : 'bg-red-500'
        } w-2 h-2 mr-2 rounded-full animate-pulse`}
      />
      {props.avalible ? 'Avalible for work' : 'Not looking for work right now'}
    </div>
  );
}
