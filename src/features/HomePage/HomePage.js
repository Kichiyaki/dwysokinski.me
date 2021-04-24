import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import Layout from '@components/Layout/Layout';
import Seo from '@components/Seo';
import Header from './components/Header';
import MyPriorities from './components/MyPriorities/MyPriorities';
import Technologies from './components/Technologies/Technologies';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact';

const useStyles = makeStyles(theme => ({
  layout: {
    padding: 0,
  },
}));

const HomePage = ({ location }) => {
  const classes = useStyles();
  return (
    <Layout className={classes.layout} navbarProps={{ position: 'absolute' }}>
      <Seo pathname={location.pathname} />
      <Header />
      <MyPriorities />
      <Divider />
      <Technologies />
      <Portfolio />
      <Contact />
      <Divider />
    </Layout>
  );
};

export default HomePage;
