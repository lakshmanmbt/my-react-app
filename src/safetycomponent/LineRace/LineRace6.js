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
    xAxis: {
      type: 'category',
      axisTick: {
        show: true,
        alignWithLabel: true,
        lineStyle: {color: '#6f7275', width: 1}
      },
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Sample Data',
        data: [150, 230, 224, 218, 135, 147, 260, 300, 290, 330, 240, 200],
        type: 'line',
        animation: true,
        animationDuration: animationSpeed,
        showSymbol: false,
      },
      {
        name: 'Sample Data 2', // Name for the second line
        data: [220, 180, 290, 150, 270, 200, 180, 250, 300, 280, 310, 240],
        type: 'line',
        animation: true,
        animationDuration: animationSpeed,
        showSymbol: false,
      },
      {
        name: 'Sample Data 3', // Name for the third line
        data: [280, 320, 270, 310, 250, 290, 330, 300, 320, 340, 310, 290], // Data points for the third line
        type: 'line', // Type of the series (line chart)
        animation: true, // Enable animation for the series
        animationDuration: animationSpeed, // Set animation duration in milliseconds
        showSymbol: false, // Hide data points on the line
      },
    ],
  };

  return (
    <div className="App">
      <h1>Line Chart Example</h1>
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
