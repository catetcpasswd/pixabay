import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Select, TextField } from "@material-ui/core/";
import MenuItem from "@material-ui/core/MenuItem";

const qty = [
  {
    value: 5,
    label: "5"
  },
  {
    value: 10,
    label: "10"
  },
  {
    value: 15,
    label: "15"
  },
  {
    value: 30,
    label: "30"
  },
  {
    value: 50,
    label: "50"
  }
];

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const SearchNumber = ({ defaultHits, onSearchHits }) => {
  const classes = useStyles();
  console.log("search number");
  return (
    <div>
      <Select
        id="standard-select-from-list"
        name="amount"
        select
        label="Select"
        defaultValue={defaultHits ? defaultHits : " "}
        onChange={onSearchHits}
        helperText="please select"
      >
        {qty.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SearchNumber;
