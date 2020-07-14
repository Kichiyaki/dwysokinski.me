import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Divider } from "@material-ui/core"
import Layout from "@components/Layout/Layout"
import SEO from "@components/SEO"
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Technologies from "./components/Technologies/Technologies"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact"

const useStyles = makeStyles(theme => ({
  layout: {
    padding: 0,
  },
}))

const HomePage = ({ location }) => {
  const classes = useStyles()
  return (
    <Layout className={classes.layout} navbarProps={{ position: "absolute" }}>
      <SEO title="Strona główna" pathname={location.pathname} />
      <Header />
      <AboutMe />
      <Divider />
      <Technologies />
      <Projects />
      <Contact />
      <Divider />
    </Layout>
  )
}

export default HomePage
