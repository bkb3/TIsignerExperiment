import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

function RFPProtocol() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        RFP Protocol
      </Typography>
    </div>
  );
}

export default RFPProtocol;
