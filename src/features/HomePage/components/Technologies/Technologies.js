import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import Section from '@components/Section';
import Technology from './Technology';

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
              fixed(height: 40, quality: 100) {
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
        <div className={classes.grid}>
          <div className={classes.hide}></div>
          <div>
            <Technology
              fixed={findIcon('technologies/html5.png')}
              name="HTML"
            />
          </div>
          <div className={classes.hide}></div>
          <div>
            <Technology fixed={findIcon('technologies/css.png')} name="CSS" />
          </div>
          <div className={classes.hide}></div>
          <div>
            <Technology fixed={findIcon('technologies/scss.png')} name="SCSS" />
          </div>
          <div className={classes.hide}></div>
          <div>
            <Technology
              fixed={findIcon('technologies/js.png')}
              name="JavaScript"
            />
          </div>
          <div className={classes.hide}></div>
          <div>
            <Technology
              fixed={findIcon('technologies/typescript.png')}
              name="TypeScript"
            />
          </div>
          <div className={classes.hide}></div>
          <div>
            <Technology
              fixed={findIcon('technologies/react.png')}
              name="React"
            />
          </div>

          <div className={classes.hide}></div>
          <div>
            <Technology
              fixed={findIcon('technologies/gatsby.png')}
              name="Gatsby"
            />
          </div>
          <div className={classes.hide}></div>
          <div>
            <Technology
              fixed={findIcon('technologies/nextjs.png')}
              name="Next.JS"
            />
          </div>
          <div className={classes.hide}></div>
          <div>
            <Technology fixed={findIcon('technologies/jest.png')} name="Jest" />
          </div>
          <div className={classes.hide}></div>
          <div>
            <Technology
              fixed={findIcon('technologies/express.png')}
              name="Express"
            />
          </div>
          <div className={classes.hide}></div>
          <div>
            <Technology
              fixed={findIcon('technologies/nest.png')}
              name="Nest.JS"
            />
          </div>
          <div className={classes.hide}></div>
          <div>
            <Technology
              fixed={findIcon('technologies/strapi.png')}
              name="Strapi"
            />
          </div>
          <div className={classes.hide}></div>
          <div>
            <Technology
              fixed={findIcon('technologies/ghost.png')}
              name="Ghost"
            />
          </div>

          <div className={classes.hide}></div>
          <div>
            <Technology
              fixed={findIcon('technologies/graphql.png')}
              name="GraphQL"
            />
          </div>
          <div className={classes.hide}></div>
          <div>
            <Technology
              fixed={findIcon('technologies/golang.png')}
              name="Golang"
            />
          </div>
          <div className={classes.hide}></div>
          <div>
            <Technology
              fixed={findIcon('technologies/gqlgen.png')}
              name="gqlgen"
            />
          </div>
          <div className={classes.hide}></div>
          <div>
            <Technology
              fixed={findIcon('technologies/golang.png')}
              name="Gin"
            />
          </div>
          <div className={classes.hide}></div>
          <div>
            <Technology
              fixed={findIcon('technologies/postgresql.png')}
              name="PostgreSQL"
            />
          </div>
          <div className={classes.hide}></div>
          <div>
            <Technology
              fixed={findIcon('technologies/docker.png')}
              name="Docker"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: `repeat(13, minmax(max-content, 1fr));`,
    gap: theme.spacing(1, 1),
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: `repeat(6, minmax(max-content, 1fr));`,
      '& > div:last-child': {
        gridColumnStart: '3',
        gridColumnEnd: 'span 2',
        display: 'flex',
        justifyContent: 'center',
        '& > div': {
          width: `calc(50% - ${theme.spacing(1)}px)`,
        },
      },
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: `repeat(3, minmax(max-content, 1fr));`,
      '& > div:last-child': {
        display: 'block',
        gridColumnStart: '2',
        gridColumnEnd: '2',
        '& > div': {
          width: 'auto',
        },
      },
    },
  },
  hide: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

export default Technologies;
