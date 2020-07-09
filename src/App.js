import React, { useMemo } from "react";
import "./styles.css";
import * as d3 from "d3";
import ScatterPlot from "./ScatterPlot";

export default function App() {
  const data = useMemo(
    () => d3.range(100).map(_ => [Math.random(), Math.random(), Math.random()]),
    []
  );
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <svg width="600" height="600">
        <ScatterPlot data={data} />
      </svg>
    </div>
  );
}
