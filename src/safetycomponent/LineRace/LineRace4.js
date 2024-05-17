import React, { useState, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';

const App = () => {
  const [animationSpeed, setAnimationSpeed] = useState(1000); // Initial animation speed set to 1000 milliseconds (1 second)
  const [chartKey, setChartKey] = useState(0); // Key to force chart re-render
  const chartRef = useRef(null);

  const handleSpeedChange = (event) => {
    const newSpeed = parseInt(event.target.value, 10);
    setAnimationSpeed(newSpeed);
  };

  const incrementSpeed = () => {
    setAnimationSpeed(animationSpeed + 100); // Increment speed by 100 milliseconds
  };

  const decrementSpeed = () => {
    if (animationSpeed > 100) {
      setAnimationSpeed(animationSpeed - 100); // Decrement speed by 100 milliseconds, ensuring it doesn't go below 100
    }
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
        name: 'Sample Data',
        data: [150, 230, 224, 218, 135, 147, 260, 300, 290, 330, 240, 200],
        type: 'line',
        animation: true,
        animationDuration: animationSpeed,
      },
    ],
  };

  return (
    <div className="App">
      <h1>Line Chart Example</h1>
      <div className="speed-control">
        <button onClick={decrementSpeed}>&#9666;</button>
        <input
          type="number"
          value={animationSpeed}
          onChange={handleSpeedChange}
          min="100"
          step="100"
        />
        <button onClick={incrementSpeed}>&#9656;</button>
        <button onClick={handleReplayClick}>Replay</button>
      </div>
      <ReactEcharts key={chartKey} ref={chartRef} option={option} style={{ height: '300px', width: '100%' }} />
    </div>
  );
};

export default App;
