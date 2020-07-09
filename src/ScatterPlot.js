import React from "react";
import * as d3 from "d3";
import Axis from "./Axis";

import styled from "styled-components";

const Circle = styled.circle`
  fill: blue;
  font-family: sans-serif;
  font-size: 10px;
`;

const ScatterPlot = ({ data }) => {
  const xScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, 500]);
  const yScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, 500]);
  const vScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, 10]);

  return (
    <g transform={`translate(${50}, ${10})`}>
      {data.map(([x, y, v]) => {
        return <Circle cx={xScale(x) + 10} cy={yScale(y)} r={vScale(v) + 1} />;
      })}
      <Axis x={0} y={0} type="Left" scale={xScale} />
      <Axis x={0} y={500} type="Bottom" scale={yScale} />
    </g>
  );
};

export default ScatterPlot;
