import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Layout from "@components/Layout/Layout"
import SEO from "@components/SEO"
import Header from "./components/Header"

const useStyles = makeStyles(theme => ({
  layout: {
    padding: 0,
    minHeight: `100vh`,
  },
}))

const HomePage = ({ location }) => {
  const classes = useStyles()
  return (
    <Layout className={classes.layout} headerProps={{ position: "absolute" }}>
      <SEO title="Strona główna" pathname={location.pathname} />
      <Header />
    </Layout>
  )
}

export default HomePage
