import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  main: {
    minHeight: 'calc(100vh - 200px)',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
}));

const Layout = ({
  children,
  className,
  navbarProps,
  showNavbar,
  showFooter,
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      {showNavbar && <Navbar {...navbarProps} />}
      <main className={classnames(className, classes.main)}>{children}</main>
      {showFooter && <Footer />}
      <CssBaseline />
    </Fragment>
  );
};

Layout.defaultProps = {
  navbarProps: {},
  showNavbar: true,
  showFooter: true,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showNavbar: PropTypes.bool.isRequired,
  showFooter: PropTypes.bool.isRequired,
};

export default Layout;
