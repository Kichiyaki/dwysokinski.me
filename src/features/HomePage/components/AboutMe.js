import React from "react"

import { Container, Typography } from "@material-ui/core"
import Section from "@components/Section"

function AboutMe() {
  return (
    <Section>
      <Container>
        <Typography align="center" variant="h2" gutterBottom>
          O mnie
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          porttitor, neque et pellentesque mattis, quam felis tempor risus, id
          porta lacus nulla ac ipsum. Etiam turpis felis, vehicula non porttitor
          sed, mattis in sapien. Integer pretium tempor mi. Nullam placerat
          auctor arcu, eu condimentum ex. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Suspendisse eget
          lorem finibus, tempus elit non, consectetur quam. Fusce eget nisl
          eros. Proin ligula ante, vestibulum nec metus quis, pharetra aliquam
          orci. Pellentesque at dolor sodales, maximus erat eu, cursus libero.
          Phasellus cursus, augue laoreet convallis varius, neque tellus sodales
          nibh, sed condimentum dui turpis id felis.
        </Typography>
      </Container>
    </Section>
  )
}

export default AboutMe
