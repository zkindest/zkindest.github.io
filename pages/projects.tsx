import SEO from "@/components/SEO";
import React from "react";

interface ListItemProps {
  label: string;
  demo?: string;
  code: string;
}
const ListItem = ({ label, demo, code }: ListItemProps) => {
  return (<li>
    {
      demo ? (<a href={demo} referrerPolicy="no-referrer" target="_blank">{label}</a>
      ) : label
    }
    &mdash; {' '}
    {
      code ? <a href={code} referrerPolicy="no-referrer" target="_blank">code</a> : null
    }
  </li>)
}

const Projects = () => {
  return (
    <div>
      <SEO title="Afroz's Projects" description="I do side projects whenever I get free time, It helps me to improve/showcase my skills." image='https://i.imgur.com/L8muD8v.jpg' imageOwnerProfile="https://unsplash.com/@octadan" />
      <h2>Projects</h2>
      <ul>
        <li>
          <details>
            <summary>Frontend Mentor Challanges</summary>
            <ol>
              <ListItem code="https://github.com/zkindest/fe-c7-bookmark-landing-page" demo="https://zkindest.github.io/fe-c7-bookmark-landing-page/" label="Bookmark Landing Page" />
              <ListItem code="https://github.com/zkindest/fe-c6-search-country" demo="https://zkindest.github.io/fe-c6-search-country/" label="Search Country Details" />
              <ListItem code="https://github.com/zkindest/fe-c1-product-page" demo="https://zkindest.github.io/fe-c1-product-page/" label="Commerce Product Page" />
              <ListItem code="https://github.com/zkindest/fe-c2-launchdown-timer-react" demo="https://zkindest.github.io/fe-c2-launchdown-timer-react/" label="Launchdown Timer" />
              <ListItem code="https://github.com/zkindest/fe-c5-search-ip-domain" demo="https://zkindest.github.io/fe-c5-search-ip-domain/" label="IP address tracker UI" />
              <ListItem code="https://github.com/zkindest/fe-c4-job-listings-react" demo="https://zkindest.github.io/fe-c4-job-listings-react" label="Job Listing" />
              <ListItem code="https://github.com/zkindest/fe-c3-easybank-site" demo="https://zkindest.github.io/fe-c3-easybank-site/" label="Easybank landing page" />
            </ol>
          </details>
        </li>
        <ListItem code="https://github.com/zkindest/react-game-of-life" demo="https://zkindest.github.io/react-game-of-life/" label="Game of Life" />
        <li>
          Stack underflow &mdash; <a href="https://github.com/zkindest/stack-underflow-mern-gql" target="_blank">code</a>
        </li>
        <li>
          <a href="https://zkindest.github.io/calculator/" target="_blank">
            Javascript Calculator
          </a> &mdash; <a href="https://github.com/zkindest/calculator" target="_blank">code</a>
        </li>
        <li>
          <a href="https://zkindest.github.io/pomodoro/" target="_blank">
            25+5 Clock
          </a> &mdash; <a href="https://github.com/zkindest/pomodoro" target="_blank">code</a>
        </li>
        <li>
          <a href="http://zkindest.github.io/drum-machine" target="_blank">
            Ally Drum Machine
          </a> &mdash; <a href="https://github.com/zkindest/drum-machine">code</a>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
