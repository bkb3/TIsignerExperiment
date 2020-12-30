import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./Error/ErrorBoundary";
import Loader from "./Loader/Loader";
import Main from "./Main";
const Home = lazy(() => import( "./Home"));
const About = lazy(() => import( "./About"));
const GFPConstructs = lazy(() => import( "./GFP/Constructs"));
const GFPProtocol = lazy(() => import( "./GFP/Protocol"));
const GFPResults = lazy(() => import("./GFP/Results"));

const RFPConstructs = lazy(() => import( "./RFP/Constructs"));
const RFPProtocol = lazy(() => import( "./RFP/Protocol"));
const RFPResults = lazy(() => import("./RFP/Results"));




console.log(
  String.raw`

  ▄▄▄█████▓ ██▓  ██████  ██▓  ▄████  ███▄    █ ▓█████  ██▀███
  ▓  ██▒ ▓▒▓██▒▒██    ▒ ▓██▒ ██▒ ▀█▒ ██ ▀█   █ ▓█   ▀ ▓██ ▒ ██▒
  ▒ ▓██░ ▒░▒██▒░ ▓██▄   ▒██▒▒██░▄▄▄░▓██  ▀█ ██▒▒███   ▓██ ░▄█ ▒
  ░ ▓██▓ ░ ░██░  ▒   ██▒░██░░▓█  ██▓▓██▒  ▐▌██▒▒▓█  ▄ ▒██▀▀█▄
    ▒██▒ ░ ░██░▒██████▒▒░██░░▒▓███▀▒▒██░   ▓██░░▒████▒░██▓ ▒██▒
    ▒ ░░   ░▓  ▒ ▒▓▒ ▒ ░░▓   ░▒   ▒ ░ ▒░   ▒ ▒ ░░ ▒░ ░░ ▒▓ ░▒▓░
      ░     ▒ ░░ ░▒  ░ ░ ▒ ░  ░   ░ ░ ░░   ░ ▒░ ░ ░  ░  ░▒ ░ ▒░
    ░       ▒ ░░  ░  ░   ▒ ░░ ░   ░    ░   ░ ░    ░     ░░   ░
            ░        ░   ░        ░          ░    ░  ░   ░

                          Experiment
  --------------------==| github:@bkb3 |==---------------------

  * Project GitHub: https://github.com/bkb3/TIsignerExperiment

  `
);

const notFoundMessage = "We did not find anything here!"


function App() {
  return (
    <Router basename="/">
      <ErrorBoundary>
      <Suspense fallback={<Main page={<Loader />}/>}>
      <Switch>
        <Route exact path="/" render={props => <Main page={<Home />}{...props} />} />
        <Route exact path="/GFP/Constructs" render={props => <Main page={<GFPConstructs />}{...props} />} />
        <Route exact path="/GFP/Protocol" render={props => <Main page={<GFPProtocol />}{...props} />} />
        <Route exact path="/GFP/Results" render={props => <Main page={<GFPResults />}{...props} />} />
        <Route exact path="/RFP/Constructs" render={props => <Main page={<RFPConstructs />}{...props} />} />
        <Route exact path="/RFP/Protocol" render={props => <Main page={<RFPProtocol />}{...props} />} />
        <Route exact path="/RFP/Results" render={props => <Main page={<RFPResults />}{...props} />} />
        <Route exact path="/About" render={props => <Main page={<About />}{...props} />} />
        <Route render={props =><Main page={<Loader message={notFoundMessage}/>}{...props} />} />
      </Switch>
      </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
