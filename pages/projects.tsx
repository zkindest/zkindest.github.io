import React from "react";

const Projects = () => {
  return (
    <div>
      <h2>A few things I've made</h2>
      <ul>
        <li>
          <a href="https://codepen.io/zkindest/full/qBmOXWO" target="_blank">
            Javascript Calculator
          </a>
        </li>
        <li>
          <a href="https://codepen.io/zkindest/full/ZEKoppW" target="_blank">
            25+5 Clock
          </a>
          <ul>
            <li>
              I learned about react's batch updates and problems relating
              setInterval/setTimeout and how prevent to them.
            </li>
          </ul>
        </li>
        <li>
          <a href="https://codepen.io/zkindest/full/XWRZbvb" target="_blank">
            Ally Drum Machine
          </a>
        </li>
        <li>
          <a href="https://codepen.io/zkindest/full/zYwvWKJ" target="_blank">
            Markdown Previewer
          </a>
          <ul>
            <li>
              Editor-Previewer Scroll-Sync was a challenge for me.It needs
              little bit more work to properly sync them and there's possibility
              of optimization for md-html transpilation.(i.e transpile only new
              changes)
            </li>
          </ul>
        </li>
        <li>
          <a
            href="https://codepen.io/collection/PYqQWY?cursor=ZD0wJm89MCZwPTEmdj00"
            target="_blank"
          >
            Responsive Design Sites
          </a>
        </li>
      </ul>
      <h2>Here are some D3 visualization that I made</h2>
      <ul>
        <li>
          <a
            href="https://codepen.io/collection/ExxyBj?cursor=ZD0wJm89MCZwPTEmdj00"
            target="_blank"
          >
            D3 Viz
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://codepen.io/collection/nGroPp">Lazy Loading Images</a>
          <ol>
            <li>using Javascript events</li>
            <li>using Intersection Observer API</li>
            <li>Lazy Load CSS background Images</li>
          </ol>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
