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
            // borderWidth: 0.5,
            // borderColor: 'black'
          },
        children: [
            { name: 'Heena bhure khan', value: 6, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Sachin dharma bhopi', value: 4, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Amit singh', value: 20, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Dhanshree pawar', value: 8, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Dharmendra tiwari', value: 72, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Tejas chandrakant shigam', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Pintoo yadav', value: 43, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Surekha haribandhu nayak', value: 65, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Ankit mishra', value: 69, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Krishna gupta', value: 77, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Haider sayyed ali', value: 72, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Santosh hari nevarekar', value: 10, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Sanjay gawad', value: 67, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },

        ]
      },
      {
        name: 'C2',
        itemStyle: {
            color: '#7543ab',
            // borderWidth: 0.5,
            // borderColor: 'black'
          },
        children: [
            { name: 'Heena bhure khan', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Sachin dharma bhopi', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Amit singh', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Dhanshree pawar', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Dharmendra tiwari', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Tejas chandrakant shigam', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Pintoo yadav', value: 1, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Surekha haribandhu nayak', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Ankit mishra', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Krishna gupta', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Haider sayyed ali', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Santosh hari nevarekar', value: 3, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Sanjay gawad', value: 1, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
        ]
      },
      {
        name: 'C3',
        itemStyle: {
            color: '#61a0a8',
            // borderWidth: 0.5,
            // borderColor: 'black'
          },
        children: [
            { name: 'Heena bhure khan', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Sachin dharma bhopi', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Amit singh', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Dhanshree pawar', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Dharmendra tiwari', value: 1, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Tejas chandrakant shigam', value: 1, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Pintoo yadav', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Surekha haribandhu nayak', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Ankit mishra', value: 3, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Krishna gupta', value: 4, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Haider sayyed ali', value: 1, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Santosh hari nevarekar', value: 7, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Sanjay gawad', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
        ]
      },
      {
        name: 'C4',
        itemStyle: {
            color: '#dd8668',
            // borderWidth: 0.5,
            // borderColor: 'black'
          },
        children: [
            { name: 'Heena bhure khan', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Sachin dharma bhopi', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Amit singh', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Dhanshree pawar', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Dharmendra tiwari', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Tejas chandrakant shigam', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Pintoo yadav', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Surekha haribandhu nayak', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Ankit mishra', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Krishna gupta', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Haider sayyed ali', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Santosh hari nevarekar', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Sanjay gawad', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
        ]
      },
      {
        name: 'C5',
        itemStyle: {
            color: '#5a8f76',
            // borderWidth: 0.5,
            // borderColor: 'black'
          },
        children: [
            { name: 'Heena bhure khan', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Sachin dharma bhopi', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Amit singh', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Dhanshree pawar', value: 1, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Dharmendra tiwari', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Tejas chandrakant shigam', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Pintoo yadav', value: 1, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Surekha haribandhu nayak', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Ankit mishra', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Krishna gupta', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Haider sayyed ali', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Santosh hari nevarekar', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Sanjay gawad', value: 1, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
        ]
      },
      {
        name: 'C6',
        itemStyle: {
            color: '#ba5d5d',
            // borderWidth: 0.5,
            // borderColor: 'black'
          },
        children: [
            { name: 'Heena bhure khan', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Sachin dharma bhopi', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Amit singh', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Dhanshree pawar', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Dharmendra tiwari', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Tejas chandrakant shigam', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Pintoo yadav', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Surekha haribandhu nayak', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Ankit mishra', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Krishna gupta', value: 0, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Haider sayyed ali', value: 2, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Santosh hari nevarekar', value: 8, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
            { name: 'Sanjay gawad', value: 11, itemStyle: { borderWidth: 0.1, borderColor: 'black' } },
        ]
      },
    ]
  };

  function getLevelOption() {
    return [
      {
        itemStyle: {
          borderColor: '#474747',
          borderWidth: 0,
          gapWidth: 1
        },
        upperLabel: {
          show: false
        }
      },
      {
        itemStyle: {
          borderColor: '#555',
          borderWidth: 5,
          gapWidth: 1
        },
        emphasis: {
          itemStyle: {
            borderColor: '#ddd'
          }
        }
      },
      {
        // colorSaturation: [0.35, 0.5],
        itemStyle: {
          borderWidth: 5,
          gapWidth: 1,
          borderColorSaturation: 0.6
        }
      }
    ];
  }

  // ECharts options
  const options = {
    series: [{
      type: 'treemap',
      visibleMin: 300,
      label: {
        show: true,
        formatter: '{b}: {c}'
      },
      upperLabel: {
        show: true,
        height: 30,
      },
      itemStyle: {
        borderColor: '#fff'
      },
      levels: getLevelOption(),
      data: [data],
      breadcrumb: {
        show: false  // Hide breadcrumb navigation
      },
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
