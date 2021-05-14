import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import Image from 'gatsby-image';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    height: '100%',
    padding: theme.spacing(1),
  },
  image: {
    marginBottom: theme.spacing(1),
  },
}));

function Technology({ fixed, name }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Image className={classes.image} fixed={fixed} />
      <Typography variant="body2">{name}</Typography>
    </Paper>
  );
}

export default Technology;
