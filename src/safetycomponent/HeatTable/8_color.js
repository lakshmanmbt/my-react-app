import React from "react";
import HeatMap from "react-heatmap-grid";

const xLabels = [''];
const yLabels = ['', '', '', '', '', '', '', '', '', ''];

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
function HeatTable() {
  return (
    <div style={{ fontSize: "12px", width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* second heatmap created using col1, col2, col3 */}  
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"top"}
        xLabelWidth={50}
        data={inputData}
        squares={false}
        height={1}
        cellStyle={(background, value, min, max, data, x, y) => {
          const valueRange = max - min;
          const greenThreshold = min + valueRange / 3;
          const yellowThreshold = min + (valueRange * 2) / 3;
        
          let color;
          let opacity;
        
          if (value <= greenThreshold) {
            const greenOpacity = 0.3 + (1 - (value - min) / (greenThreshold - min)) * 0.7;
            color = `rgba(99, 190, 123, ${greenOpacity})`; // Green with varying opacity
            opacity = 1;
          } else if (value <= yellowThreshold) {
            color = `rgba(255, 235, 132, ${0.3 + (value - greenThreshold) / (yellowThreshold - greenThreshold) * 0.7})`; // Yellow with varying opacity
            opacity = 1;
          } else {
            const redOpacity = 0.3 + ((value - yellowThreshold) / (max - yellowThreshold)) * 0.7;
            color = `rgba(248, 105, 107, ${redOpacity})`; // Red with varying opacity
            opacity = 1;
          }
        
          return {
            background: color,
            opacity: opacity,
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
