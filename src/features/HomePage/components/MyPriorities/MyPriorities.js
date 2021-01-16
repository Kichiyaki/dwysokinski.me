import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Container, Typography, Grid } from "@material-ui/core"
import Section from "@components/Section"
import speedIcon from "./speed.svg"
import responsiveIcon from "./responsive.svg"
import securityIcon from "./security.svg"
import intuitiveIcon from "./intuitive.svg"

function MyPriorities() {
  const classes = useStyles()
  return (
    <Section>
      <Container className={classes.container}>
        <Typography align="center" variant="h2" gutterBottom>
          My priorities
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <img
              className={classes.icon}
              src={responsiveIcon}
              alt="Responsiveness"
            />
            <Typography variant="h4">Responsiveness</Typography>
            <Typography>
              I create websites that look good on all devices.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <img
              className={classes.icon}
              src={intuitiveIcon}
              alt="Intuitiveness"
            />
            <Typography variant="h4">Intuitiveness</Typography>
            <Typography>An easy-to-use & user-friendly interface.</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <img className={classes.icon} src={speedIcon} alt="Szybkość" />
            <Typography variant="h4">Performance</Typography>
            <Typography>Fast load times & lag free interaction.</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <img className={classes.icon} src={securityIcon} alt="Security" />
            <Typography variant="h4">Security</Typography>
            <Typography>
              I use tried-and-tested tools and techniques that help me keep the
              website safe.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}

const useStyles = makeStyles(theme => ({
  icon: {
    width: 128,
    height: 128,
    [theme.breakpoints.down("md")]: {
      width: 96,
      height: 96,
    },
  },
  container: {
    textAlign: "center",
  },
}))

export default MyPriorities
