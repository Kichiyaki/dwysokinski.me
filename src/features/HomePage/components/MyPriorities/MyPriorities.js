import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Container, Typography, Grid } from "@material-ui/core"
import Section from "@components/Section"
import speedIcon from "./speed.svg"
import responsiveIcon from "./responsive.svg"
import securityIcon from "./security.svg"
import intuitiveIcon from "./intuitive.svg"

const useStyles = makeStyles(() => ({
  icon: {
    width: 128,
    height: 128,
  },
  container: {
    textAlign: "center",
  },
}))

function MyPriorities() {
  const classes = useStyles()
  return (
    <Section>
      <Container className={classes.container}>
        <Typography align="center" variant="h2" gutterBottom>
          Moje priorytety
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <img className={classes.icon} src={speedIcon} alt="Szybkość" />
            <Typography variant="h5">Szybkość</Typography>
            <Typography>
              Szybki czas ładowania & brak opóźnień przy interakcjach.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <img
              className={classes.icon}
              src={responsiveIcon}
              alt="Responsywność"
            />
            <Typography variant="h5">Responsywność</Typography>
            <Typography>
              Wygląd strony dopasowany do wszystkich urządzeń.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <img
              className={classes.icon}
              src={securityIcon}
              alt="Bezpieczeństwo"
            />
            <Typography variant="h5">Bezpieczeństwo</Typography>
            <Typography>Brak luk w zabezpieczeniach.</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <img
              className={classes.icon}
              src={intuitiveIcon}
              alt="Intuicyjność"
            />
            <Typography variant="h5">Intuicyjność</Typography>
            <Typography>Intuicyjny interfejs użytkownika.</Typography>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}

export default MyPriorities
