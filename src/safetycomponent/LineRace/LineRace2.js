import React from 'react';
import ReactEcharts from 'echarts-for-react';

const App = () => {
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
        data: [
          ['Jan', 150],
          ['Feb', 230],
          ['Mar', 224],
          ['Apr', 218],
          ['May', 135],
          ['Jun', 147],
          ['Jul', 260],
          ['Aug', 300],
          ['Sep', 290],
          ['Oct', 330],
          ['Nov', 240],
          ['Dec', 200],
        ],
        type: 'line',
        animation: true,
        animationDuration: 10000,
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
      <h1>Line Chart Example</h1>
      <ReactEcharts option={option} style={{ height: '300px', width: '100%' }} />
    </div>
  );
};

export default App;



