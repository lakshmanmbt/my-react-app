import React from 'react';
import ReactEcharts from 'echarts-for-react';

const TreeMapChart = () => {
  // Sample data structure
  const data = {
    name: 'Root',
    children: [
      {
        name: 'C1',
        itemStyle: {
            color: '#407ac2',
            borderWidth: 0.5,
            borderColor: 'black'
          },
        children: [
            { name: 'User 1', value: 1, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 2', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 3', value: 3, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 4', value: 4, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 5', value: 5, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },

        ]
      },
      {
        name: 'C2',
        itemStyle: {
            color: '#7543ab',
            borderWidth: 0.5,
            borderColor: 'black'
          },
        children: [
            { name: 'User 1', value: 1, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 2', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 3', value: 3, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 4', value: 4, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 5', value: 5, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
        ]
      },
      {
        name: 'C3',
        itemStyle: {
            color: '#61a0a8',
            borderWidth: 0.5,
            borderColor: 'black'
          },
        children: [
            { name: 'User 1', value: 1, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 2', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 3', value: 3, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 4', value: 4, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 5', value: 5, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
        ]
      },
      {
        name: 'C4',
        itemStyle: {
            color: '#dd8668',
            borderWidth: 0.5,
            borderColor: 'black'
          },
        children: [
            { name: 'User 1', value: 1, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 2', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 3', value: 3, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 4', value: 4, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 5', value: 5, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
        ]
      },
      {
        name: 'C5',
        itemStyle: {
            color: '#91c7ae',
            borderWidth: 0.5,
            borderColor: 'black'
          },
        children: [
            { name: 'User 1', value: 1, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 2', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 3', value: 3, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 4', value: 4, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 5', value: 5, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
        ]
      },
      {
        name: 'C6',
        itemStyle: {
            color: '#6e7074',
            borderWidth: 0.5,
            borderColor: 'black'
          },
        children: [
            { name: 'User 1', value: 1, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 2', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 3', value: 3, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 4', value: 4, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'User 5', value: 5, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
        ]
      },
    ]
  };

  // ECharts options
  const options = {
    series: [{
      type: 'treemap',
      data: [data],
      label: {
        show: true
      },
      breadcrumb: {
        show: false  // Hide breadcrumb navigation
      }
      
    }]
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ReactEcharts
        option={options}
        style={{ width: '800px', height: '800px', border: '1px solid #ccc' }} // Add border and adjust width/height as needed
        className='react_for_echarts' />
    </div>
  );
  
};

export default TreeMapChart;
