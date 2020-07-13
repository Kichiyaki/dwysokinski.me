import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import { Container, Typography, Grid } from "@material-ui/core"
import Section from "@components/Section"
import Technology from "./Technology"

const useStyles = makeStyles(theme => ({
  hide: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}))

function AboutMe() {
  const classes = useStyles()
  const {
    html5Icon,
    cssIcon,
    scssIcon,
    jsIcon,
    reactIcon,
    apolloIcon,
    webpackIcon,
    parcelIcon,
    jestIcon,
    strapiIcon,
    ghostIcon,
    golangIcon,
    gqlgenIcon,
    postgresqlIcon,
    dockerIcon,
    expressIcon,
    nextjsIcon,
  } = useStaticQuery(
    graphql`
      query {
        html5Icon: file(relativePath: { eq: "technologies/html5.png" }) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        cssIcon: file(relativePath: { eq: "technologies/css.png" }) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        scssIcon: file(relativePath: { eq: "technologies/scss.png" }) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        jsIcon: file(relativePath: { eq: "technologies/js.png" }) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        reactIcon: file(relativePath: { eq: "technologies/react.png" }) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        apolloIcon: file(relativePath: { eq: "technologies/apollo.png" }) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        webpackIcon: file(relativePath: { eq: "technologies/webpack.png" }) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        parcelIcon: file(relativePath: { eq: "technologies/parcel.webp" }) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        jestIcon: file(relativePath: { eq: "technologies/jest.png" }) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        strapiIcon: file(relativePath: { eq: "technologies/strapi.jpeg" }) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        ghostIcon: file(relativePath: { eq: "technologies/ghost.png" }) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        golangIcon: file(relativePath: { eq: "technologies/golang.png" }) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        gqlgenIcon: file(relativePath: { eq: "technologies/gqlgen.png" }) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        postgresqlIcon: file(
          relativePath: { eq: "technologies/postgresql.png" }
        ) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        dockerIcon: file(relativePath: { eq: "technologies/docker.webp" }) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        expressIcon: file(relativePath: { eq: "technologies/express.png" }) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        nextjsIcon: file(relativePath: { eq: "technologies/nextjs.png" }) {
          childImageSharp {
            fixed(height: 45, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <Section>
      <Container>
        <Typography align="center" variant="h2" gutterBottom>
          Używane przeze mnie technologie / narzędzia
        </Typography>
        <Grid container spacing={2} alignItems="stretch">
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology fixed={html5Icon.childImageSharp.fixed} name="HTML" />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology fixed={cssIcon.childImageSharp.fixed} name="CSS" />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology fixed={scssIcon.childImageSharp.fixed} name="SCSS" />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={jsIcon.childImageSharp.fixed}
              name="JavaScript"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology fixed={reactIcon.childImageSharp.fixed} name="React" />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={apolloIcon.childImageSharp.fixed}
              name="Apollo"
            />
          </Grid>

          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={webpackIcon.childImageSharp.fixed}
              name="Webpack"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={parcelIcon.childImageSharp.fixed}
              name="Parcel"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology fixed={jestIcon.childImageSharp.fixed} name="Jest" />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={nextjsIcon.childImageSharp.fixed}
              name="Next.JS"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={expressIcon.childImageSharp.fixed}
              name="Express"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={strapiIcon.childImageSharp.fixed}
              name="Strapi"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>

          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology fixed={ghostIcon.childImageSharp.fixed} name="Ghost" />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={golangIcon.childImageSharp.fixed}
              name="Golang"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={gqlgenIcon.childImageSharp.fixed}
              name="gqlgen"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology fixed={golangIcon.childImageSharp.fixed} name="Gin" />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={postgresqlIcon.childImageSharp.fixed}
              name="PostgreSQL"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={dockerIcon.childImageSharp.fixed}
              name="Docker"
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}

export default AboutMe
