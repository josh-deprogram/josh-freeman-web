import ProjectCard from './project-card';

interface IMarquee {
  label?: string;
}

export default function MarqueeProjects(props: IMarquee) {
  const prjMargue = 'TTFirsFont mx-2 px-0';

  const Logos = () => (
    <>
      <div className={prjMargue}>
        <ProjectCard
          title="At The Garden Gate"
          description="deprogram"
          url="atgg"
        />
      </div>
      <div className={prjMargue}>
        <ProjectCard
          title="At The Garden Gate"
          description="deprogram"
          url="atgg"
        />
      </div>
      <div className={prjMargue}>
        <ProjectCard
          title="At The Garden Gate"
          description="deprogram"
          url="atgg"
        />
      </div>
      <div className={prjMargue}>
        <ProjectCard
          title="At The Garden Gate"
          description="deprogram"
          url="atgg"
        />
      </div>
      <div className={prjMargue}>
        <ProjectCard
          title="At The Garden Gate"
          description="deprogram"
          url="atgg"
        />
      </div>
    </>
  );

  return (
    <>
      <div className="relative flex overflow-x-hidden mt-[-48px]">
        <div className="py-12 animate-marqueePrj whitespace-nowrap flex flex-row">
          <Logos />
        </div>

        <div className="absolute top-0 py-12 animate-marqueePrj2 whitespace-nowrap flex flex-row">
          <Logos />
        </div>
      </div>
    </>
  );
}
