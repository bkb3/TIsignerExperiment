import React, { Fragment, useState } from "react";
import { Scatter } from "@reactchartjs/react-chart.js";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from '@material-ui/lab/Alert';
import "chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes";
import { Tableau10 } from "chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau";
import { sequences } from "./Data/Sequences";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PlotLegend from "../Main/PlotLegend";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridItem: {
    alignItems: "center",
  },
  [theme.breakpoints.up("md")]: {
    gridItem: {
      alignItems: "flex-start",
    },
  },
  typography: {
    width: "100%",
    maxWidth: 500,
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  title: {
    fontSize: 14,
  },
  button: {
    margin: theme.spacing(1),
  },
  sequence: {
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    backgroundColor: theme.palette.background.paper,
    display: "inline-block",
    maxHeight: "200px",
    overflow: "auto",
  },
}));

let types = sequences.map((a) => a["Type"]);
let openingEnergy = sequences.map((a) => a["Opening Energy"]);
let expressionScore = sequences.map((a) => a["Expression Score"]);
let nucleotideSequence = sequences.map((a) => a["First 30 nt"]);
let nativeGFP = nucleotideSequence[0];

const data = {
  datasets: [
    {
      label: "GFP construct",
      data: openingEnergy.map((v, i) => ({ x: v, y: expressionScore[i] })),
      pointRadius: function (context) {
        var index = context.dataIndex;
        return sequences[index].Type === "Optimised" ? 2 : 5;
      },
      pointStyle: function (context) {
        var index = context.dataIndex;
        return sequences[index].Type === "Commercial"
          ? "triangle"
          : sequences[index].Type === "Native"
          ? "rect"
          : "circle";
      },
      pointHoverRadius: 7,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        scaleLabel: {
          display: true,
          labelString: "Expression Score",
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
          labelString: "Opening Energy (kcal/mol)",
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
        let datasetLabel = data.datasets[tooltipItem.datasetIndex].label || "";
        return [
          `${datasetLabel} : ${constructType}`,
          `Expression Score: ${tooltipItem.value}`,
          `Opening Energy: ${tooltipItem.label} kcal/mol`,
        ];
      },
    },
    displayColors: false,
  },
};

function GFPConstructs() {
  const classes = useStyles();
  const [clickedElementIndex, setClickedElementIndex] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


  const getElementAtEvent = (element) => {
    if (!element.length) return;

    const { _index: index } = element[0];
    setClickedElementIndex(`${index}`);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        GFP constructs
      </Typography>
      <Typography variant="body1" gutterBottom>
        The GFP constructs used in this experiment are shown in the plot below.
        The largest dot is the native GFP.
      </Typography>

      <pre className={classes.sequence}>
        <code>
          <br />
          >T7lac
          <br />
          AGGGGAATTGTGAGCGGATAACAATTCCCCTCTAGAAATAATTTTGTTTAACTTTAAGAAGGAGATATACC
          <br />
          >GFP (Native)
          <br />
          ATGAGTAAAGGAGAAGAACTTTTCACTGGAGTTGTCCCAATTCTTGTTGAATTAGATGGTGATGTTAATGGGCACAAATTTTCTGTCAGTGGAGAGGGTGAAGGTGATGCAACATACGGAAAACTTACCCTTAAATTTATTTGCACTACTGGAAAACTACCTGTTCCATGGCCAACACTTGTCACTACTTTCTCTTATGGTGTTCAATGCTTTTCAAGATACCCAGATCATATGAAACGGCATGACTTTTTCAAGAGTGCCATGCCCGAAGGTTATGTACAGGAAAGAACTATATTTTTCAAAGATGACGGGAACTACAAGACACGTGCTGAAGTCAAGTTTGAAGGTGATACCCTTGTTAATAGAATCGAGTTAAAAGGTATTGATTTTAAAGAAGATGGAAACATTCTTGGACACAAATTGGAATACAACTATAACTCACACAATGTATACATCATGGCAGACAAACAAAAGAATGGAATCAAAGTTAACTTCAAAATTAGACACAACATTGAAGATGGAAGCGTTCAACTAGCAGACCATTATCAACAAAATACTCCAATTGGAGATGGCCCTGTCCTTTTACCAGACAACCATTACCTGTCCACACAATCTGCCCTTTCGAAAGATCCCAACGAAAAGAGAGATCACATGGTCCTTCTTGAGTTTGTAACAGCTGCTGGGATTACACATGGCATGGATGAACTATACAAATAG
        </code>
      </pre>

    <PlotLegend page='Constructs'/>

      <Grid container direction="row" >
        <Grid item md={6} className={classes.gridItem}>
          <div style={{height:'300px'}}>
            <Scatter
              data={data}
              options={options}
              getElementAtEvent={getElementAtEvent}
              // width={350}
              // height={350}
            />
          </div>
        </Grid>
        <Grid item md={4} className={classes.gridItem}>
          <div className={classes.paper}>
            <Typography
              variant="h6"
              gutterbottom="true"
              className={classes.typography}
            >
              {!clickedElementIndex
                ? "Click on a point to view the sequence."
                : "First 30 nucleotides:"}
            </Typography>
            {!clickedElementIndex ? null : (
              <Fragment>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterbottom="true"
                >
                  {`GFP construct: ${types[clickedElementIndex]}`}
                </Typography>
                <Typography variant="h6" component="h2" gutterbottom="true">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: nativeGFP
                        .split("")
                        .map(function (val, idx) {
                          return nucleotideSequence[clickedElementIndex][
                            idx
                          ] === val
                            ? val
                            : `<mark>${nucleotideSequence[clickedElementIndex][idx]}</mark>`;
                        })
                        .join(""),
                    }}
                  className={classes.sequence} />
                  {/* Showing the difference in sequence w.r.to native */}
                </Typography>

                <Typography variant="body2" component="p" gutterbottom="true">
                  {`Expression Score : ${expressionScore[clickedElementIndex]}`}
                </Typography>
                <Typography variant="body2" component="p" gutterbottom="true">
                  {`Opening Energy : ${openingEnergy[clickedElementIndex]} kcal/mol`}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  {sequences[clickedElementIndex]['Type'] === "Native"
                    ? null
                    : "Changes with respect to the native are highlighted."}
                </Typography>
              </Fragment>
            )}
          </div>
        </Grid>
      </Grid>

      <Grid container direction="row" justify="center">
        <Button
          color="default"
          className={classes.button}
          startIcon={<GetAppIcon />}
          href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(sequences)
          )}`}
          download="TIsigner_GFP_constructs.json"
          key="Download Constructs (JSON)"
          onClick={handleClick}
        >
          Download Constructs (JSON)
        </Button>

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Downloaded! Please save the file."
          action={
            <Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Fragment>
          }
        />
      </Grid>
    </div>
  );
}

export default GFPConstructs;
