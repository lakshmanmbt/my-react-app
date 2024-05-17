import React, { useState } from 'react';
import ReactEcharts from 'echarts-for-react';

const App = () => {
  const [animationSpeed, setAnimationSpeed] = useState(1000); // Initial animation speed set to 1000 milliseconds (1 second)
  const [chartKey, setChartKey] = useState(0); // Key to force chart re-render

  const handleSpeedChange = (event) => {
    const selectedSpeed = parseInt(event.target.value, 10);
    setAnimationSpeed(selectedSpeed);
  };

  const handleReplayClick = () => {
    // Increment the key to force the chart to re-render
    setChartKey((prevKey) => prevKey + 1);
  };

  const option = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260, 300, 290, 330, 240, 200],
        type: 'line',
        animation: true,
        animationDuration: animationSpeed, // Set the animation duration based on user selection
      },
    ],
  };

  return (
    <div className="App">
      <h1>Line Chart Example</h1>
      <label>Select Animation Speed:</label>
      <select onChange={handleSpeedChange} value={animationSpeed}>
        <option value={500}>0.5 seconds</option>
        <option value={1000}>1 second</option>
        <option value={1500}>1.5 seconds</option>
        <option value={2000}>2 seconds</option>
      </select>
      <button onClick={handleReplayClick}>Replay</button>
      <ReactEcharts key={chartKey} option={option} style={{ height: '300px', width: '100%' }} />
    </div>
  );
};

export default App;
