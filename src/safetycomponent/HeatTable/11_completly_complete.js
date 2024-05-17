import React from "react";
import HeatMap from "react-heatmap-grid";
import { scaleLinear } from "d3-scale";

const xLabels = ['Ecol','MON','TUE','WED','THU','FRI','SAT','SUN'];
const yLabels = ['Erow','12am','1am','2am','3am','4am','5am','6am','7am','8am','9am','10am','11am',
                 '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm'];
const yLabelsSecondHeatMap = ['','','','','','','','','','','','','','','','','','','','','','','','',''];
const xLabelsSecondHeatMap = ['','','','','','','',''];

const inputData = [   
  // first array is the added values of each column
  // first element in each array is the added values of each row
  ['', 10, 7, 4, 5, 2, 3, 1],
  [7, 5, 3, 6, 1, 2, 4, 2],
  [2, 6, 3, 1, 7, 4, 5, 3],
  [4, 2, 7, 5, 6, 3, 1, 4],
  [3, 7, 2, 5, 1, 6, 4, 5],
  [5, 1, 3, 7, 2, 1, 6, 6], 
  [1, 7, 6, 5, 2, 3, 4, 7],
  [2, 6, 4, 1, 7, 5, 3, 8],
  [4, 5, 6, 3, 1, 2, 7, 9],
  [1, 5, 6, 7, 4, 3, 2, 0],
  [7, 4, 3, 2, 6, 5, 1, 1],
  [6, 5, 1, 4, 3, 7, 2, 2],
  [3, 1, 5, 7, 2, 6, 4, 1],
  [7, 4, 5, 6, 3, 2, 1, 2],
  [2, 6, 1, 3, 4, 7, 5, 9],
  [5, 7, 4, 2, 6, 3, 1, 4],
  [4, 6, 7, 5, 3, 1, 2, 8],
  [2, 3, 6, 4, 5, 7, 1, 0],
  [7, 1, 3, 4, 2, 6, 5, 2],
  [6, 4, 2, 7, 5, 1, 3, 4],
  [3, 2, 4, 5, 6, 7, 1, 3],
  [5, 6, 1, 7, 4, 2, 3, 5],
  [7, 2, 1, 3, 5, 6, 4, 6],
  [4, 5, 3, 7, 2, 6, 1, 0],
  [1, 2, 4, 7, 5, 3, 6, 1],
];
function HeatTable() { // Give your component a name
  const row0Data = inputData[0].slice(1); // Extract row0 values
  
  return (
    <div style={{ fontSize: "12px", width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <div style={{ paddingLeft: "73px", paddingBottom: "14px" }}>
      {/* third heatmap created using row0 */}
      <HeatMap
        xLabels={xLabels.slice(1)}
        yLabels={[""]} // Use an empty label for alignment
        xLabelsLocation={"top"}
        xLabelWidth={50}
        data={[row0Data]} // Use the extracted row0 values
        squares={false}
        height={1}
        cellStyle={(background, value, min, max, data, x, y) => {
          const getColorScale = (minValue, midValue, maxValue) => {
            return scaleLinear()
              .domain([minValue, midValue, maxValue])
              .range(["#63be7b", "#ffeb84", "#f8696b"]);
          };
          const minValue = Math.min(...[row0Data].flat());
          const maxValue = Math.max(...[row0Data].flat());
          const midValue = (minValue + maxValue) / 2;
          const colorScale = getColorScale(minValue, midValue, maxValue);
          const color = colorScale(value);
          const cellStyle = {
            background: color,
            color: "#000",
            width: "60px", // Set the width of each cell to 100% for horizontal rectangle
            height: "19px", // Adjust the height of each cell
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "0px solid #ccc",
            boxSizing: "border-box",
            margin: "0px",
          };

        return cellStyle;
        }}
        cellRender={(value) => value && <div>{value}</div>}
        labelStyle={{ fontSize: "12px", fontWeight: "bold" }}
      />
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ paddingLeft: "0px" }}>
      {/* col0 without row0 */}
      <HeatMap
        xLabels={xLabelsSecondHeatMap.slice(0, 1)}
        yLabels={yLabels.slice(1)}
        xLabelsLocation={"top"}
        xLabelWidth={50}
        data={inputData.slice(1).map(row => [row[0]])}
        squares={false} // Set squares prop to false
        height={0} // Adjust the height of each cell
        cellStyle={(background, value, min, max, data, x, y) => {
          const getColorScale = (minValue, midValue, maxValue) => {
            return scaleLinear()
              .domain([minValue, midValue, maxValue])
              .range(["#63be7b", "#ffeb84", "#f8696b"]);
          };
          const minValue = Math.min(...inputData.slice(1).map(row => [row[0]]).flat());
          const maxValue = Math.max(...inputData.slice(1).map(row => [row[0]]).flat());
          const midValue = (minValue + maxValue) / 2;
          const colorScale = getColorScale(minValue, midValue, maxValue);
          const color = colorScale(value);
          const cellStyle = {
            background: color,
            color: "#000",
            width: "98px", // Set the width of each cell to 100% for horizontal rectangle
            height: "19px", // Adjust the height of each cell
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "0px solid #ccc",
            boxSizing: "border-box",
            margin: "0px",
          };

        return cellStyle;
        }} 
        cellRender={(value) => value && <div>{value}</div>}
        labelStyle={{ fontSize: "12px", fontWeight: "bold" }}
        yLabelTextAlign="Left" // Align y-axis labels to the right
      />
      </div>
      
      <div style={{ paddingRight: "0px", marginLeft: "-25px" }}>
      {/* non col0 without row0 */}
      <HeatMap
        xLabels={xLabelsSecondHeatMap.slice(1)}
        yLabels={yLabelsSecondHeatMap.slice(1)}
        xLabelsLocation={"top"}
        xLabelWidth={50}
        data={inputData.slice(1).map(row => row.slice(1))}
        squares={false} // Set squares prop to false
        height={0} // Adjust the height of each cell
        cellStyle={(background, value, min, max, data, x, y) => {
          const getColorScale = (minValue, midValue, maxValue) => {
            return scaleLinear()
              .domain([minValue, midValue, maxValue])
              .range(["#63be7b", "#ffeb84", "#f8696b"]);
          };
          const minValue = Math.min(...inputData.slice(1).map(row => row.slice(1)).flat());
          const maxValue = Math.max(...inputData.slice(1).map(row => row.slice(1)).flat());
          const midValue = (minValue + maxValue) / 2;
          const colorScale = getColorScale(minValue, midValue, maxValue);
          const color = colorScale(value);
          const cellStyle = {
            background: color,
            color: "#000",
            width: "60px", // Set the width of each cell to 100% for horizontal rectangle
            height: "19px", // Adjust the height of each cell
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "0px solid #ccc",
            boxSizing: "border-box",
            margin: "0px",
          };

        return cellStyle;
        }} 
        cellRender={(value) => value && <div>{value}</div>}
        labelStyle={{ fontSize: "12px", fontWeight: "bold" }}
        yLabelTextAlign="right" // Align y-axis labels to the right
      />
      </div>
    </div>
    </div>
  );
}
export default HeatTable; // Export the named component

