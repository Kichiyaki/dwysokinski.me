import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Typography, Container, Link, Grid } from "@material-ui/core"
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  Facebook as FacebookIcon,
} from "@material-ui/icons"
import Section from "@components/Section"

const useStyles = makeStyles(theme => {
  return {
    typography: {
      display: "flex",
      alignItems: "center",
      wordBreak: "break-all",
      "& > *:not(:last-child)": {
        marginRight: theme.spacing(1),
      },
    },
    contactUrls: {
      "& > *:not(:last-child)": {
        marginBottom: theme.spacing(0.5),
      },
    },
  }
})

export const SECTION_ID = "contact"

function Contact() {
  const classes = useStyles()

  const linkProps = {
    underline: "hover",
    color: "secondary",
  }

  return (
    <Section size="small" id={SECTION_ID}>
      <Container maxWidth="md">
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={12} sm={6}>
            <Typography align="center" variant="h2">
              Kontakt
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.contactUrls}>
              <Typography className={classes.typography} variant="h6">
                <EmailIcon fontSize="large" />
                <Link href="mailto:dawidwysokinski000@gmail.com" {...linkProps}>
                  dawidwysokinski000@gmail.com
                </Link>
              </Typography>
              <Typography className={classes.typography} variant="h6">
                <GitHubIcon fontSize="large" />
                <Link href="https://github.com/Kichiyaki" {...linkProps}>
                  Kichiyaki
                </Link>
              </Typography>
              <Typography className={classes.typography} variant="h6">
                <FacebookIcon fontSize="large" />
                <Link
                  href="https://www.facebook.com/dawidwysokinski00"
                  {...linkProps}
                >
                  /dawidwysokinski00
                </Link>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}

export default Contact
