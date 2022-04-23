import React from 'react';
import styled from 'styled-components';
import defaults from '@/config';

interface Props {
  className?: string;
}

const Footer: React.FC<Props> = ({ className }) => {
  const { codeUrl } = defaults;
  return (
    <footer className={className}>
      <div className="footer">
        Built with{' '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Next.js
        </a>
        , hosted on{' '}
        <a href={codeUrl} target="_blank" referrerPolicy="no-referrer">
          Github
        </a>
      </div>
    </footer>
  );
};

export default styled(Footer)`
  width: 100%;
  font-size: 0.9em;

  .footer {
    text-align: center;
    padding: 0.5em 0;
    font-size: 0.9em;
    align-items: center;
    svg {
      margin-bottom: -0.1rem;
    }
    a {
      font-size: 1em;
      font-weight: 400;
    }
  }
`;
