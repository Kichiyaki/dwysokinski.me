import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import Section from '@components/Section';
import Technology from './Technology';

const useStyles = makeStyles(theme => ({
  hide: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

function Technologies() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    {
      allIcons: allFile(filter: { absolutePath: { regex: "/technologies/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              id
              fixed(height: 45, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  const findIcon = path => {
    const edge = data.allIcons.edges.find(
      img => img.node.relativePath === path
    );
    if (edge) {
      return edge.node.childImageSharp.fixed;
    }
    return {};
  };

  return (
    <Section>
      <Container>
        <Typography align="center" variant="h2" gutterBottom>
          Technologies / tools I use
        </Typography>
        <Grid container spacing={2} alignItems="stretch">
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={findIcon('technologies/html5.png')}
              name="HTML"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology fixed={findIcon('technologies/css.png')} name="CSS" />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology fixed={findIcon('technologies/scss.png')} name="SCSS" />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={findIcon('technologies/js.png')}
              name="JavaScript"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={findIcon('technologies/typescript.png')}
              name="TypeScript"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={findIcon('technologies/react.png')}
              name="React"
            />
          </Grid>

          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={findIcon('technologies/gatsby.png')}
              name="Gatsby"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={findIcon('technologies/nextjs.png')}
              name="Next.JS"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology fixed={findIcon('technologies/jest.png')} name="Jest" />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={findIcon('technologies/express.png')}
              name="Express"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={findIcon('technologies/strapi.png')}
              name="Strapi"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={findIcon('technologies/ghost.png')}
              name="Ghost"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>

          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={findIcon('technologies/graphql.png')}
              name="GraphQL"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={findIcon('technologies/golang.png')}
              name="Golang"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={findIcon('technologies/gqlgen.png')}
              name="gqlgen"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={findIcon('technologies/golang.png')}
              name="Gin"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={findIcon('technologies/postgresql.png')}
              name="PostgreSQL"
            />
          </Grid>
          <Grid item className={classes.hide} lg={1}></Grid>
          <Grid item xs={6} sm={4} md={2} lg={1}>
            <Technology
              fixed={findIcon('technologies/docker.png')}
              name="Docker"
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default Technologies;
