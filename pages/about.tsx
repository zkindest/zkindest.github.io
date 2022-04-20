import React from "react"
import { FiTwitter } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"
import { ImReddit } from "react-icons/im"
import styled from "styled-components"
import SEO from "../components/SEO"
import defaults from "@/config"

type AboutProps = {
  className?: string
}

const about: React.FC<AboutProps> = ({ className }) => {
  const {
    twitterId,
    userName,
    redditUserName,
    twitterUserName,
    description,
    mail,
  } = defaults

  return (
    <React.Fragment>
      <SEO
        title="About me"
        description={description}
        image={process.env.BACKEND_URL + "static/images/me.jpeg"}
      />
      <section className={`${className} about`}>
        <article>
          <img
            src={process.env.BACKEND_URL + "static/images/me.jpeg"}
            alt="Photo of Afroz"
            className="about__img"
          />
          <div className="about__info">
            <p>
              Hi{" "}
              <span role="img" aria-label="waving hand emoji">
                👋{" "}
              </span>
              I'm Afroz, Full stack Developer based in Hyderabad, India.
            </p>
            <p>
              I have two years of experience in software development, and a
              passion for Front-End. My work involves a lot of HTML, CSS, and
              JavaScript/TypeScript (with React), but I also have plenty
              experience with back-end development and databases.
            </p>
            <p className="about__info--links">
              <a href="https://gitstalk.netlify.app/zkindest" target="_blank">
                <i>stalk me</i>{" "}
              </a>
              |&nbsp;<i>reach me:</i>&nbsp;
              <a href={`mailto:${mail}`}>
                <HiOutlineMail style={{ marginBottom: "-3px" }}></HiOutlineMail>
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
                  <FiTwitter style={{ marginBottom: "-3px" }}></FiTwitter>
                  &nbsp;Twitter
                </a>
              ) : null}
              <a
                href={`https://www.reddit.com/user/${
                  redditUserName || userName
                }`}
              >
                <ImReddit />
                &nbsp;Reddit
              </a>
            </p>
          </div>
        </article>
      </section>
    </React.Fragment>
  )
}

export default styled(about)`
  width: 100%;
  position: relative;
  transition: var(--main-transition);

  .about {
    &__img {
      clip-path: circle(50% at 50% 50%);
      shape-outside: circle(50% at 50% 50%);
      float: left;
      width: 10rem;
      height: 10rem;
      margin: 0rem 1.2rem;
      @media all and (max-width: 530px) {
        float: unset;
        display: grid;
        margin: 0 auto;
      }
    }

    &__info {
      text-align: left;
      padding-top: 0.2rem;

      @media all and (max-width: 530px) {
        display: block;
      }
      &--links {
        a + a {
          margin-left: 0.5em;
        }
      }
    }
  }
`
