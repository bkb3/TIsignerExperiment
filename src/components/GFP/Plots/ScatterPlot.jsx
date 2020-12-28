import React from "react";
import { Scatter } from "@reactchartjs/react-chart.js";
import "chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes";
import { Tableau10 } from "chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau";

const maxYaxis = 50;
const minYaxis = 15;

function ScatterPlot(props) {
  let i = props.sliderCurrentPosition;
  let types = props.fluorescence.map((a) => a["Type"]);
  // let openingEnergy = fluorescence.map((a) => a["Opening Energy"]);
  let expressionScore = props.fluorescence.map((a) => a["Expression Score"]);
  // let nucleotideSequence = props.fluorescence.map((a) => a["First 30 nt"]);
  // let nativeGFP = nucleotideSequence[0];

  let currentFluorescence = props.fluorescence.map(
    (a) => a["Data"][i]["All Fluorescence"]
  );

  let currentMeanFluorescence = props.fluorescence.map(
    (a) => a["Data"][i]["Mean Fluorescence"]
  );

  let currentStdFluorescence = props.fluorescence.map(
    (a) => a["Data"][i]["Std Fluorescence"]
  );

  // let currentTime = props.fluorescence.map((a) => a["Data"][i]["Time"]);

  let data = {
    datasets: !props.showAllConstructs
      ? [
          {
            label: "Mean Fluorescence",
            data: expressionScore.map((v, j) => ({
              x: v,
              y: currentMeanFluorescence[j],
              // yMin: currentMeanFluorescence[j] - currentStdFluorescence[j],
              // yMax: currentMeanFluorescence[j] + currentStdFluorescence[j],
            })),
            pointRadius: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Optimised" ? 2 : 5;
            },
            pointStyle: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Commercial"
                ? "triangle"
                : props.fluorescence[index].Type === "Native"
                ? "rect"
                : "circle";
            },
            pointHoverRadius: 7,
          },
          {
            label: "Replicate 1",
            data: expressionScore.map((v, j) => ({
              x: v,
              y: currentFluorescence[j][0],
            })),
            pointRadius: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Optimised" ? 0.5 : 1;
            },
            pointStyle: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Commercial"
                ? "triangle"
                : props.fluorescence[index].Type === "Native"
                ? "rect"
                : "circle";
            },
            pointHoverRadius: 1,
          },
          {
            label: "Replicate 2",
            data: expressionScore.map((v, j) => ({
              x: v,
              y: currentFluorescence[j][1],
            })),
            pointRadius: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Optimised" ? 0.5 : 1;
            },
            pointStyle: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Commercial"
                ? "triangle"
                : props.fluorescence[index].Type === "Native"
                ? "rect"
                : "circle";
            },
            pointHoverRadius: 1,
          },
          {
            label: "Replicate 3",
            data: expressionScore.map((v, j) => ({
              x: v,
              y: currentFluorescence[j][2],
            })),
            pointRadius: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Optimised" ? 0.5 : 1;
            },
            pointStyle: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Commercial"
                ? "triangle"
                : props.fluorescence[index].Type === "Native"
                ? "rect"
                : "circle";
            },
            pointHoverRadius: 1,
          },
          {
            label: "Replicate 4",
            data: expressionScore.map((v, j) => ({
              x: v,
              y: currentFluorescence[j][3],
            })),
            pointRadius: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Optimised" ? 0.5 : 1;
            },
            pointStyle: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Commercial"
                ? "triangle"
                : props.fluorescence[index].Type === "Native"
                ? "rect"
                : "circle";
            },
            pointHoverRadius: 1,
          },
          {
            label: "Replicate 5",
            data: expressionScore.map((v, j) => ({
              x: v,
              y: currentFluorescence[j][4],
            })),
            pointRadius: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Optimised" ? 0.5 : 1;
            },
            pointStyle: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Commercial"
                ? "triangle"
                : props.fluorescence[index].Type === "Native"
                ? "rect"
                : "circle";
            },
            pointHoverRadius: 1,
          },
        ]
      : // [
        //   currentFluorescence[0].map(
        //       (k, l) => (
        //         // console.log("GFP Fluorescence " + i + " " + l),
        //         {
        //           label: "GFP Fluorescence " + i,
        //           data: expressionScore.map((v, j) => ({
        //             x: k,
        //             y: v,
        //           })),
        //           pointRadius: function (context) {
        //             var index = context.dataIndex;
        //             return index === 0 ? 5 : 2;
        //           },
        //           pointHoverRadius: 7,
        //         }
        //       )
        //     ),
        //   ],

        [
          {
            label: "Replicate 1",
            data: expressionScore.map((v, j) => ({
              x: v,
              y: currentFluorescence[j][0],
            })),
            pointRadius: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Optimised" ? 2 : 5;
            },
            pointStyle: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Commercial"
                ? "triangle"
                : props.fluorescence[index].Type === "Native"
                ? "rect"
                : "circle";
            },
            pointHoverRadius: 7,
          },
          {
            label: "Replicate 2",
            data: expressionScore.map((v, j) => ({
              x: v,
              y: currentFluorescence[j][1],
            })),
            pointRadius: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Optimised" ? 2 : 5;
            },
            pointStyle: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Commercial"
                ? "triangle"
                : props.fluorescence[index].Type === "Native"
                ? "rect"
                : "circle";
            },
            pointHoverRadius: 7,
          },
          {
            label: "Replicate 3",
            data: expressionScore.map((v, j) => ({
              x: v,
              y: currentFluorescence[j][2],
            })),
            pointRadius: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Optimised" ? 2 : 5;
            },
            pointStyle: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Commercial"
                ? "triangle"
                : props.fluorescence[index].Type === "Native"
                ? "rect"
                : "circle";
            },
            pointHoverRadius: 7,
          },
          {
            label: "Replicate 4",
            data: expressionScore.map((v, j) => ({
              x: v,
              y: currentFluorescence[j][3],
            })),
            pointRadius: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Optimised" ? 2 : 5;
            },
            pointStyle: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Commercial"
                ? "triangle"
                : props.fluorescence[index].Type === "Native"
                ? "rect"
                : "circle";
            },
            pointHoverRadius: 7,
          },
          {
            label: "Replicate 5",
            data: expressionScore.map((v, j) => ({
              x: v,
              y: currentFluorescence[j][4],
            })),
            pointRadius: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Optimised" ? 2 : 5;
            },
            pointStyle: function (context) {
              var index = context.dataIndex;
              return props.fluorescence[index].Type === "Commercial"
                ? "triangle"
                : props.fluorescence[index].Type === "Native"
                ? "rect"
                : "circle";
            },
            pointHoverRadius: 7,
          },
        ],
  };

  let options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            // beginAtZero: true,
            suggestedMax: props.fixYAxis ? maxYaxis : null,
            suggestedMin: props.fixYAxis ? minYaxis : null,
          },
          scaleLabel: {
            display: true,
            labelString: "Normalised Fluorescence",
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
          scaleLabel: {
            display: true,
            labelString: "Expression Score",
          },
        },
      ],
    },
    plugins: {
      colorschemes: {
        scheme: Tableau10,
      },
    },
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          let constructType = types[tooltipItem.index];
          let datasetLabel =
            data.datasets[tooltipItem.datasetIndex].label || "";
          return [
            `${datasetLabel}`,
            `Type : ${constructType}`,
            `Expression Score: ${tooltipItem.label}`,
            `Normalised Fluorescence: ${tooltipItem.value}`,
          ];
        },
      },
      displayColors: false,
    },
  };

  return (
    <div style={{ height: "300px" }}>
      <Scatter data={data} options={options} />
    </div>
  );
  // <Scatter data={data} options={options} width={350} height={200} />;
  // return <Scatter data={data} options={options} />;
}

export default ScatterPlot;
