import React from "react"
import classnames from "classnames"
import * as routes from "@config/routes"
import useSmoothScroll from "@libs/useSmoothScroll"
import logo from "@images/logo.svg"
import { HEADER_ID } from "@features/HomePage/components/Header"
import { SECTION_ID as PROJECTS_SECTION_ID } from "@features/HomePage/components/Projects/Projects"
import { SECTION_ID as CONTACT_SECTION_ID } from "@features/HomePage/components/Contact"

import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Container, Link } from "@material-ui/core"
import { Link as GatsbyLink } from "gatsby-theme-material-ui"

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "transparent",
    color: "#fff",
    boxShadow: "none",
  },
  linkContainer: {
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(1.5),
    },
    [theme.breakpoints.down("xs")]: {
      "& > *:not(:last-child)": {
        marginRight: theme.spacing(0.75),
      },
    },
  },
  logo: {
    width: "56px",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "48px",
    },
  },
  divider: {
    flexGrow: 1,
  },
  link: {
    width: "100%",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(1),
    },
  },
  toolbar: {
    padding: theme.spacing(2, 0),
    fontSize: "1.25rem",
  },
}))

function Navbar({ className, ...rest }) {
  const classes = useStyles()
  const handleClickLink = useSmoothScroll()

  return (
    <AppBar
      component="nav"
      position="static"
      {...rest}
      className={classnames(classes.appBar, className)}
    >
      <Container>
        <Toolbar className={classes.toolbar} disableGutters>
          <div className={classes.titleContainer}>
            <GatsbyLink title="Strona główna" color="inherit" to={routes.HOME}>
              <img className={classes.logo} src={logo} alt="logo" />
            </GatsbyLink>
          </div>
          <div className={classes.divider} />
          <div className={classes.linkContainer}>
            <Link
              title="Start"
              color="inherit"
              href={"#" + HEADER_ID}
              onClick={handleClickLink(HEADER_ID)}
            >
              Start
            </Link>
            <Link
              title="Projekty"
              color="inherit"
              href={"#" + PROJECTS_SECTION_ID}
              onClick={handleClickLink(PROJECTS_SECTION_ID)}
            >
              Projekty
            </Link>
            <Link
              title="Kontakt"
              color="inherit"
              href={"#" + CONTACT_SECTION_ID}
              onClick={handleClickLink(CONTACT_SECTION_ID)}
            >
              Kontakt
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
