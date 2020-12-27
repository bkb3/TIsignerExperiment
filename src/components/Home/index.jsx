import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  root: {
    width: "100%",
    // maxWidth: 500,
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        TISIGNER experiment
      </Typography>
      <Typography variant="h5" gutterBottom>
        About the experiment
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is a series of experiments set up to demonstrate that the protein
        expression can be tuned using the accesibility of the translation
        initiation region. The theory behind this can be viewed at this paper{" "}
        <a
          href="https://doi.org/10.1101/726752"
          target="_blank"
          rel="noopener noreferrer"
        >
          DOI: 10.1101/726752
        </a>
        . In brief, our approach has the following features:
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText
            primary="Minimal nucleotide substitutions"
            secondary="The synonymous codon substitutions are done within the first 30 nucleotides only, leaving the remaning sequence untouched."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText
            primary="mRNA accessibility"
            secondary="The mRNA accessibility of the region -30:30 is used to preform synonymous changes."
          />
        </ListItem>
      </List>

      <Typography variant="body1" gutterBottom>
        We used two reporter proteins for our experiment. They were Green
        Fluorescent Protein (GPF) and Renilla Luciferase (RLuc). Several
        variants were designed by sampling the opening energy distribution using
        our tool{" "}
        <a
          href="https://tisigner.com/tisigner"
          target="_blank"
          rel="noopener noreferrer"
        >
          TISIGNER
        </a>
        . The experiment was preformed in <em>Escherichia coli</em>. The details
        such as constructs, protocol and the results for each protein can be
        viewed by using the menu on the left. On mobile devices, the menu can be
        accessed by tapping <MenuIcon fontSize="small"/> button on the top left.
      </Typography>
    </div>
  );
}

export default Home;
