import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
const ScatterPlot = () => {
  const scatterData = [
    [3, 20], [4, 70], [12, 40], [10, 80], [80, 10], [90, 90], [100, 20], [40, 100], 
  [1, 0], [50, 50.0001], [10.0, 10.200], [9.030, 99.999],
  [2, 15], [5, 60], [14, 35], [20, 70], [75, 5], [85, 85], [95, 15], [35, 90], 
  [0, 1], [48, 48.0001], [8.0, 9.200], [7.030, 98.999],
  [1, 10], [6, 50], [16, 30], [30, 60], [70, 3], [80, 80], [88, 12], [30, 80], 
  [0, 2], [46, 46.0001], [6.0, 8.200], [6.030, 97.999],
  [0, 8], [8, 40], [18, 25], [25, 50], [65, 2], [75, 75], [81, 10], [20, 70], 
  [0, 3], [44, 44.0001], [4.0, 7.200], [5.030, 96.999],
  [0, 5], [10, 30], [20, 20], [20, 40], [60, 1], [70, 70], [75, 5], [10, 60], 
  [0, 4], [42, 42.0001], [3.0, 6.200], [4.030, 95.999],
  ];
  const scatterData2 = [
    [100,100],
  ];
  const scatterData3 = [
    [100,50],
  ];
  const scatterData4 = [
    [16,100],
  ];
  const scatterData5 = [
    [16,50],
  ];
  const scatterData6 = [
    [6,100],
  ];
  const scatterData7 = [
    [6,50],
  ];

  const getOption = () => {
    const isHiddenTooltip = (x, y) =>
    scatterData2.some((d) => d[0] === x && d[1] === y) ||
    scatterData3.some((d) => d[0] === x && d[1] === y) ||
    scatterData4.some((d) => d[0] === x && d[1] === y) ||
    scatterData5.some((d) => d[0] === x && d[1] === y) ||
    scatterData6.some((d) => d[0] === x && d[1] === y) ||
    scatterData7.some((d) => d[0] === x && d[1] === y);
    return {
      grid: [
        {
          left: '63%',
          right: '70%',
          bottom: '85%',
          top: '100%',
          containLabel: true,
          aspectRatio: 1, // Set the aspect ratio to 1 for a square graph
        },
      ],
      xAxis: [
        {
        type: 'value',
        position: 'bottom',
        splitNumber: 50,
        interval: 2,
        axisLabel: {
          show: true,
          fontSize: 10,
          color: '#262626',
          formatter: function (value) {
                if ([0, 6, 16, 100 ].includes(value)) 
                   {return value;} 
                else {return '';}
         },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show:false,
          lineStyle: {color: '#545454',width: 1}
        }, 
        splitLine: {
            show: true,
            lineStyle: {
              color: ['#545454', 'transparent', 'transparent', '#545454', 'transparent', '#dbd9d9', 'transparent', 'transparent', '#545454', 'transparent'
              , '#dbd9d9', 'transparent', 'transparent', 'transparent', 'transparent', '#dbd9d9', 'transparent', 'transparent', 'transparent'
              , 'transparent', '#dbd9d9', 'transparent', 'transparent', 'transparent', 'transparent', '#dbd9d9', 'transparent', 'transparent'
              , 'transparent', 'transparent', '#dbd9d9', 'transparent', 'transparent', 'transparent', 'transparent', '#dbd9d9', 'transparent'
              , 'transparent', 'transparent', 'transparent', '#dbd9d9', 'transparent', 'transparent', 'transparent', 'transparent', '#dbd9d9'
              , 'transparent', 'transparent', 'transparent', 'transparent', '#545454'],
              opacity: 1,
              type: "solid",
            },
          },  
      },
    ],
      yAxis: [
        {
        type: 'value',
        position: 'left',
        splitNumber: 50,
        interval: 2,
        axisLabel: {
          show: true,
          fontSize: 10,
          color: '#262626',
          formatter: function (value) {
            if ([0,50, 100].includes(value)) {
               return value;
          } else {
               return '';
          }
         },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show:true,
          lineStyle: {color: '#545454',width: 1}
        },
        splitLine: {
            show: true,
            lineStyle: {
              color: ['#545454', 'transparent', 'transparent', 'transparent', 'transparent', '#dbd9d9', 'transparent', 'transparent', 'transparent', 'transparent'
              , '#dbd9d9', 'transparent', 'transparent', 'transparent', 'transparent', '#dbd9d9', 'transparent', 'transparent', 'transparent'
              , 'transparent', '#dbd9d9', 'transparent', 'transparent', 'transparent', 'transparent', '#545454', 'transparent', 'transparent'
              , 'transparent', 'transparent', '#dbd9d9', 'transparent', 'transparent', 'transparent', 'transparent', '#dbd9d9', 'transparent'
              , 'transparent', 'transparent', 'transparent', '#dbd9d9', 'transparent', 'transparent', 'transparent', 'transparent', '#dbd9d9'
              , 'transparent', 'transparent', 'transparent', 'transparent', '#545454'],
              opacity: 1,
              type: "solid",
            },
          }, 
      },
      {
        type: 'value',
        axisLine: {
          show:true,
          lineStyle: {color: '#545454',width: 1}
        },
      }
    ],
      legend: {
        data: ['Good Driver', 'Sportive Driver', 'Quiet Safe Driver', 'Reckless Driver', 'Quiet Dangerous Driver', 'Dangerous Driver'],
        orient: 'horizontal',
        left: 300,
        top: 1,
        textStyle: { color: '#262626' }
      },
      tooltip: {
        formatter: function (params) {
          const x = params.data[0];
          const y = params.data[1];
          let type = '';

          if (x >= 0 && x <= 6 && y >= 0 && y <= 50) {
            type = 'Good Driver';
          }
          else if (x > 6 && x <= 16 && y >= 0 && y <= 50) {
            type = 'Quiet Safe Driver';
          }
          else if (x > 16 && x <= 100 && y >= 0 && y <= 50) {
            type = 'Quiet Dangerous Driver';
          }
          else if (x >= 0 && x <= 6 && y > 50 && y <= 100) {
            type = 'Sportive Driver';
          }
          else if (x > 6 && x <= 16 && y > 50 && y <= 100) {
            type = 'Reckless Driver';
          }
          else if (x > 16 && x <= 100 && y > 50 && y <= 100) {
            type = 'Dangerous Driver';
          }if (isHiddenTooltip(x, y)) {
            return '';
          }

          return '<div style="text-align:left">' +
            '<b><u>' + type + '</u></b>' +
            '<br>Anticipatory Driving: ' + x +
            '<br>Self Confidence: ' + y +
            '</div>';
        }
      },
      series: [
        {
          type: 'scatter',
          name: 'Good Driver',
          data: scatterData.filter((d) => d[0] >= 0 && d[0] <= 6 && d[1] >= 0 && d[1] <= 50),
          symbolSize: 12,
          symbol: 'circle',
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: "rgba(94, 148, 60, 0.7)",
              shadowOffsetY: 5,
              color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgba(94, 148, 60, 0.49)",
                },
                {
                  offset: 1,
                  color: "rgba(94, 148, 60)",
                },
              ]),
            },
          },
        },
        {
          type: 'scatter',
          name: 'Good Driver',
          data: scatterData7.filter((d) => d[0] >= 0 && d[0] <= 6 && d[1] >= 0 && d[1] <= 50),
          symbolSize: 10,
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: 'transparent',
            },
          },
        },
        {
          type: 'scatter',
          name: 'Sportive Driver',
          data: scatterData.filter((d) => d[0] >= 0 && d[0] <= 6 && d[1] > 50 && d[1] <= 100),
          symbolSize: 12,
          symbol: 'circle',
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: "rgba(60, 76, 207, 0.7)",
              shadowOffsetY: 5,
              color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(145, 155, 236)",
                },
                {
                  offset: 1,
                  color: "rgb(60, 76, 207)",
                },
              ]),
            },
          },
        },
        {
          type: 'scatter',
          name: 'Sportive Driver',
          data: scatterData6.filter((d) => d[0] >= 0 && d[0] <= 6 && d[1] > 50 && d[1] <= 100),
          symbolSize: 10,
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: 'transparent',
            },
          },
        },
        {
          type: 'scatter',
          name: 'Quiet Safe Driver',
          data: scatterData.filter((d) => d[0] > 6 && d[0] <= 16 && d[1] >= 0 && d[1] <= 50),
          symbolSize: 12,
          symbol: 'circle',
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: "rgba(2, 164, 153, 0.7)",
              shadowOffsetY: 5,
              color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(33, 222, 209)",
                },
                {
                  offset: 1,
                  color: "rgb(2, 164, 153)",
                },
              ]),
            },
          },
        },
        {
          type: 'scatter',
          name: 'Quiet Safe Driver',
          data: scatterData5.filter((d) => d[0] > 6 && d[0] <= 16 && d[1] >= 0 && d[1] <= 50),
          symbolSize: 10,
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: 'transparent',
            },
          },
        },
        {
          type: 'scatter',
          name: 'Reckless Driver',
          data: scatterData.filter((d) => d[0] > 6 && d[0] <= 16 && d[1] > 50 && d[1] <= 100),
          symbolSize: 12,
          symbol: 'circle',
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: "rgba(121, 60, 148, 0.7)",
              shadowOffsetY: 5,
              color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgba(121, 60, 148, 0.5)",
                },
                {
                  offset: 1,
                  color: "rgba(121, 60, 148)",
                },
              ]),
            },
          },
        },
        {
          type: 'scatter',
          name: 'Reckless Driver',
          data: scatterData4.filter((d) => d[0] > 6 && d[0] <= 16 && d[1] > 50 && d[1] <= 100),
          symbolSize: 10,
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: 'transparent',
            },
          },
        },
        {
          type: 'scatter',
          name: 'Quiet Dangerous Driver',
          data: scatterData.filter((d) => d[0] > 16 && d[0] <= 100 && d[1] >= 0 && d[1] <= 50),
          symbolSize: 12,
          symbol: 'circle',
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: "rgba(224, 126, 59, 0.7)",
              shadowOffsetY: 5,
              color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgba(224, 126, 59, 0.49)",
                },
                {
                  offset: 1,
                  color: "rgba(224, 126, 59)",
                },
              ]),
            },
          },
        },  
        {
          type: 'scatter',
          name: 'Quiet Dangerous Driver',
          data: scatterData3.filter((d) => d[0] > 16 && d[0] <= 100 && d[1] >= 0 && d[1] <= 50),
          symbolSize: 10,
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: 'transparent',
            },
          },
        },
        {
          type: 'scatter',
          name: 'Dangerous Driver',
          data: scatterData.filter((d) => d[0] > 16 && d[0] <= 100 && d[1] > 50 && d[1] <= 100),
          symbolSize: 12,
          symbol: 'circle',
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: 'rgba(120, 36, 50, 0.7)',
              shadowOffsetY: 5,
              color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: 'rgb(251, 118, 123)',
                },
                {
                  offset: 1,
                  color: 'rgb(204, 46, 72)',
                },
              ]),
            },
          },
        },
        {
          type: 'scatter',
          name: 'Dangerous Driver',
          data: scatterData2.filter((d) => d[0] > 16 && d[0] <= 100 && d[1] > 50 && d[1] <= 100),
          symbolSize: 10,
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: 'transparent',
            },
          },
        },
      ],
    };
  };
  if (scatterData.length === 0) {
    return (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>No data available</div>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div id="scatter-chart" style={{ width: '200%', height: '100px' }} />
      <ReactEcharts option={getOption()} style={{ width: '100%', height: '550%' }} />
    </React.Fragment>
  );
};

export default ScatterPlot;









// four border