import React from "react";
import { Line } from "@reactchartjs/react-chart.js";
import "chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes";
import { Tableau10 } from "chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau";
import ChartAnnotationsPlugin from "chartjs-plugin-annotation";

function CorrelationPlot(props) {
  //   let i = props.sliderCurrentPosition;
  let allTimes = props.correlation.map((a) => a.Time);
  let data = {
    labels: allTimes,
    datasets: [
      {
        label: "SpearmanR",
        fill: false,
        lineTension: 0.1,
        data: props.correlation.map((a) => a["Mean SpearmanR"]),
      },
    ],
  };

  let options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          ticks: {
            // beginAtZero: true,
            // suggestedMax: this.state.fixYAxis ? 50 : null,
            // suggestedMin: this.state.fixYAxis ? 15 : null,
          },
          scaleLabel: {
            display: true,
            labelString: "Spearman's ρ",
          },
        },
      ],
      xAxes: [
        {id: "x-axis",
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
      display: true,
    },
    tooltips: {
      // callbacks: {
      //   label: function (tooltipItem, data) {
      //     let constructType = types[tooltipItem.index];
      //     let datasetLabel =
      //       data.datasets[tooltipItem.datasetIndex].label || "";
      //     return [
      //       `${datasetLabel} : ${constructType}`,
      //       `Expression Score: ${tooltipItem.label}`,
      //       `Normalised Fluorescence: ${tooltipItem.value}`,
      //     ];
      //   },
      // },
      displayColors: false,
    },
    annotation: {
      annotations: [
        {
          type: "line",
          drawTime: "afterDatasetsDraw",
          mode: "vertical",
          scaleID: "x-axis",
          value: props.sliderCurrentPosition,
        //   borderColor: "rgb(75, 192, 192)",
          borderWidth: 2,
          label: {
            enabled: false,
            content: "Current time",
            position: "bottom",
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} width={350} height={200} />;
}
export default CorrelationPlot;
