import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import ListItemText from "@material-ui/core/ListItemText";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./customFade.css";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 500,
  },
  buttons: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  //   paper: {
  //     padding: theme.spacing(2),
  //     textAlign: 'center',
  //     color: theme.palette.text.secondary,
  //   },
}));

function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        About us
      </Typography>
      {/* <ListItemText secondary="In no particular order" /> */}

      <Typography variant="h5" gutterBottom>
        Constructs
      </Typography>

      <ul>
        <li>
          <Typography variant="body1" gutterBottom>
            <a
              href="https://rd.callaghaninnovation.govt.nz/about-us/our-people/page-60/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Craig van Dolleweerd
            </a>
          </Typography>
        </li>
      </ul>

      <Typography variant="h5" gutterBottom>
        GFP experiments
      </Typography>

      <ul>
        <li>
          <Typography variant="body1" gutterBottom>
            <a
              href="https://rd.callaghaninnovation.govt.nz/about-us/our-people/page-61/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Daniela Remus
            </a>
          </Typography>
        </li>
      </ul>

      <Typography variant="h5" gutterBottom>
        RLuc experiments
      </Typography>

      <ul>
        <li>
          <Typography variant="body1" gutterBottom>
            <a
              href="https://www.otago.ac.nz/biochemistry/people/profile/index.html?id=471"
              target="_blank"
              rel="noopener noreferrer"
            >
              Augustine Chen
            </a>
          </Typography>
        </li>
      </ul>

      <Typography variant="h5" gutterBottom>
        Theory
      </Typography>

      <ul>
        <li>
          <Typography variant="body1" gutterBottom>
            <a
              href="https://github.com/bkb3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bikash Kumar Bhandari (bkb3)
            </a>
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom>
            <a
              href="https://otago.ac.nz/biochemistry/people/profile/index.html?id=3136"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chun Shen Lim
            </a>
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom>
            <a
              href="https://otago.ac.nz/biochemistry/people/profile/index.html?id=2817"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paul Gardner
            </a>
          </Typography>
        </li>
      </ul>

      <Typography variant="h5" gutterBottom>
        Institutions
      </Typography>

      <ul>
        <li>
          <Typography variant="body1" gutterBottom>
            <a
              href="https://www.callaghaninnovation.govt.nz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Callaghan Innovation
            </a>
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom>
            <a
              href="https://www.otago.ac.nz/biochemistry"
              target="_blank"
              rel="noopener noreferrer"
            >
              Department of Biochemistry, University of Otago
            </a>
          </Typography>
        </li>
        <li>
          <Typography variant="body1" gutterBottom>
            <a
              href="https://www.mbie.govt.nz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ministry of Business, Innovation and Employment (MBIE), New
              Zealand
            </a>
          </Typography>
        </li>
      </ul>

      <Typography variant="body1" gutterBottom>
        This work was supported by MBIE grant: UOOX1709.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Website License
      </Typography>
      <Typography variant="body1" gutterBottom>
        <a
          href="http://creativecommons.org/licenses/by-nd/3.0/nz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Creative Commons Attribution-NoDerivs 3.0 New Zealand License.
        </a>
      </Typography>

      <Typography variant="h5" gutterBottom>
        GitHub | Build status (Travis CI)
      </Typography>

      <div className={classes.buttons}>
        <IconButton
          href="https://github.com/bkb3/TIsignerExperiment"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <Button
          color="primary"
          href="https://travis-ci.com/github/bkb3/TIsignerExperiment"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://travis-ci.com/bkb3/TIsignerExperiment.svg?branch=master"
            alt="Travis CI build status"
          />
        </Button>
      </div>
      <Typography variant="body1" gutterBottom>
        Build from commit:{" "}
        <a
          href={`https://github.com/bkb3/TIsignerExperiment/commit/${process.env.REACT_APP_GIT_SHA_LONG}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`${process.env.REACT_APP_GIT_SHA_SHORT}`}
        </a>
      </Typography>

      <Typography
        variant="caption"
        display="block"
        gutterBottom
        className="customFade"
      >
        Website written by bkb3.
      </Typography>
    </div>
  );
}

export default About;
