import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import projects from './projects';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid } from '@material-ui/core';
import Section, { BG_COLOR } from '@components/Section';
import Project from './Project';

const useStyles = makeStyles(theme => ({
  section: {
    transform: 'skewY(-7deg)',
    padding: '8rem 0',
    margin: '6rem 0',
    '& > *': {
      transform: 'skewY(7deg)',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '3rem 0',
    },
  },
  gridItem: {
    [theme.breakpoints.up(750)]: {
      flexGrow: 0,
      flexBasis: '50%',
      maxWidth: '50%',
    },
  },
}));

export const SECTION_ID = 'portfolio';

function Portfolio() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    {
      allCoverImages: allFile(
        filter: { absolutePath: { regex: "/projects/" } }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              id
              fluid(maxWidth: 1280) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Section
      id={SECTION_ID}
      className={classes.section}
      bgColor={BG_COLOR.PRIMARY}
    >
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          My work
        </Typography>
        <Grid container spacing={3}>
          {projects.map(project => {
            let fluid = undefined;
            if (project.fluid) {
              const edge = data.allCoverImages.edges.find(
                img => img.node.relativePath === project.fluid
              );
              if (edge) {
                fluid = edge.node.childImageSharp.fluid;
              }
            }

            return (
              <Grid
                key={project.title}
                item
                xs={12}
                className={classes.gridItem}
              >
                <Project {...project} fluid={fluid} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Section>
  );
}

export default Portfolio;
