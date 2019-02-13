// var type = 'linear';
// var count = 0;

// //get chart data
// var energyData = {
//     label: "Energy",
//     fill: true,
//     lineTension: 0.1,
//     backgroundColor: "rgba(51,51,255,0.1)",
//     borderColor: "rgba(0,51,255,6)",
//     borderCapStyle: 'round',
//     borderDash: [],
//     borderDashOffset: 0.0,
//     borderJoinStyle: 'mitter',
//     // data should be energy
//     data: ["0.557756", "0.667", "0.665350","0.590360"],
//     yAxisID: 'y-axis-1',
// };
// var LoudnessData = {
//     label: "Loudness",
//     fill: true,
//     lineTension: 1,
//     backgroundColor: "rgba(255,0,0,0.2)",
//     borderColor: "rgba(255, 179, 64, 6)",
//     borderCapStyle: 'round',
//     borderDash: [],
//     borderDashOffset: 0.0,
//     borderJoinStyle: 'mitter',
//     // data should be income
//     data: ["-9.00656", "-6.00965", "-6.83917","-6.607360"],
//     yAxisID: 'y-axis-2'
// };
// var tempoData = {
//     label: "Tempo",
//     fill: true,
//     lineTension: 0,
//     backgroundColor: "rgba(155, 99, 132, 3)",
//     borderColor: "rgba(51,255,102,7)",
//     borderCapStyle: 'round',
//     borderDash: [],
//     borderDashOffset: 0.0,
//     borderJoinStyle: 'mitter',
//     // data should be from machine learning
//     data: ["119", "120", "117.85288","119.893060"],
//     // yAxisID: 'y-axis-1', 
// };
// var valenceData = {
//     label: "Valence",
//     fill: true,
//     lineTension: 0,
//     backgroundColor: "rgba(244, 66, 226,3)",
//     borderColor: "rgba(51,255,102,7)",
//     borderCapStyle: 'round',
//     borderDash: [],
//     borderDashOffset: 0.0,
//     borderJoinStyle: 'mitter',
//     // data should be from machine learning
//     data: ["0.497036", "-0.51339", "0.453720","0.446680"],
//     // yAxisID: 'y-axis-1', 
// };

// var config = {
//     type: 'bar',
//     data: {
//         labels: ['Mamta', 'Zoe', 'Kelly','Top 50 Songs'],
//         //load datasets dynamically
//     },
//     options: {
//         responsive: true,
//         title: {
//             display: true,
//             // text: 'Music Machine Learing'
//         },
//         tooltips: {
//             mode: 'index'
//         },
//         scales: {
//             yAxes: [{
//                 display: true,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Mean'
//                 },
//                 type: type,
//                 ticks: {
//                     beginAtZero: true,
//                     // min: -9
//                 },
//                 position: 'left',
//                 id: 'y-axis-1'
//             },
//             {
//                 display: false,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Mean'
//                 },
//                 type: type,
//                 ticks: {
//                     beginAtZero: true
//                 },
//                 position: 'right',
//                 id: 'y-axis-2',
//                 gridLines: {
//                     drawOnChartArea: false, // only want the grid lines for one axis to show up
//                 }
//             }]
//         }
//     }

// };
// window.onload = function () {
//     //get default chart data
//     getChartByData();
// };

// document.getElementById('toggleScale').addEventListener('click', function () {
//     count = count >= 4 ? 0 : count;
//     count++;
//     getChartByData(count);
// });

// var getChartByData = function (chartType) {
//     switch (chartType) {
//         case 0:
//             config.data.datasets = [energyData];
//             break;
//         case 1:
//             config.data.datasets = [LoudnessData];
//             config
//             break;
//         case 2:
//             config.data.datasets = [tempoData];
//             break;
//         case 3:
//             config.data.datasets = [valenceData];
//             break;
//         default:
//             config.data.datasets = [energyData];
//     }
//     //load chart
//     var ctx = document.getElementById('graphTwo').getContext('2d');
//     window.myLine = new Chart(ctx, config);
// };
var type = 'linear';
var count = 0;

