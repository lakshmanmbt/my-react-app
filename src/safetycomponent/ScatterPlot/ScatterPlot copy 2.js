import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
const ScatterPlot = () => {
  const scatterData = [
    [100,100],
    [100,50],
    [16,100],
    [16,50],
    [6,100],
    [6,50],
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
          show:true,
          lineStyle: {color: '#545454',width: 1}
        }, 
        splitLine: {
            show: true,
            lineStyle: {
              color: ['#545454', 'transparent', 'transparent', '#545454', 'transparent', 'transparent', 'transparent', 'transparent', '#545454', 'transparent'
              , 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'
              , 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'
              , 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'
              , 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'
              , 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
              opacity: 1,
              type: "dashed",
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
              color: ['#545454', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'
              , 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'
              , 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', '#545454', 'transparent', 'transparent'
              , 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'
              , 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'
              , 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
              opacity: 1,
              type: "dashed",
            },
          }, 
      },
      {
        type: 'value',
        axisLine: {
          show:false,
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
          symbolSize: 1,
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: 'transparent',
            },
          },
          tooltip: {
            show: false, // Hide the tooltip for this series
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
          symbolSize: 1,
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: 'transparent',
            },
          },
          tooltip: {
            show: false, // Hide the tooltip for this series
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
          symbolSize: 1,
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: 'transparent',
            },
          },
          tooltip: {
            show: false, // Hide the tooltip for this series
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
          symbolSize: 1,
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: 'transparent',
            },
          },
          tooltip: {
            show: false, // Hide the tooltip for this series
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
          symbolSize: 1,
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: 'transparent',
            },
          },
          tooltip: {
            show: false, // Hide the tooltip for this series
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
          symbolSize: 1,
          symbol: 'circle',
          itemStyle: {
            normal: {
              color: 'transparent',
            },
          },
          tooltip: {
            show: false, // Hide the tooltip for this series
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









// no four border 