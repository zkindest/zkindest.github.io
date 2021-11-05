import SEO from "@/components/SEO";
import React from "react";

const Projects = () => {
  return (
    <div>
      <SEO title="Afroz's Projects" description="I do side projects whenever I get free time, It helps me to improve/showcase my skills." image='https://i.imgur.com/L8muD8v.jpg' imageOwnerProfile="https://unsplash.com/@octadan" />
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>Game of Life</strong>
          <ul>
            <li>
              JavaScript &amp; WASM (rust) &mdash; <a href="https://zkindest.github.io/rust-wa-game-of-life/" target="_blank">demo</a>, <a href="https://github.com/zkindest/rust-wa-game-of-life" target="_blank">code</a>
            </li>
            <li>
              JavaScript &mdash; <a href="https://zkindest.github.io/js-game-of-life/" target="_blank">demo</a>, <a href="https://github.com/zkindest/js-game-of-life" target="_blank">code</a>
            </li>
            <li>
              React &mdash; <a href="https://zkindest.github.io/react-game-of-life/" target="_blank">demo</a>, <a href="https://github.com/zkindest/react-game-of-life" target="_blank">code</a>
            </li>
          </ul>
        </li>
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
      And here's my Github <a href="https://github.com/zkindest">profile</a>.
    </div>
  );
};

export default Projects;
