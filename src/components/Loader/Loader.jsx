import React, { Fragment } from "react";
import "./Loader.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function Loader(props) {
  return (
    <Fragment>
      <Grid container direction="row" justify="center">
        <div className="test-tube tube">
          <div className="bubble"></div>
        </div>
      </Grid>
      <Typography variant="h6" component="h2" gutterbottom="true">
        {props.message}
      </Typography>
    </Fragment>
  );
}

export default Loader;
