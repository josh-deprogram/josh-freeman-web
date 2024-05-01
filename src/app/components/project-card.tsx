'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard(props: {
  className?: string;
  image?: string;
  title?: string;
  description?: string;
  url: string;
}) {
  const { image, title, description, url } = props;
  const baseClasses = `
 text-center rounded-md text-brand-dark-500
 transition-shadow transition-opacity cursor-pointer
 grayscale hover:grayscale-0 transition-filter
  relative`;

  const combinedClasses = `${baseClasses} ${props.className}`;

  const img = {
    width: 350,
    height: 350,
  };

  return (
    <Link href={`/project/${url}`}>
      <div className={combinedClasses}>
        <div className=" ">
          <Image
            src={'/images/projects/thumbs/atgg.jpg'}
            width={img.width}
            height={img.height}
            alt="deprogram"
            className="max-w-[450px]"
          />
        </div>
        <p className="flex-start text-left text-sm pt-1">{title}</p>
      </div>
    </Link>
  );
}
