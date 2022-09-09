import React from 'react';
import { FiTwitter } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { ImReddit } from 'react-icons/im';
import styled from 'styled-components';
import SEO from '../components/SEO';
import defaults from '@/config';
import Image from 'next/image';

type AboutProps = {
  className?: string;
};

const about: React.FC<AboutProps> = ({ className }) => {
  const {
    twitterId,
    userName,
    redditUserName,
    twitterUserName,
    description,
    mail,
  } = defaults;

  return (
    <React.Fragment>
      <SEO
        title="About me"
        description={description}
        image="v1650875773/blog/me.png"
      />
      <section className={`${className} about`}>
        <div className="about__img-wrapper">
          <Image
            src="v1650875773/blog/me.png"
            alt="Photo of Afroz"
            layout="fill"
            className="about__img"
          />
        </div>
        <h1>
          Hi{' '}
          <span role="img" aria-label="waving hand emoji">
            👋{' '}
          </span>
        </h1>
        <p>
          I&apos;m Afroz, Frontend developer based in Hyderabad, India. My work
          involves a lot of HTML, CSS, and JavaScript/TypeScript (with React),
          but I also have adequate experience with back-end development and
          databases.
        </p>
        <a
          href="https://gitstalk.netlify.app/0xafz"
          target="_blank"
          rel="noreferrer"
        >
          <i>stalk me</i>{' '}
        </a>{' '}
        &nbsp; or &nbsp;<i>reach me:</i>&nbsp;
        <div className="about__socials">
          <a href={`mailto:${mail}`}>
            <HiOutlineMail style={{ marginBottom: '-3px' }}></HiOutlineMail>
            &nbsp;Email
          </a>
          {twitterId || twitterUserName ? (
            <a
              href={
                twitterId
                  ? `https://twitter.com/messages/compose?recipient_id=${twitterId}`
                  : `https://twitter.com/${twitterUserName}`
              }
            >
              <FiTwitter style={{ marginBottom: '-3px' }}></FiTwitter>
              &nbsp;Twitter
            </a>
          ) : null}
          <a href={`https://www.reddit.com/user/${redditUserName || userName}`}>
            <ImReddit />
            &nbsp;Reddit
          </a>
        </div>
      </section>
    </React.Fragment>
  );
};

export default styled(about)`
  width: 100%;
  position: relative;
  transition: var(--main-transition);

  p {
    margin: 2rem 0;
  }
  h1 {
    margin: 2rem 0;
  }
  .about {
    &__img {
      clip-path: circle(50% at 50% 50%);
      shape-outside: circle(50% at 50% 50%);
      &-wrapper {
        position: relative;
        width: 10rem;
        height: 10rem;
        margin: 0 auto;
        @media (max-width: 640px) {
          width: 5rem;
          height: 5rem;
        }
      }
    }

    &__socials {
      margin-left: 1rem;
      a {
        display: inline-flex;
        align-items: center;
      }
      display: inline-flex;
      gap: 1rem;
      align-items: center;
    }
  }
`;
