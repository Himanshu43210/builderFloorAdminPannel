import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography } from "@material-ui/core";

function Navbar() {
  return (
    <AppBar>
      <CssBaseline />
      <Toolbar>
        <Typography className="navbar-banner">Admin Pannel</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
