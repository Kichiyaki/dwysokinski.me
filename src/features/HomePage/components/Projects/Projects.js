import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Typography, Container } from "@material-ui/core"
import Section, { BG_COLOR } from "@components/Section"
import Project from "./Project"

const useStyles = makeStyles(() => ({
  section: {
    transform: "skewY(-4deg)",
    padding: "8rem 1.5rem",
    "& > *": {
      transform: "skewY(4deg)",
    },
  },
}))

function Projects() {
  const classes = useStyles()
  return (
    <Section className={classes.section} bgColor={BG_COLOR.PRIMARY}>
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Projekty
        </Typography>
        <Project />
        <Project reverse />
      </Container>
    </Section>
  )
}

export default Projects
