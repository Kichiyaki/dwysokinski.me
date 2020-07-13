import React, { Fragment } from "react"
import PropTypes from "prop-types"

import { CssBaseline } from "@material-ui/core"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <main>{children}</main>
      <CssBaseline />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
