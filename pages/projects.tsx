import SEO from '@/components/SEO';
import React from 'react';
import { mainProjects } from '@/projectData';
import Project from '@/components/Projects/Project';
import { ProjectsWrapper } from '@/components/Projects';
import Link from 'next/link';

const Projects = () => {
  return (
    <div>
      <SEO
        title="Afroz's Projects"
        description="I do side projects whenever I get free time, It helps me to improve/showcase my skills."
        image="https://i.imgur.com/L8muD8v.jpg"
        imageOwnerProfile="https://unsplash.com/@octadan"
      />
      <section>
        <h1>Projects</h1>
        <ProjectsWrapper>
          {mainProjects.map((item) => (
            <Project {...item} key={item.title} />
          ))}
        </ProjectsWrapper>

        <h2>Other Projects</h2>
        <ul>
          <li>
            <Link href="/projects/fec" scroll={true}>
              <a>Frontend Mentor Challenges</a>
            </Link>
          </li>
          <li>
            <Link href="/projects/fcc" scroll={true}>
              <a>FreeCodeCamp Frontend Challenges</a>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Projects;
