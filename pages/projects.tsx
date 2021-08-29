import React from "react";

const Projects = () => {
  return (
    <div>
      <h2>A few things I've made</h2>
      <ul>
        <li>
          <a href="https://zkindest.github.io/calculator/" target="_blank">
            Javascript Calculator
          </a>
        </li>
        <li>
          <a href="https://zkindest.github.io/pomodoro/" target="_blank">
            25+5 Clock
          </a>
        </li>
        <li>
          <a href="http://zkindest.github.io/drum-machine" target="_blank">
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
      </ul>
      <h2>D3 visualizations using d3 core api's</h2>
      <ul>
        <li>
          <a href="https://zkindest.github.io/d3-barchart/">Barchart</a>
        </li>
        <li>
          <a href="https://zkindest.github.io/d3-scatterplot/">scatterplot</a>
        </li>
        <li>
          <a href="https://zkindest.github.io/d3-heatmap/">Heatmap</a>
        </li>
        <li>
          <a href="https://zkindest.github.io/d3-treemap/">Treemap</a>
        </li>
        <li>
          <a href="https://zkindest.github.io/d3-choropleth/">Choropleth</a>
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
