import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Section from '@components/Section';

const useStyles = makeStyles(theme => {
  return {
    footer: {
      padding: '1.5rem 0',
    },
  };
});

function Footer() {
  const classes = useStyles();
  return (
    <Section component="footer" className={classes.footer}>
      <Typography align="center" variant="h6">
        © {new Date().getFullYear()} Dawid Wysokiński
      </Typography>
    </Section>
  );
}

export default Footer;
