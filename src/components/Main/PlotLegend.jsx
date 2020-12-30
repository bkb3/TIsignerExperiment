import React, { Fragment } from "react";
// import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";


function PlotLegend(props) {
  let type = props.type;
  let page = props.page;
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <List>
        <ListItem button onClick={handleClick}>
          <ListItemText
            primary="Plot Legends"
            secondary={`Click here to ${open ? "hide this." : "show."}`}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem>
              <ListItemIcon>
                <CheckBoxOutlineBlankIcon />
              </ListItemIcon>
              <ListItemText
                primary="Native"
                secondary={`This is the native ${
                  type === "RLuc"
                    ? "Renilla Luciferase (RLuc)."
                    : "Green Fluorescent Protein (GFP)."
                }`}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RadioButtonUncheckedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Optimised"
                secondary={`These are optimised using TISIGNER. Synonymous changes is preformed only within the first 30 nucleotides. ${page === 'Constructs' ? 'Click':'Hover'} on the point to view the details.`}
              />
            </ListItem>
            {type === "RLuc" ? (
              <ListItem>
                <ListItemIcon>
                  <ChangeHistoryIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Commercial variant"
                  secondary={`The commercial variants were obtained from several companies. These sequences have numerous synonymous changes along the sequence. ${page === 'Constructs' ? 'Click':'Hover'} on the point to view the details.`}
                />
              </ListItem>
            ) : null}
          </List>
        </Collapse>
      </List>
    </Fragment>
  );
}

export default PlotLegend;
