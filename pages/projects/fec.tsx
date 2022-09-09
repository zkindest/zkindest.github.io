import { ProjectsWrapper } from '@/components/Projects';
import Project from '@/components/Projects/Project';
import SEO from '@/components/SEO';
import { frontEndMentorChallenges } from '@/projectData';
import Link from 'next/link';

const FrontEndMentorChallenges = () => {
  return (
    <div>
      <SEO
        title="Afroz's Frontend Mentor Challenge Projects"
        description="I do side projects whenever I get free time, It helps me to improve/showcase my skills."
        image="https://i.imgur.com/L8muD8v.jpg"
        imageOwnerProfile="https://unsplash.com/@octadan"
      />
      <Link href={'/projects'}>⇐ Projects Home</Link>
      <section style={{ margin: '2rem 0' }}>
        <a href="https://www.frontendmentor.io/challenges">
          <h2>Front-end Mentor Chanllenges</h2>
        </a>
        <ProjectsWrapper>
          {frontEndMentorChallenges.map((item) => (
            <Project {...item} key={item.title} />
          ))}
        </ProjectsWrapper>
      </section>
    </div>
  );
};

export default FrontEndMentorChallenges;
