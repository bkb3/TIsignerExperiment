import React, { Fragment, useState, Component } from "react";
import { Scatter } from "@reactchartjs/react-chart.js";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import Slider from "@material-ui/core/Slider";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import "chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes";
import { Tableau10 } from "chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau";
import { fluorescence, correlation } from "./Data/Data";

// import { ScatterWithErrorBarsChart } from 'chartjs-chart-error-bars';

const useStyles = (theme) => ({
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
});

// const classes = useStyles;

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderDefaultPosition: 15,
      sliderCurrentPosition: 15,
      fixYAxis: true,
      showAllConstructs: false,
      time: null,
    };
    this.plot = this.plot.bind(this);
  }

  handleSliderChange = (e, newValue) => {
    this.setState(
      {
        sliderCurrentPosition: newValue,
      },
      () => this.plot()
    );
  };

  handleChangeFixYAxisSwitch = (e) => {
    this.setState(
      {
        fixYAxis: !this.state.fixYAxis,
      },
      () => this.plot()
    );
  };

  handleChangeShowAllConstructs = (e) => {
    this.setState(
      {
        showAllConstructs: !this.state.showAllConstructs,
      },
      () => this.plot()
    );
  };

  plot = () => {
    let i = this.state.sliderCurrentPosition;

    let types = fluorescence.map((a) => a["Type"]);
    let openingEnergy = fluorescence.map((a) => a["Opening Energy"]);
    let expressionScore = fluorescence.map((a) => a["Expression Score"]);
    let nucleotideSequence = fluorescence.map((a) => a["First 30 nt"]);

    let nativeGFP = nucleotideSequence[0];

    let currentFluorescence = fluorescence.map(
      (a) => a["Data"][i]["All Fluorescence"]
    );

    let currentMeanFluorescence = fluorescence.map(
      (a) => a["Data"][i]["Mean Fluorescence"]
    );

    let currentStdFluorescence = fluorescence.map(
      (a) => a["Data"][i]["Std Fluorescence"]
    );

    let currentTime = fluorescence.map((a) => a["Data"][i]["Time"]);

    let data = {
      datasets: [
        {
          label: "GFP Fluorescence",
          data: expressionScore.map((v, j) => ({
            x: v,
            y: currentMeanFluorescence[j],
            yMin: currentMeanFluorescence[j] - currentStdFluorescence[j],
            yMax: currentMeanFluorescence[j] + currentStdFluorescence[j],
          })),
          pointRadius: function (context) {
            var index = context.dataIndex;
            return index === 0 ? 5 : 2;
          },
          pointHoverRadius: 7,
        },
        {
          label: "GFP Fluorescence 1",
          data: expressionScore.map((v, j) => ({
            x: v,
            y: currentFluorescence[j][0],
          })),
          pointRadius: function (context) {
            var index = context.dataIndex;
            return index === 0 ? 5 : 2;
          },
          pointHoverRadius: 7,
        },
        {
          label: "GFP Fluorescence 2",
          data: expressionScore.map((v, j) => ({
            x: v,
            y: currentFluorescence[j][1],
          })),
          pointRadius: function (context) {
            var index = context.dataIndex;
            return index === 0 ? 5 : 2;
          },
          pointHoverRadius: 7,
        },
        {
          label: "GFP Fluorescence 3",
          data: expressionScore.map((v, j) => ({
            x: v,
            y: currentFluorescence[j][2],
          })),
          pointRadius: function (context) {
            var index = context.dataIndex;
            return index === 0 ? 5 : 2;
          },
          pointHoverRadius: 7,
        },
        {
          label: "GFP Fluorescence 4",
          data: expressionScore.map((v, j) => ({
            x: v,
            y: currentFluorescence[j][3],
          })),
          pointRadius: function (context) {
            var index = context.dataIndex;
            return index === 0 ? 5 : 2;
          },
          pointHoverRadius: 7,
        },
        {
          label: "GFP Fluorescence 5",
          data: expressionScore.map((v, j) => ({
            x: v,
            y: currentFluorescence[j][4],
          })),
          pointRadius: function (context) {
            var index = context.dataIndex;
            return index === 0 ? 5 : 2;
          },
          pointHoverRadius: 7,
        },
      ],
    };
    // (this.state.fixYAxis? ({ticks:{suggestedMin: 20,
    // suggestedMax: 50}},): null),
    let options = {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            ticks: {
              // beginAtZero: true,
              suggestedMax: this.state.fixYAxis ? 50 : null,
              suggestedMin: this.state.fixYAxis ? 15 : null,
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
              `${datasetLabel} : ${constructType}`,
              `Expression Score: ${tooltipItem.label}`,
              `Normalised Fluorescence: ${tooltipItem.value}`,
            ];
          },
        },
        displayColors: false,
      },
    };
    this.setState({
      data: data,
      options: options,
      time: currentTime[0],
    });
  };

  componentDidMount() {
    this.plot();
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <Typography variant="h5" gutterBottom>
            GFP results
          </Typography>

          <Typography variant="body1" gutterBottom>
            Use the slider
          </Typography>
          <Typography variant="body2" gutterBottom>
            Fluorescence is normalised by ....
          </Typography>

          <Slider
            defaultValue={this.state.sliderDefaultPosition}
            step={1}
            min={0}
            max={23}
            onChange={this.handleSliderChange}
            valueLabelDisplay="auto"
            key="GFP Slider"
          />

          <Grid container direction="row" justify="center">
            <Typography variant="h6" component="h2" gutterBottom>
              {this.state.time ? `Time: ${this.state.time}` : null}
            </Typography>
          </Grid>

          <Grid container direction="row" alignItems="stretch">
            <Grid item md={6} sm={9} xs={9} className={classes.gridItem}>
              <div className={classes.paper}>
                <Scatter
                  data={this.state.data}
                  options={this.state.options}
                  // getElementAtEvent={getElementAtEvent}
                  width={350}
                  height={200}
                />
              </div>
            </Grid>
            <Grid item md={6} sm={9} xs={9} className={classes.gridItem}>
              <div className={classes.paper}>
                {/* <Typography
                variant="h6"
                gutterbottom="true"
                className={classes.typography}
              >
                Click on a point to view the sequence.
              </Typography> */}
                <Scatter
                  data={this.state.data}
                  options={this.state.options}
                  // getElementAtEvent={getElementAtEvent}
                  width={350}
                  height={200}
                />
              </div>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center">
            <FormControl component="fieldset" className={classes.paper}>
              <FormLabel component="legend">Plot Options</FormLabel>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.fixYAxis}
                      onClick={this.handleChangeFixYAxisSwitch}
                      name="fixYAxis"
                    />
                  }
                  label="Fix Y-axis"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.showAllConstructs}
                      onChange={this.handleChangeShowAllConstructs}
                      name="ShowAllConstructs"
                    />
                  }
                  label={
                    !this.state.showAllConstructs
                      ? "See all constructs"
                      : "See only mean"
                  }
                />
              </FormGroup>
              {/* <FormHelperText>Help text</FormHelperText> */}
            </FormControl>
          </Grid>

          <Grid container direction="row" justify="center">
            <Button
              color="default"
              className={classes.button}
              startIcon={<GetAppIcon />}
              // href={`data:text/json;charset=utf-8,${encodeURIComponent(
              //   JSON.stringify(sequences)
              // )}`}
              download="TIsigner_GFP_constructs.json"
            >
              Download Constructs (JSON)
            </Button>
          </Grid>
        </div>
      </Fragment>
    );
  }
}
export default withStyles(useStyles)(Results);
