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

function Project({ reverse }) {
  const classes = useStyles()
  return (
    <Card
      className={classnames(classes.card, {
        reverse: reverse,
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
            Projekt
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            tincidunt ligula eu ultricies ornare. Morbi nec eleifend sapien.
            Duis eu lorem tortor. Morbi consectetur hendrerit eros. Ut efficitur
            laoreet placerat. Phasellus dignissim non dui ac maximus. Etiam
            venenatis diam sed ligula consectetur viverra et vitae tortor. Donec
            faucibus viverra nulla vitae rutrum. Nam ornare erat magna, non
            sollicitudin justo venenatis in. Ut non metus vitae libero viverra
            elementum. Vestibulum iaculis mi eget libero hendrerit aliquet.
            Pellentesque nisl arcu, blandit a leo eget, semper porta mauris.
            Suspendisse vehicula congue mauris sit amet hendrerit. Fusce et arcu
            ligula. Fusce ut orci pharetra, consequat nibh eu, mollis augue.
            Nulla eu mi fermentum nulla dignissim porta id in purus.
          </Typography>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.technologies}>
          <Chip label="Technologia 1" color="secondary" />
          <Chip label="Technologia 2" color="secondary" />
          <Chip label="Technologia 3" color="secondary" />
        </div>
        <div className={classes.buttons}>
          <Button variant="contained" color="secondary">
            Github
          </Button>
          <Button variant="contained" color="secondary">
            Wersja online
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

Project.defaultProps = {
  reverse: false,
}

export default Project
