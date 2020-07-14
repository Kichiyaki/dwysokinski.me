import React, { useState } from "react"
import classnames from "classnames"
import * as routes from "@config/routes"
import useSmoothScroll from "@libs/useSmoothScroll"
import logo from "@images/logo.svg"
import { HEADER_ID } from "@features/HomePage/components/Header"
import { SECTION_ID as PROJECTS_SECTION_ID } from "@features/HomePage/components/Projects/Projects"
import { SECTION_ID as CONTACT_SECTION_ID } from "@features/HomePage/components/Contact"

import { makeStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Toolbar,
  Container,
  Hidden,
  Menu,
  MenuItem,
  Link,
} from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"
import { Link as GatsbyLink, IconButton } from "gatsby-theme-material-ui"

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "transparent",
    color: "#fff",
    boxShadow: "none",
  },
  hidden: {
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(1.5),
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
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles()
  const handleLinkClick = useSmoothScroll()
  const open = Boolean(anchorEl)

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

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
          <div>
            <Hidden implementation="css" xsDown className={classes.hidden}>
              <Link
                title="Start"
                color="inherit"
                href={"#" + HEADER_ID}
                onClick={handleLinkClick(HEADER_ID)}
              >
                Start
              </Link>
              <Link
                title="Projekty"
                color="inherit"
                href={"#" + PROJECTS_SECTION_ID}
                onClick={handleLinkClick(PROJECTS_SECTION_ID)}
              >
                Projekty
              </Link>
              <Link
                title="Kontakt"
                color="inherit"
                href={"#" + CONTACT_SECTION_ID}
                onClick={handleLinkClick(CONTACT_SECTION_ID)}
              >
                Kontakt
              </Link>
            </Hidden>
            <Hidden implementation="css" smUp>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleMenuClose}
                disableScrollLock
              >
                <MenuItem>
                  <Link
                    title="Start"
                    color="inherit"
                    underline="none"
                    className={classes.link}
                    href={"#" + HEADER_ID}
                    onClick={handleLinkClick(HEADER_ID)}
                  >
                    Start
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    title="Projekty"
                    color="inherit"
                    underline="none"
                    className={classes.link}
                    href={"#" + PROJECTS_SECTION_ID}
                    onClick={handleLinkClick(PROJECTS_SECTION_ID)}
                  >
                    Projekty
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    title="Kontakt"
                    color="inherit"
                    underline="none"
                    className={classes.link}
                    href={"#" + CONTACT_SECTION_ID}
                    onClick={handleLinkClick(CONTACT_SECTION_ID)}
                  >
                    Kontakt
                  </Link>
                </MenuItem>
              </Menu>
            </Hidden>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
