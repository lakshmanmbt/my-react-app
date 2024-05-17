import React from "react";
import HeatMap from "react-heatmap-grid";
import { scaleLinear } from "d3-scale";

const xLabels = [""];
const yLabels = ["", "", "", "", "", "", "", "", "", ""];

const inputData = [
  [1],
  [2],
  [3],
  [4],
  [5],
  [6],
  [7],
  [8],
  [9],
  [10]
];

function getColorScale(minValue, midValue, maxValue) {
  return scaleLinear()
    .domain([minValue, midValue, maxValue])
    .range(["#63be7b", "#ffeb84", "#f8696b"]);
}

function HeatTable() {
  const minValue = Math.min(...inputData.flat());
  const maxValue = Math.max(...inputData.flat());
  const midValue = (minValue + maxValue) / 2;
  const colorScale = getColorScale(minValue, midValue, maxValue);

  return (
    <div style={{ fontSize: "12px", width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"top"}
        xLabelWidth={50}
        data={inputData}
        squares={false}
        height={1}
        cellStyle={(background, value) => {
          const color = colorScale(value);

          return {
            background: color,
            opacity: 1,
            color: "#000",
            width: "98px",
            height: "19px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #ccc",
            boxSizing: "border-box",
            margin: "0px",
          };
        }}

        cellRender={(value) => value && <div>{value}</div>}
        labelStyle={{ fontSize: "12px", fontWeight: "bold" }}
      />
    </div>
  );
}

export default HeatTable;
