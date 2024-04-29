'use client';

import Image from 'next/image';

export default function ProjectCard(props: {
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
  hover:md:shadow-[4px_4px_0px_0px_#f2ff41]
  border border-brand-dark-200 hover:border-brand-300 relative`;

  const combinedClasses = `${baseClasses} ${props.className}`;

  const img = {
    width: 350,
    height: 350,
  };

  return (
    <div className={combinedClasses}>
      <div>
        <Image
          src={'/images/projects/thumbs/atgg.jpg'}
          width={img.width}
          height={img.height}
          alt="deprogram"
          className="max-w-[450px]"
        />
      </div>
      {/* <p>
        <span className="text-brand-600 group-hover:text-brand-300">_</span>{' '}
        {title}
      </p> */}
    </div>
  );
}
