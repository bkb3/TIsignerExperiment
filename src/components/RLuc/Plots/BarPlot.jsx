import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import "chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes";
import { Tableau10 } from "chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau";

function BarPlot(props) {
  let i = props.IndUnind === "Induced" ? 0 : 1;
  let types = props.fluorescence.map((a) => a["Type"]);
  // .map((value) => (typeof value === "string" ? value : "TIsigner"));
  let company = props.fluorescence
    .map((a) => a["Company"])
    .map((value) => (typeof value === "string" ? value : "TIsigner"))
    .map((val, idx) => (types[idx] === "Native" ? "Native" : val));
  let expressionScore = props.fluorescence.map((a) => a["Expression Score"]);

  // For scatterplot
  // let maxYaxis = props.maxYaxis;
  // let minYaxis = props.minYaxis;

  // const fluorescence = !props.showNative
  //   ? props.fluorescence.filter(function (x) {
  //       return x.Type !== "Native";
  //     })
  //   : props.fluorescence;

  const fluorescence = props.fluorescence;
  let currentFluorescence = fluorescence.map(
    (a) => a["Data"][i]["All Luminescence"]
  );

  // let currentMeanFluorescence = fluorescence.map(
  //   (a) => a["Data"][i]["Mean Luminescence"]
  // );

  const data = {
    labels: company,
    datasets: [
      {
        label: 'Mean',
        data: props.fluorescence.map((a) => a["Data"][i]["Mean Luminescence"]),
        fill:false,
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
      },
      {
        type: "scatter",
        label: "Replicate 1",
        data: expressionScore.map((v, j) => ({
          x: v,
          y: currentFluorescence[j][0],
        })),
        pointRadius: function (context) {
          var index = context.dataIndex;
          var d = index < 13 ? fluorescence : props.fluorescence;
          return d[index].Type === "Optimised" ? 3: 5;
        },
        pointStyle: function (context) {
          var index = context.dataIndex;
          var d = index < 13 ? fluorescence : props.fluorescence;
          return d[index].Type === "Commercial"
            ? "triangle"
            : d[index].Type === "Native"
            ? "rect"
            : "circle";
        },
        pointHoverRadius: 7,
      },
      {
        type: "scatter",
        label: "Replicate 2",
        data: expressionScore.map((v, j) => ({
          x: v,
          y: currentFluorescence[j][1],
        })),
        pointRadius: function (context) {
          var index = context.dataIndex;
          var d = index < 13 ? fluorescence : props.fluorescence;
          return d[index].Type === "Optimised" ? 3: 5;
        },
        pointStyle: function (context) {
          var index = context.dataIndex;
          var d = index < 13 ? fluorescence : props.fluorescence;
          return d[index].Type === "Commercial"
            ? "triangle"
            : d[index].Type === "Native"
            ? "rect"
            : "circle";
        },
        pointHoverRadius: 7,
      },
      {
        type: "scatter",
        label: "Replicate 3",
        data: expressionScore.map((v, j) => ({
          x: v,
          y: currentFluorescence[j][2],
        })),
        pointRadius: function (context) {
          var index = context.dataIndex;
          var d = index < 13 ? fluorescence : props.fluorescence;
          return d[index].Type === "Optimised" ? 3: 5;
        },
        pointStyle: function (context) {
          var index = context.dataIndex;
          var d = index < 13 ? fluorescence : props.fluorescence;
          return d[index].Type === "Commercial"
            ? "triangle"
            : d[index].Type === "Native"
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
            beginAtZero: true,
            // suggestedMax: props.fixYAxis ? maxYaxis : null,
            // suggestedMin: props.fixYAxis ? minYaxis : null,
          },
          scaleLabel: {
            display: true,
            labelString: "Normalised Luminescence",
          },
        },
        {
          id: "invoice-amount",
          display: false,
          stacked: false,
          scaleLabel: {
            display: false,
            labelString: "Dollar Amount",
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            // beginAtZero: true,
            // max: props.showNative ? 100 : 98,
            // min: props.showNative ? 40 : 68,
          },
          scaleLabel: {
            display: true,
            labelString: "Expression Score",
          },
        },
        {
          id: "invoice-time",
          type: "linear",
          display: false,
          stacked: false,
          scaleLabel: {
            display: false,
            labelString: "Days",
          },
          ticks: {
            beginAtZero: true,
            stepSize: 1,
            suggestedMax: 125,
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
          // let comp = company[tooltipItem.index];
          let datasetLabel =
            data.datasets[tooltipItem.datasetIndex].label || "";
          return [
            `${datasetLabel}`,
            `Type : ${constructType}`,
            // `Company : ${comp === null ? "N/A" : comp}`,
            `Expression Score: ${expressionScore[tooltipItem.index]}`,
            `Normalised Luminescence: ${tooltipItem.value}`,
          ];
        },
      },
      displayColors: false,
    },
  };

  return (
    <div style={{ height: "300px" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarPlot;
