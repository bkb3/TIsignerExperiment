import React from "react";
import { Line } from "@reactchartjs/react-chart.js";
import "chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes";
import { Tableau10 } from "chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau";
import ChartAnnotationsPlugin from "chartjs-plugin-annotation";

function CorrelationPlot(props) {
  //   let i = props.sliderCurrentPosition;
  let allTimes = props.correlation.map((a) => a.Time);
  let pvalues = props.correlation.map((a) => a["Mean Pvalue"]);
  let data = {
    labels: allTimes,
    datasets: [
      {
        label: "Mean Fluorescence",
        fill: false,
        // lineTension: 0.1,
        data: props.correlation.map((a) => a["Mean SpearmanR"]),
      },
    ],
    // datasets: !props.showAllConstructs
    //   ? [
    //       {
    //         label: "Mean Fluorescence",
    //         fill: false,
    //         // lineTension: 0.1,
    //         data: props.correlation.map((a) => a["Mean SpearmanR"]),
    //       },
    //     ]
    //   : [
    //       {
    //         label: "Replicate 1",
    //         fill: false,
    //         // lineTension: 0.1,
    //         data: props.correlation.map((a) => a["Individual SpearmanR"][0]),
    //       },
    //       {
    //         label: "Replicate 2",
    //         fill: false,
    //         // lineTension: 0.1,
    //         data: props.correlation.map((a) => a["Individual SpearmanR"][1]),
    //       },
    //       {
    //         label: "Replicate 3",
    //         fill: false,
    //         // lineTension: 0.1,
    //         data: props.correlation.map((a) => a["Individual SpearmanR"][2]),
    //       },
    //       {
    //         label: "Replicate 4",
    //         fill: false,
    //         // lineTension: 0.1,
    //         data: props.correlation.map((a) => a["Individual SpearmanR"][3]),
    //       },
    //       {
    //         label: "Replicate 5",
    //         fill: false,
    //         // lineTension: 0.1,
    //         data: props.correlation.map((a) => a["Individual SpearmanR"][4]),
    //       },
    //     ],
  };

  let options = {
    responsive: true,
    maintainAspectRatio: false,
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
        {
          id: "x-axis",
          ticks: {
            beginAtZero: false,
          },
          scaleLabel: {
            display: true,
            labelString: "Time",
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
          let pval = pvalues[tooltipItem.index];
          let datasetLabel =
            data.datasets[tooltipItem.datasetIndex].label || "";
          return [
            `${datasetLabel}`,
            `Spearman's ρ: ${tooltipItem.value}`,
            `P value: ${pval}`,
          ];
        },
      },
      displayColors: false,
    },
    annotation: props.showAnnotation
      ? {
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
        }
      : null,
  };

  return (
    <div style={{ height: "300px" }}>
      <Line data={data} options={options} />
    </div>
    // <div style={{height:'300px'}}>
    //      <Line data={data} options={options} width={350} height={200} />
    // </div>
    // return <Line data={data} options={options} />;
  );
}
export default CorrelationPlot;
