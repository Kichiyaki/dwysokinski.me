import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import Layout from '@components/Layout/Layout';
import Seo from '@components/Seo';

const useStyles = makeStyles(() => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  layout: {
    padding: '0',
  },
}));

const NotFoundPage = ({ location }) => {
  const classes = useStyles();

  return (
    <Layout className={classes.layout} showNavbar={false} showFooter={false}>
      <Seo
        title="Page not found"
        description="Page not found"
        pathname={location.pathname}
      />
      <Container className={classes.container}>
        <Typography gutterBottom variant="h1">
          Page not found
        </Typography>
        <Typography gutterBottom variant="h4">
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </Typography>
        <Typography variant="h4">
          <Link color="secondary" to="/">
            Back to site
          </Link>
        </Typography>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
