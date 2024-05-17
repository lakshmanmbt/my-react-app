import React from "react";
import HeatMap from "react-heatmap-grid";

const xLabels = ['col0', 'col1', 'col2', 'col3'];
const yLabels = ['row0', 'row1', 'row2', 'row3'];

const inputData = [
  ['', 1, 2, 0],
  [7, 3, 4, 2],
  [10, 5, 6, 4],
  [5, 2, 3, 4]
];

function HeatTable() {
  return (
    <div style={{ fontSize: "12px", width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  
      {/* first heatmap created using col0 */}
      <HeatMap
        xLabels={xLabels.slice(0, 1)}
        yLabels={yLabels}
        xLabelsLocation={"top"}
        xLabelWidth={50}
        data={inputData.map(row => [row[0]])}
        squares={false}
        height={1}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
          color: "#000",
          width: "80px",
          height: "19px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #ccc",
          boxSizing: "border-box",
        })}
        cellRender={(value) => value && <div>{value}</div>}
        labelStyle={{ fontSize: "12px", fontWeight: "bold" }}
      />

      {/* second heatmap created using col1, col2, col3 */}  
      <HeatMap
        xLabels={xLabels.slice(1)}
        yLabels={yLabels}
        xLabelsLocation={"top"}
        xLabelWidth={50}
        data={inputData.map(row => row.slice(1))}
        squares={false}
        height={1}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
          color: "#000",
          width: "80px",
          height: "19px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #ccc",
          boxSizing: "border-box",
        })}
        cellRender={(value) => value && <div>{value}</div>}
        labelStyle={{ fontSize: "12px", fontWeight: "bold" }}
      />

    </div>
  );
}

export default HeatTable;
