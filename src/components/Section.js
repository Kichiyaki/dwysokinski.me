import React from "react"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  section: {
    padding: "3rem 1.5rem",
    [theme.breakpoints.up("md")]: {
      padding: "6rem 1.5rem",
    },
  },
}))

function Section({ children }) {
  const classes = useStyles()
  return <section className={classes.section}>{children}</section>
}

export default Section
