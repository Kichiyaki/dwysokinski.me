import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Container, Typography, Button } from "@material-ui/core"
import bg from "./header-bg.jpg"

const useStyles = makeStyles(theme => ({
  header: {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    clipPath: "polygon(0 0,100% 0,100% 88%,0 100%)",

    height: "100%",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      clipPath: "none",
    },
  },
  container: {
    textAlign: "center",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  textContainer: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(5),
  },
}))

function Header() {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <div>
          <div className={classes.textContainer}>
            <Typography gutterBottom variant="h1">
              Full Stack Web Developer
            </Typography>
            <Typography variant="h3">
              Tworzę aplikacje i strony internetowe.
            </Typography>
            <Typography gutterBottom variant="h3">
              Masz projekt, pomysł lub problem, który chcesz ze mną omówić?
            </Typography>
          </div>
          <Button variant="outlined" size="large">
            <Typography variant="h4">Skontaktuj się</Typography>
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default Header
