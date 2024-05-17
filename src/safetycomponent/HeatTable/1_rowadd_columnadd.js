import React from "react";
import HeatMap from "react-heatmap-grid";

const xLabels = ['col1','col2'];
const yLabels = ['row1','row2','row3'];

const inputData = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// Calculate cumulative row sums
const rowadd = inputData.map(row => row.reduce((acc, value) => acc + value, 0));

// Calculate cumulative column sums
const columnadd = inputData[0].map((_, columnIndex) =>
  inputData.reduce((acc, row) => acc + row[columnIndex], 0)
);

// Store row added values in an array of arrays
const rowheat = rowadd.map(value => [value]);

// Store column added values in an array of arrays
const columnheat = [columnadd];

function HeatTable() { // Give your component a name
  return (
    <div style={{ fontSize: "12px", width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"top"}
        xLabelWidth={50}
        data={inputData}
        squares={false} // Set squares prop to false
        height={1} // Adjust the height of each cell
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
          color: "#000",
          width: "80px", // Set the width of each cell to 100% for horizontal rectangle
          height: "19px", // Adjust the height of each cell
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #ccc",
          boxSizing: "border-box",
        })}
        cellRender={(value) => value && <div>{value}</div>}
        labelStyle={{ fontSize: "12px", fontWeight: "bold" }}
      />

      {/* Display row heat values */}
      <div>
        {rowheat.map((values, rowIndex) => (
          <div key={rowIndex}>
            {/* Row Heat {rowIndex + 1}: {values.join(", ")} */}
            </div>
        ))}
      </div>

      {/* Display column heat values */}
      <div>
        {columnheat.map((values, columnIndex) => (
          <div key={columnIndex}>
            {/* Column Heat {columnIndex + 1}: {values.join(", ")} */}
            </div>
        ))}
      </div>
    </div>
  );
}

export default HeatTable; // Export the named component
