import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core//styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography variant="h6" className={classes.title}>
          PixaBay Image Finder
        </Typography>
      </AppBar>
    </div>
  );
}
