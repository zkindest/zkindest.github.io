import { IProject, IProjectLink } from '@/projectData';
import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa/';
import { FiExternalLink } from 'react-icons/fi/';
import styled from 'styled-components';

const getLinkIcon = (type: IProjectLink['type']) => {
  switch (type) {
    case 'github':
      return <FaGithub />;
    default:
      return <FiExternalLink />;
  }
};
const ExtLink = ({ url, type }: { url: string; type: 'github' | 'other' }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {getLinkIcon(type)}
    </a>
  );
};
const Project = ({ image, description, title, links, imageAlt }: IProject) => {
  return (
    <ProjectItemWrapper>
      <div className="project__logo">
        <Image src={image} alt={imageAlt} layout="fill" />
      </div>
      <div className="project__details">
        <h2>{title}</h2>
        <div className="project__desc">
          <p>{description}</p>
        </div>
        <div className="project__links">
          {links.map((link) => (
            <ExtLink {...link} key={link.url} />
          ))}
        </div>
      </div>
    </ProjectItemWrapper>
  );
};
const ProjectItemWrapper = styled.div`
  box-shadow: var(--elevation1);
  position: relative;
  border: 1px solid var(--clr-gray5);
  border-radius: 1.2rem;
  width: 20rem;
  min-height: 20rem;
  h2 {
    font-size: 1.3rem;
  }
  .project__details {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    p {
      font-size: 0.9rem;
      color: var(--clr-gray11);
    }
  }
  .project__links {
    margin: 1rem 0;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .project__logo {
    position: relative;
    width: 100%;
    min-height: 15rem;
    max-height: 45%;
    max-height: 50%;
    overflow: hidden;
    border-radius: 1.2rem 1.2rem 0 0;
    user-select: none;
    img {
      width: 100%;
      object-fit: fill;
      object-position: center;
      border-radius: inherit;
    }
  }
`;
export default Project;
