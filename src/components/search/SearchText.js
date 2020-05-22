import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

const SearchText = ({ defaultText, onSearchInput }) => {
  const classes = useStyles();
  console.log("searchtext");
  return (
    <div>
      <TextField
        id="standard-search"
        name="searchText"
        label="Search Images"
        type="search"
        fullWidth={true}
        defaultValue={defaultText}
        onChange={onSearchInput}
      />
    </div>
  );
};

export default SearchText;
