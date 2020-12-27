import React, { Fragment, Component } from "react";
// import { Scatter } from "@reactchartjs/react-chart.js";
// import { Line } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import Slider from "@material-ui/core/Slider";
// import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import { fluorescence, correlation } from "./Data/Data";
import ScatterPlot from "./Plots/ScatterPlot";
// import ScatterPlot from "./Plots/ScatterPlotly";
import CorrelationPlot from "./Plots/CorrelationPlot";

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

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderDefaultPosition: 15,
      sliderCurrentPosition: 15,
      fixYAxis: true,
      showAllConstructs: false,
      showCorrelationAnnotation: true,
    };
  }

  handleSliderChange = (e, newValue) => {
    this.setState({
      sliderCurrentPosition: newValue,
    });
  };

  handleChangeFixYAxisSwitch = (e) => {
    this.setState({
      fixYAxis: !this.state.fixYAxis,
    });
  };

  handleChangeShowAllConstructs = (e) => {
    this.setState({
      showAllConstructs: !this.state.showAllConstructs,
    });
  };

  handleChangeCorrelationAnnotation = (e) => {
    this.setState({
      showCorrelationAnnotation: !this.state.showCorrelationAnnotation,
    });
  };

  componentDidMount() {}

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
              Time:{" "}
              {
                fluorescence.map(
                  (a) => a["Data"][this.state.sliderCurrentPosition]["Time"]
                )[0]
              }
            </Typography>
          </Grid>

          <Grid container direction="row" alignItems="stretch">
            {/* <Grid item md={6} sm={9} xs={9} className={classes.gridItem}> */}
            <Grid item md={6} sm={9} xs={9} className={classes.gridItem}>
              <div className={classes.paper}>
                <ScatterPlot
                  sliderCurrentPosition={this.state.sliderCurrentPosition}
                  fluorescence={fluorescence}
                  fixYAxis={this.state.fixYAxis}
                  showAllConstructs={this.state.showAllConstructs}
                />
              </div>
            </Grid>
            <Grid item md={6} sm={9} xs={9} className={classes.gridItem}>
              <div className={classes.paper}>
                <CorrelationPlot
                  sliderCurrentPosition={this.state.sliderCurrentPosition}
                  correlation={correlation}
                  fixYAxis={this.state.fixYAxis}
                  showAllConstructs={this.state.showAllConstructs}
                  showAnnotation={this.state.showCorrelationAnnotation}
                />
              </div>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center">
            <FormControl component="fieldset" className={classes.paper}>
              {/* <FormLabel component="legend">Plot Options</FormLabel> */}
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
                      ? "Mean shown"
                      : "Reps shown"
                  }
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.showCorrelationAnnotation}
                      onChange={this.handleChangeCorrelationAnnotation}
                      name="ToggleCorrelationAnnotation"
                    />
                  }
                  label={
                    !this.state.showCorrelationAnnotation
                      ? "Annotation line hidden"
                      : "Annotation line shown"
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
