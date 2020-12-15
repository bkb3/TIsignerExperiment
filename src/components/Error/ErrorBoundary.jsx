import React, { Fragment, Component } from "react";
import Typography from "@material-ui/core/Typography";
import Main from "../Main";


class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <Main
          page={
            <Fragment>
                <Typography variant="h4" gutterBottom>
                  We are sorry. Something went wrong.
                </Typography>

                <Typography variant="h5" gutterBottom>
                  Please report the following error to us.
                </Typography>
                <pre
                  style={{
                    overflow: "auto",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {" "}
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
            </Fragment>
          }
        />
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;