//get chart data
var energyData = {
    label: "Energy",
    fill: true,
    lineTension: 0.1,
    backgroundColor: "rgba(51,51,255,0.1)",
    borderColor: "rgba(0,51,255,6)",
    borderCapStyle: 'round',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'mitter',
    // data should be energy
    data: ["0.557756", "0.667", "0.665350", "0.590360"],
    yAxisID: 'y-axis-1',
};
var LoudnessData = {
    label: "Loudness",
    fill: true,
    lineTension: 1,
    backgroundColor: "rgba(255,0,0,0.2)",
    borderColor: "rgba(255, 179, 64, 6)",
    borderCapStyle: 'round',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'mitter',
    // data should be income
    data: ["-9.00656", "-6.00965", "-6.83917", "-6.607360"],
    yAxisID: 'y-axis-2'
};
var tempoData = {
    label: "Tempo",
    fill: true,
    lineTension: 0,
    backgroundColor: "rgba(155, 99, 132, 3)",
    borderColor: "rgba(51,255,102,7)",
    borderCapStyle: 'round',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'mitter',
    // data should be from machine learning
    data: ["119", "120", "117.85288", "119.893060"],
    // yAxisID: 'y-axis-1', 
};
var valenceData = {
    label: "Valence",
    fill: true,
    lineTension: 0,
    backgroundColor: "rgba(244, 66, 226,3)",
    borderColor: "rgba(51,255,102,7)",
    borderCapStyle: 'round',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'mitter',
    // data should be from machine learning
    data: ["0.497036", "-0.51339", "0.453720", "0.446680"],
    // yAxisID: 'y-axis-1', 
};

var config = {
    type: 'bar',
    data: {
        labels: ['Mamta', 'Zoe', 'Kelly', 'Top 50 Songs'],
        //load datasets dynamically
    },
    options: {
        responsive: true,
        title: {
            display: true,
            // text: 'Music Machine Learing'
        },
        tooltips: {
            mode: 'index'
        },
        scales: {
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Mean'
                },
                type: type,
                ticks: {
                    beginAtZero: true,
                    // min: -9
                },
                position: 'left',
                id: 'y-axis-1'
            },
            {
                display: false,
                scaleLabel: {
                    display: true,
                    labelString: 'Mean'
                },
                type: type,
                ticks: {
                    beginAtZero: true,
                    min: -10
                },
                position: 'left',
                id: 'y-axis-2',
                gridLines: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                }
            }]
        }
    }

};
window.onload = function () {
    //get default chart data
    getChartByData();
};

document.getElementById('toggleScale').addEventListener('click', function () {
    count = count >= 4 ? 0 : count;
    count++;
    getChartByData(count);
});

var getChartByData = function (chartType) {
    switch (chartType) {
        case 0:
            config.data.datasets = [energyData];
            config.options.scales.yAxes[0] = {
                id: 'y-axis-1'}
            break;
        case 1:
            config.data.datasets = [LoudnessData];
            config.options.scales.yAxes[0] = {
                ticks: {
                    beginAtZero: true,
                    min: -10,
                    max: 2
                }
            };
            break;
        case 2:
            config.data.datasets = [tempoData];
            config.options.scales.yAxes[0] = {
                ticks: {
                    beginAtZero: true,
                    min: 0
                    }
            };
            break;
        case 3:
            config.data.datasets = [valenceData];
            config.options.scales.yAxes[0] = {
                ticks: {
                    beginAtZero: true,
                    min: -0.6
                    }
            };
            break;
        default:
            config.data.datasets = [energyData];
            config.options.scales.yAxes[0] = {
                id: 'y-axis-1'}
            
    }
    //load chart
    var ctx = document.getElementById('graphTwo').getContext('2d');
    window.myLine = new Chart(ctx, config);
};


