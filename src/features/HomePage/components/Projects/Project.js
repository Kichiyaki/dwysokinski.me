import React from "react"
import classnames from "classnames"

import { makeStyles } from "@material-ui/core/styles"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Link,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    minHeight: "400px",
    "&.reverse": {
      flexDirection: "row-reverse",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    width: "45%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  divider: {
    flex: 1,
  },
  contentContainer: {
    marginBottom: theme.spacing(8),
  },
  technologies: {
    marginBottom: theme.spacing(2),
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(1),
    },
    "& > *": {
      marginBottom: theme.spacing(1),
    },
  },
  buttons: {
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(1),
    },
    "& > *": {
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
  },
  cover: {
    width: "55%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 0,
      paddingTop: "56.25%",
    },
  },
}))

function Project({ reverse, title, description, technologies, github, live }) {
  const classes = useStyles()
  return (
    <Card
      className={classnames(classes.card, {
        reverse,
      })}
    >
      <CardMedia
        image="https://material-ui.com/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
        className={classes.cover}
      />
      <CardContent className={classes.cardContent}>
        <div className={classes.contentContainer}>
          <Typography variant="h3" gutterBottom>
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.technologies}>
          {technologies.map(technology => {
            return (
              <Chip key={technology} label={technology} color="secondary" />
            )
          })}
        </div>
        <div className={classes.buttons}>
          {github && (
            <Link underline="none" href={github}>
              <Button variant="contained" color="secondary">
                Github
              </Button>
            </Link>
          )}
          {live && (
            <Link underline="none" href={live}>
              <Button variant="contained" color="secondary">
                Wersja online
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

Project.defaultProps = {
  reverse: false,
}

export default Project
