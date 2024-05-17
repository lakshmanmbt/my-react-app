import React, { useState, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';

const App = () => {
  const [animationSpeed, setAnimationSpeed] = useState(10000); // Initial animation speed set to 1000 milliseconds (1 second)
  const [chartKey, setChartKey] = useState(0); // Key to force chart re-render
  const chartRef = useRef(null);

  const handleSpeedChange = (event) => {
    const newSpeed = parseInt(event.target.value, 10);
    setAnimationSpeed(newSpeed);
  };

  const handleReplayClick = () => {
    // Increment the key to force the chart to re-render
    setChartKey((prevKey) => prevKey + 1);
  };

  const option = {
    grid: {
      left: '30%', // Set the left padding to 10% of the chart width
      right: '30%', // Set the right padding to 10% of the chart width
      top: '10%', // Set top padding to reduce the height
      bottom: '10%', // Set bottom padding to reduce the height
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: false,
        alignWithLabel: true,
        lineStyle: {color: '#6f7275', width: 1}
      },
      axisLine: {
        lineStyle: {
        color: '#e3e3e3', // Change this color to your desired color (e.g., 'red')
        width: 0.5 // You can also adjust the line width if needed
        }
      },
      axisLabel: {
        color: '#686968', // Set the color of the axis label text (e.g., black)
      },
      data: ['1km', '2km', '3km', '4km', '5km', '6km', '7km', '8km', '9km', '10km', '11km', '12km'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Gps Speed',
        data: [
          ['1km', 25],
          ['2km', 27],
          ['3km', 34],
          ['4km', 42],
          ['5km', 48],
          ['6km', 55],
          ['7km', 64],
          ['8km', 72],
          ['9km', 95],
          ['10km', 98],
          ['11km', 97],
          ['12km', 1],
        ],
        type: 'line',
        animation: true,
        animationDuration: animationSpeed,
        showSymbol: false,
        labelLayout: {
          moveOverlap: 'shiftY'
        },
        endLabel: {
          show: true,
          formatter: function (params) {
            const seriesName = params.seriesName;
            const dataValue = params.value[1]; // Access the y-axis value directly from params.value
        
            return seriesName + ': ' + dataValue;
          },
        },
      },
      {
        name: 'Speed Limit', // Name for the second line
        data: [
          ['1km', 60],
          ['2km', 40],
          ['3km', 40],
          ['4km', 40],
          ['5km', 40],
          ['6km', 40],
          ['7km', 40],
          ['8km', 40],
          ['9km', 40],
          ['10km', 40],
          ['11km', 40],
          ['12km', 40],
        ],
        type: 'line',
        animation: true,
        animationDuration: animationSpeed,
        showSymbol: false,
        labelLayout: {
          moveOverlap: 'shiftY'
        },
        endLabel: {
          show: true,
          formatter: function (params) {
            const seriesName = params.seriesName;
            const dataValue = params.value[1]; // Access the y-axis value directly from params.value
        
            return seriesName + ': ' + dataValue;
          },
        },
      },
      {
        name: 'Risk Values', // Name for the third line
        data: [
          ['1km', 2],
          ['2km', 3],
          ['3km', 4],
          ['4km', 5],
          ['5km', 12],
          ['6km', 24],
          ['7km', 36],
          ['8km', 65],
          ['9km', 83],
          ['10km', 92],
          ['11km', 100],
          ['12km', 100],
        ], // Data points for the third line
        type: 'line', // Type of the series (line chart)
        animation: true, // Enable animation for the series
        animationDuration: animationSpeed, // Set animation duration in milliseconds
        showSymbol: false, // Hide data points on the line
        labelLayout: {
          moveOverlap: 'shiftY'
        },
        endLabel: {
          show: true,
          formatter: function (params) {
            const seriesName = params.seriesName;
            const dataValue = params.value[1]; // Access the y-axis value directly from params.value
        
            return seriesName + ': ' + dataValue;
          },
        },
      },
    ],
  };

  return (
    <div className="App">
      <h1>Speed Violation Chart</h1>
      <div className="speed-control">
        <input
          type="number"
          value={animationSpeed}
          onChange={handleSpeedChange}
          min="100"
          step="100"
        />
        <button onClick={handleReplayClick}>Replay</button>
      </div>
      <ReactEcharts key={chartKey} ref={chartRef} option={option} style={{ height: '300px', width: '100%' }} />
    </div>
  );
};

export default App;
