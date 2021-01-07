import React, { Fragment, Component } from "react";
// import { Scatter } from "@reactchartjs/react-chart.js";
// import { Line } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import GetAppIcon from "@material-ui/icons/GetApp";
import Slider from "@material-ui/core/Slider";
// import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import { fluorescence, correlation } from "./Data/Data";
import PlotLegend from "../Main/PlotLegend";
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
    // maxWidth: 500,
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
      sliderDefaultPosition: 32, //corresponds to 5h 20min
      sliderCurrentPosition: 32,
      fixYAxis: false,
      showAllConstructs: false,
      showCorrelationAnnotation: true,
      snackbarOpen: false,
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

  handleClick = () => {
    this.setState({
      snackbarOpen: !this.state.snackbarOpen,
    });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({
      snackbarOpen: !this.state.snackbarOpen,
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
          Since this is a dual reporter system (GFP/RFP), GFP fluorescence is normalised by the RFP fluorescence.
          </Typography>

          <Typography variant="body1" gutterBottom>
            Options:
          </Typography>
          <ul>
          {/* <li>
              <Typography variant="body2" gutterBottom>
                <em>Slider</em> can be used to view the data at different time points.
              </Typography>
            </li> */}
            <li>
              <Typography variant="body2" gutterBottom>
                <em>Fix Y-axis</em> gives zoomed out view of the plot. Turning
                this off will zoom in the plot.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" gutterBottom>
                <em>Mean switch</em> shows the mean as larger points. Individual
                replicates appear as smaller dots around mean. If this is
                switched off, the replicates are shown as larger dots.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" gutterBottom>
                <em>Annotation line switch</em> shows/hides the annotation in the correlation plot by a black line. The annotation is at the position defined by the time slider. Hovering over the point in correlation plot shows both the Spearman's correlation and P-value between the mean fluorescence and expression scores.
              </Typography>
            </li>
          </ul>
          <Typography variant="body2" gutterBottom>
          Slider can be used to view the data at different time points. By default, it is fixed at <b>5h 20 min</b>, the timepoint just after which the dual reporter system reaches its maximum. 
          </Typography>

          <Slider
            defaultValue={this.state.sliderDefaultPosition}
            step={1}
            min={0}
            max={42}
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

          {/* <PlotLegend /> */}

          <Grid container direction="row" alignItems="stretch">
            {/* <Grid item md={6} sm={9} xs={9} className={classes.gridItem}> */}
            <Grid item md={6} sm={9} xs={9} className={classes.gridItem}>
              <div className={classes.paper}>
              <Typography variant="h6" component="h2" gutterBottom>
                  Normalised fluorescence
                </Typography>
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
              <Typography variant="h6" component="h2" gutterBottom>
                  Correlation plot
                </Typography>
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
                      checked={!this.state.showAllConstructs}
                      onChange={this.handleChangeShowAllConstructs}
                      name="ShowAllConstructs"
                    />
                  }
                  label={
                    !this.state.showAllConstructs ? "Mean shown" : "Reps shown"
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
              href={`data:text/json;charset=utf-8,${encodeURIComponent(
                JSON.stringify(fluorescence)
              )}`}
              download="TIsigner_GFP_Fluorescence.json"
              onClick={this.handleClick}
            >
              Download Fluorescence (JSON)
            </Button>
            <Button
              color="default"
              className={classes.button}
              startIcon={<GetAppIcon />}
              href={`data:text/json;charset=utf-8,${encodeURIComponent(
                JSON.stringify(correlation)
              )}`}
              download="TIsigner_GFP_Correlation.json"
              onClick={this.handleClick}
            >
              Download Correlation (JSON)
            </Button>

            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              open={this.state.snackbarOpen}
              autoHideDuration={2000}
              onClose={this.handleClose}
              message="Downloaded! Please save the file."
              action={
                <Fragment>
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={this.handleClose}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Fragment>
              }
            />
          </Grid>
        </div>
      </Fragment>
    );
  }
}
export default withStyles(useStyles)(Results);
