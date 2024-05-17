import React from "react";
import HeatMap from "react-heatmap-grid";

const xLabels = ['col0', 'col1', 'col2', 'col3'];
const yLabels = ['row0', 'row1', 'row2', 'row3'];

const inputData = [
  ['', 1, 2, 1],
  [7, 3, 4, 2],
  [1, 5, 6, 4],
  [5, 2, 3, 4]
];

function HeatTable() {
  const row0Data = inputData[0].slice(1); // Extract row0 values

  return (
    <div style={{ fontSize: "12px", width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <div style={{ paddingLeft: "80px", paddingBottom: "20px" }}>
      {/* third heatmap created using row0 */}
      <HeatMap
        xLabels={xLabels.slice(1)}
        yLabels={[""]} // Use an empty label for alignment
        xLabelsLocation={"top"}
        xLabelWidth={50}
        data={[row0Data]} // Use the extracted row0 values
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

      <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* first heatmap created using col0 */}
      <HeatMap
        xLabels={xLabels.slice(0, 1)}
        yLabels={yLabels.slice(1)}
        xLabelsLocation={"top"}
        xLabelWidth={50}
        data={inputData.slice(1).map(row => [row[0]])}
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
        yLabels={yLabels.slice(1)} // Exclude 'row0' from yLabels
        xLabelsLocation={"top"}
        xLabelWidth={50}
        data={inputData.slice(1).map(row => row.slice(1))}
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
    </div>
  );
}

export default HeatTable;
