import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core/";
import { Button, IconButton, Dialog, DialogActions } from "@material-ui/core";
import ZoomInIcon from "@material-ui/icons/ZoomIn";

//import tileData from "./tileData";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    },
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450,
    margin: theme.spacing(1)
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  }
}));

const ImageResults = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const classes = useStyles();

  const handleOpen = image => {
    setOpen(true);
    setCurrentImage(image);
  };

  const handleClose = () => setOpen(false);

  console.log("imagesview ", images);

  const imageList = images.length ? (
    <GridList
      className={classes.gridList}
      cellHeight={160}
      spacing={6}
      cols={5}
    >
      {images.map(image => (
        <GridListTile
          title={image.tags}
          key={image.id}
          subtitle={
            <span>
              by <strong>{image.user}</strong>
            </span>
          }
        >
          <img src={image.largeImageURL} alt="" />

          <GridListTileBar
            actionIcon={
              <IconButton
                aria-label="zoom"
                onClick={() => handleOpen(image.largeImageURL)}
              >
                <ZoomInIcon color="action" />
              </IconButton>
            }
            actionPosition="left"
            className="classes.titleBar"
          />
        </GridListTile>
      ))}
    </GridList>
  ) : null;

  const actions = [
    <Button
      variant="contained"
      color="secondary"
      name="Download"
      onClick={handleClose}
    >
      Close
    </Button>
  ];
  return (
    <div className="classes.root">
      {imageList}
      <Dialog open={open} onClose={handleClose}>
        <img src={currentImage} alt="" style={{ width: "100%" }} />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ImageResults;
