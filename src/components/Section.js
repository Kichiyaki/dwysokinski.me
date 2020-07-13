import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  section: {
    padding: "3rem 1.5rem",
    "&.is-primary": {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("md")]: {
      padding: "6rem 1.5rem",
    },
  },
}))

export const BG_COLOR = {
  TRANSPARENT: "transparent",
  PRIMARY: "primary",
}

function Section({ children, className, bgColor }) {
  const classes = useStyles()
  return (
    <section
      className={classnames(classes.section, className, {
        "is-primary": bgColor === BG_COLOR.PRIMARY,
      })}
    >
      {children}
    </section>
  )
}

Section.defaultProps = {
  bgColor: BG_COLOR.TRANSPARENT,
}

Section.propTypes = {
  bgColor: PropTypes.oneOf(Object.values(BG_COLOR)).isRequired,
}

export default Section
