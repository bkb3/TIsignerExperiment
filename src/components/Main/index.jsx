import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import LaunchIcon from "@material-ui/icons/Launch";
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#355664",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  footer: {
    position: "fixed",
    bottom: 0,
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(4),
  },
}));

function Main(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openG, setOpenG] = React.useState(true);
  const [openR, setOpenR] = React.useState(true);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // GFP
  const handleClickNestedG = () => {
    setOpenG(!openG);
  };

  // RLuc
  const handleClickNestedR = () => {
    setOpenR(!openR);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button component={Link} to="/" key="Home">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button key="GFP" onClick={handleClickNestedG}>
          <ListItemText primary="GFP" />
          {openG ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openG} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/GFP/Constructs"
              key="GFPConstructs"
            >
              <ListItemText primary="Constructs" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={openG} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/GFP/Protocol"
              key="GFPProtocol"
            >
              <ListItemText primary="Protocol" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={openG} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/GFP/Results"
              key="GFPResults"
            >
              <ListItemText primary="Results" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button key="RLuc" onClick={handleClickNestedR}>
          <ListItemText primary="RLuc" />
          {openR ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openR} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} key="RLucConstructs">
              <ListItemText primary="Constructs" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={openR} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} key="RLucProtocol">
              <ListItemText primary="Protocol" />
            </ListItem>
          </List>
        </Collapse>

        <Collapse in={openR} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} key="RLucResults">
              <ListItemText primary="Results" />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        {["TISIGNER", "About"].map((text, index) => (
          <Tooltip
            title={
              index === 0
                ? "Launch TISIGNER.com in a new tab"
                : "Our team, source code and more!"
            }
            key={`${text} tooltip`}
          >
            <ListItem
              button
              key={text}
              component={index === 0 ? "a" : null}
              href={index === 0 ? "https://tisigner.com" : null}
              target={index === 0 ? "_blank" : null}
              rel={index === 0 ? "noopener noreferrer" : null}
            >
              <ListItemText primary={text} />
              {index === 0 ? <LaunchIcon /> : null}
            </ListItem>
          </Tooltip>
        ))}
      </List>

      {/* <div className={classes.footer}> */}
      <Divider />
      <List component="div" disablePadding>
        <ListItem button disabled>
          <ListItemIcon>
            <CopyrightIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              "2020" +
              (new Date().getFullYear() === 2020
                ? ""
                : ` - ${new Date().getFullYear()}`) + " Authors"
            }
          />
        </ListItem>
      </List>
      {/* <Button disabled startIcon={<CopyrightIcon />}>
          2020
          {new Date().getFullYear() === 2020
            ? null
            : ` - ${new Date().getFullYear()}`}{" "}
          Authors
        </Button> */}
      {/* </div> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <span>TI</span>
            <span style={{ color: "#EDA604" }}>signer</span>{" "}
            <i className="fas fa-vial"></i> Experiment
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerToggle}>
                <CloseIcon />
              </IconButton>
            </div>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <CssBaseline />
        <Container maxWidth={false}>{props.page}</Container>
      </main>
    </div>
  );
}

export default Main;
