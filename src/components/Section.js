import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  section: {
    padding: "3rem 0",
    "&.is-primary": {
      backgroundColor: theme.palette.primary.main,
    },
    "&.is-black": {
      backgroundColor: "#000",
      color: "#fff",
    },
    [theme.breakpoints.up("md")]: {
      padding: "6rem 0",
    },
    "&.is-small": {
      padding: "3rem 0",
    },
  },
}))

export const BG_COLOR = {
  TRANSPARENT: "transparent",
  BLACK: "black",
  PRIMARY: "primary",
}

export const SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
}

function Section({ children, className, bgColor, component, size, ...rest }) {
  const classes = useStyles()
  const Component = component || "section"
  return (
    <Component
      className={classnames(classes.section, className, {
        "is-primary": bgColor === BG_COLOR.PRIMARY,
        "is-black": bgColor === BG_COLOR.BLACK,
        "is-small": size === SIZE.SMALL,
      })}
      {...rest}
    >
      {children}
    </Component>
  )
}

Section.defaultProps = {
  bgColor: BG_COLOR.TRANSPARENT,
  size: SIZE.MEDIUM,
}

Section.propTypes = {
  bgColor: PropTypes.oneOf(Object.values(BG_COLOR)).isRequired,
  size: PropTypes.oneOf(Object.values(SIZE)).isRequired,
}

export default Section
