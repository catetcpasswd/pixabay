import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchText from "./SearchText";
import SearchNumber from "./SearchNumber";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch"
    },
    paper: {
      marginRight: theme.spacing(2)
    }
  }
}));

const Search = ({ defaultText, defaultHits, handleChange, handleSubmit }) => {
  //console.log("defaults ", defaultText, " ", defaultHits);

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <SearchText defaultText={defaultText} onSearchInput={handleChange} />
      <SearchNumber defaultHits={defaultHits} onSearchHits={handleChange} />
      <Button
        variant="contained"
        color="secondary"
        name="Download"
        onClick={handleSubmit}
      >
        Download
      </Button>
    </form>
  );
};

export default Search;
