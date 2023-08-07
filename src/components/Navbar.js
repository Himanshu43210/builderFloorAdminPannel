import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
// import DrawerComponent from "./drawer";
import Panel from "./Panel";

const useStyles = makeStyles((theme) => ({
  navlinks: { marginLeft: theme.spacing(10), display: "flex" },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    backgroundColor: "white",
    color: "#4677c3 ",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(2),
    "&:hover": { color: "yellow", borderBottom: "1px solid yellow" },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Admin Pannel
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
