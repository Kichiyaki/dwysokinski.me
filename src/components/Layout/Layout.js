import React, { Fragment } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import { makeStyles } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import Header from "./Header"

const useStyles = makeStyles(theme => ({
  main: {
    display: "flex",
  },
  contentWrapper: {
    width: "100%",
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
      <main className={classes.main}>
        <div className={classnames(className, classes.contentWrapper)}>
          {children}
        </div>
      </main>
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
