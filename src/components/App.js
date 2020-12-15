import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import Loader from "./Loader";
import ErrorBoundary from "./Error/ErrorBoundary";
import Loader from "./Loader/Loader";
import Main from "./Main";
// import Home from "./Home";
// import GFPConstructs from "./GFP/Constructs";
// import GFPProtocol from "./GFP/Protocol";
const Home = lazy(() => import( "./Home"));
const GFPConstructs = lazy(() => import( "./GFP/Constructs"));
const GFPProtocol = lazy(() => import( "./GFP/Protocol"));
const GFPResults = lazy(() => import("./GFP/Results"));


// const GFPConstructs =  lazy(async () => {
//   const [moduleExports] = await Promise.all([
//     import("./GFP/Constructs"),
//     new Promise(resolve => setTimeout(resolve, 1000))
//   ]);
//   return moduleExports;
// });


// const LazyDelayed = (path, delay=1000) => {
//   console.log(path)
//   lazy(async () => {
//     const [moduleExports] = await Promise.all([
//       import(path),
//       new Promise(resolve => setTimeout(resolve, 1000))
//     ]);
//     return moduleExports;
//   });
// }
// const GFPConstructs = LazyDelayed("./GFP/Constructs");



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

  * Project GitHub: https://github.com/Gardner-BinfLab/TISIGNER-ReactJS

  `
);

const notFoundMessage = "We did not find anything here!"


function App() {
  return (
    <Router>
      <ErrorBoundary>
      <Suspense fallback={<Main page={<Loader />}/>}>
      <Switch>
        <Route exact path="/" render={props => <Main page={<Home />}{...props} />} />
        <Route exact path="/GFP/Constructs" render={props => <Main page={<GFPConstructs />}{...props} />} />
        <Route exact path="/GFP/Protocol" render={props => <Main page={<GFPProtocol />}{...props} />} />
        <Route exact path="/GFP/Results" render={props => <Main page={<GFPResults />}{...props} />} />
        <Route exact path="/test" render={props =><Main page={<Loader />}{...props} />} />
        <Route render={props =><Main page={<Loader message={notFoundMessage}/>}{...props} />} />
      </Switch>
      </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
