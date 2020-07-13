import React, { Fragment } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import { makeStyles } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import Header from "./Header"

const useStyles = makeStyles(theme => ({
  main: {
    minHeight: "calc(100vh - 200px)",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
}))

const Layout = ({ children, className, headerProps }) => {
  const classes = useStyles()

  return (
    <Fragment>
      <Header {...headerProps} />
      <main className={classnames(className, classes.main)}>{children}</main>
      <CssBaseline />
    </Fragment>
  )
}

Layout.defaultProps = {
  headerProps: {},
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
