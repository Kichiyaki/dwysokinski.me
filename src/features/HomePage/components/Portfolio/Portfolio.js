import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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

const projects = [
  {
    title: 'TWHelp',
    description:
      'A stat tracking and tools website, scripts, a public GraphQL API and a Discord bot for the browser-based game Tribal Wars.',
    technologies: [
      'GraphQL',
      'Golang',
      'gqlgen',
      'Gin',
      'discordgo',
      'robfig/cron',
      'Redis',
      'PostgreSQL',
      'TypeScript',
      'React',
      'Gatsby',
      'Material-UI',
      'Create React App',
      'Apollo',
      'Parcel',
      'Docker',
      'Traefik',
    ],
    github: 'https://github.com/tribalwarshelp',
    fluid: 'projects/twhelp.png',
    live: 'https://tribalwarshelp.com/',
  },
  {
    title: 'Zdam Egzamin Zawodowy',
    description:
      'A mobile and web app for practising the theoretical part of the vocational exam.',
    technologies: [
      'GraphQL',
      'Golang',
      'gqlgen',
      'Gin',
      'PostgreSQL',
      'TypeScript',
      'React',
      'React Native',
      'Next.JS',
      'Material-UI',
      'Apollo',
    ],
    github: '',
    fluid: 'projects/zdam.png',
    live: 'https://zdamegzaminzawodowy.pl/',
  },
  {
    title: 'dwysokinski.me',
    description: '',
    technologies: ['React', 'Gatsby', 'Material-UI'],
    github: 'https://github.com/Kichiyaki/dwysokinski.me',
    live: 'https://dwysokinski.me',
    fluid: 'projects/dw.png',
  },
  {
    title: 'OLX Crawler',
    description: 'An app written in Go to observe olx.pl ads.',
    technologies: [
      'Golang',
      'Colly',
      'SQLite3',
      'Echo',
      'React',
      'Material-UI',
    ],
    fluid: 'projects/olx.png',
    github: 'https://github.com/Kichiyaki/olx-crawler',
  },
  {
    title: 'Instaling.pl Bot',
    description: 'A bot that solves the instaling.pl vocabulary test for you.',
    technologies: ['Golang', 'Lorca'],
    fluid: 'projects/instaling.png',
    github: 'https://github.com/Kichiyaki/Instaling-Bot',
  },
  {
    title: 'Margonem Mini Bot',
    description:
      'A bot for the mobile client of the browser-based MMORPG game Margonem.',
    technologies: ['Golang', 'Colly'],
    fluid: 'projects/margonem.png',
    github: 'https://github.com/Kichiyaki/margonem-mini-bot',
  },
  {
    title: 'Akademia Młodego Inżyniera',
    description: '',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    live: 'https://dwysokinski.me/preview/akademia/',
    fluid: 'projects/amz.png',
  },
  {
    title: 'Freshline',
    description: '',
    technologies: ['Wordpress', 'CSS', 'Bootstrap'],
    live: 'http://fresh-line.pl/',
    fluid: 'projects/freshline.png',
  },
];

export default Portfolio;
