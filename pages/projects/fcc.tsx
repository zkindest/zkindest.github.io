import { ProjectsWrapper } from '@/components/Projects';
import Project from '@/components/Projects/Project';
import SEO from '@/components/SEO';
import { freeCodeCampChallenges } from '@/projectData';
import Link from 'next/link';

const FreeCodeCampChallenges = () => {
  return (
    <div>
      <SEO
        title="Afroz's Free Code Camp Projects"
        description="Afroz's Free Code Camp Projects"
        image="https://i.imgur.com/L8muD8v.jpg"
        imageOwnerProfile="https://unsplash.com/@octadan"
      />
      <Link href={'/projects'}>⇐ Projects Home</Link>
      <section style={{ margin: '2rem 0' }}>
        <a href="https://www.freecodecamp.org/">
          <h2>Free Code Camp Chanllenges</h2>
        </a>
        <ProjectsWrapper>
          {freeCodeCampChallenges.map((item) => (
            <Project {...item} key={item.title} />
          ))}
        </ProjectsWrapper>
      </section>
    </div>
  );
};

export default FreeCodeCampChallenges;
