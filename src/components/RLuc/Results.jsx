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
// import Slider from "@material-ui/core/Slider";
// import FormLabel from "@material-ui/core/FormLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import Switch from "@material-ui/core/Switch";
// import { fluorescence, correlation } from "./Data/Data";
import { fluorescence } from "./Data/Data";
import PlotLegend from "../Main/PlotLegend";
// import ScatterPlot from "./Plots/ScatterPlot";
import BarPlot from "./Plots/BarPlot";
// import ScatterPlot from "./Plots/ScatterPlotly";
// import CorrelationPlot from "./Plots/CorrelationPlot";

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
      // sliderDefaultPosition: 15,
      // sliderCurrentPosition: 15,
      fixYAxis: true,
      showAllConstructs: false,
      showNative: false,
      snackbarOpen: false,
    };
  }

  // handleSliderChange = (e, newValue) => {
  //   this.setState({
  //     sliderCurrentPosition: newValue,
  //   });
  // };

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

  handleChangeshowNative = (e) => {
    this.setState({
      showNative: !this.state.showNative,
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
            RLuc results
          </Typography>

          {/* <Typography variant="body1" gutterBottom>
            Use the slider
          </Typography> */}
          <Typography variant="body1" gutterBottom>
            Luminescence is normalised by the native.
          </Typography>

          <Typography variant="body1" gutterBottom>
            Barplot shows the mean of normalised luminescence. Biological replicates are
            overlayed over the bars.
          </Typography>
          {/* <ul>
            <li>
              <Typography variant="body2" gutterBottom>
                <em>Scale Y-axis</em> gives the best view of the plot. Turning
                this off will start Y-axis at 0.
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
                <em>Native switch</em> shows/hides the native, which is always 1
                due to normalisation. Hiding native allows a better view.
              </Typography>
            </li>
          </ul>
          <Typography variant="body2" gutterBottom>
            Hovering on points will show the details.
          </Typography>*/}

          {/* <Slider
            defaultValue={this.state.sliderDefaultPosition}
            step={1}
            min={0}
            max={23}
            onChange={this.handleSliderChange}
            valueLabelDisplay="auto"
            key="RLuc Slider"
          /> */}

          {/* <Grid container direction="row" justify="center">
            <Typography variant="h6" component="h2" gutterBottom>
              Time:{" "}
              {
                fluorescence.map(
                  (a) => a["Data"][this.state.sliderCurrentPosition]["Time"]
                )[0]
              }
            </Typography>
          </Grid> */}

          <PlotLegend type="RLuc" />

          <Grid container direction="row" alignItems="stretch">
            {/* <Grid item md={6} sm={9} xs={9} className={classes.gridItem}> */}
            <Grid item md={6} sm={9} xs={9} className={classes.gridItem}>
              <div className={classes.paper}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Induced
                </Typography>
                {/*<ScatterPlot
                  IndUnind={"Induced"}
                  fluorescence={fluorescence}
                  fixYAxis={this.state.fixYAxis}
                  showAllConstructs={this.state.showAllConstructs}
                  maxYaxis={1.8}
                  minYaxis={0.7}
                  showNative={this.state.showNative}
                />*/}
                <BarPlot
                  IndUnind={"Induced"}
                  fluorescence={fluorescence}
                  fixYAxis={this.state.fixYAxis}
                  showAllConstructs={this.state.showAllConstructs}
                  maxYaxis={1.8}
                  minYaxis={0.7}
                  showNative={this.state.showNative}
                />
              </div>
            </Grid>
            <Grid item md={6} sm={9} xs={9} className={classes.gridItem}>
              <div className={classes.paper}>
                <Typography variant="h6" component="h2" gutterBottom>
                  Uninduced
                </Typography>
                {/*<ScatterPlot
                  IndUnind={"Uninduced"}
                  fluorescence={fluorescence}
                  fixYAxis={this.state.fixYAxis}
                  showAllConstructs={this.state.showAllConstructs}
                  maxYaxis={7.5}
                  minYaxis={0.5}
                  showNative={this.state.showNative}
                />*/}
                <BarPlot
                  IndUnind={"Uninduced"}
                  fluorescence={fluorescence}
                  fixYAxis={this.state.fixYAxis}
                  showAllConstructs={this.state.showAllConstructs}
                  maxYaxis={7.5}
                  minYaxis={0.5}
                  showNative={this.state.showNative}
                />
              </div>
            </Grid>
          </Grid>
          {/* <Grid container direction="row" justify="center">
            <FormControl component="fieldset" className={classes.paper}>
              {/* <FormLabel component="legend">Plot Options</FormLabel> */}
          {/* <FormGroup row>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.fixYAxis}
                      onClick={this.handleChangeFixYAxisSwitch}
                      name="fixYAxis"
                    />
                  }
                  label="Scale Y-axis"
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
                {/* <FormControlLabel
                  control={
                    <Switch
                      checked={!this.state.showNative}
                      onChange={this.handleChangeshowNative}
                      name="ToggleNative"
                    />
                  }
                  label={
                    !this.state.showNative ? "Native hidden" : "Native shown"
                  }
                />*/}
          {/* </FormGroup>
              {/* <FormHelperText>Help text</FormHelperText> */}
          {/* </FormControl>
          </Grid>*/}

          <Grid container direction="row" justify="center">
            <Button
              color="default"
              className={classes.button}
              startIcon={<GetAppIcon />}
              href={`data:text/json;charset=utf-8,${encodeURIComponent(
                JSON.stringify(fluorescence)
              )}`}
              download="TIsigner_RLuc_Luminescence.json"
              onClick={this.handleClick}
            >
              Download Luminescence (JSON)
            </Button>
            {/* <Button
              color="default"
              className={classes.button}
              startIcon={<GetAppIcon />}
              href={`data:text/json;charset=utf-8,${encodeURIComponent(
                JSON.stringify(correlation)
              )}`}
              download="TIsigner_RLuc_Correlation.json"
              onClick={this.handleClick}
            >
              Download Correlation (JSON)
            </Button> */}

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
