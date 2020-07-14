import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"
import { Link } from "gatsby-theme-material-ui"
import Layout from "@components/Layout/Layout"
import SEO from "@components/SEO"

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  layout: {
    padding: "0",
  },
}))

const NotFoundPage = ({ location }) => {
  const classes = useStyles()

  return (
    <Layout className={classes.layout} showHeader={false} showFooter={false}>
      <SEO
        title="Strona nie została znaleziona"
        description="Strona nie została znaleziona"
        pathname={location.pathname}
      />
      <Container className={classes.container}>
        <Typography gutterBottom variant="h1">
          Strona nie została znaleziona
        </Typography>
        <Typography gutterBottom variant="h4">
          Wygląda na to, że kliknąłeś niedziałający link lub wprowadziłeś adres
          URL, który nie istnieje.
        </Typography>
        <Typography variant="h4">
          <Link color="secondary" to="/">
            Wróć na stronę główną.
          </Link>
        </Typography>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
