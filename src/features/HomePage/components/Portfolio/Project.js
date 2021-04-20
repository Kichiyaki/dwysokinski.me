import React from 'react';
import PropTypes from 'prop-types';
import notFound from './not-found.jpg';

import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Link,
  Typography,
} from '@material-ui/core';
import BackgroundImage from 'gatsby-background-image';

function Project({
  title,
  description,
  technologies,
  github,
  live,
  img,
  fluid,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      {fluid ? (
        <BackgroundImage
          fluid={fluid}
          title={title}
          className={classes.cover}
        />
      ) : (
        <CardMedia image={img} title={title} className={classes.cover} />
      )}
      <CardContent className={classes.cardContent}>
        <div className={classes.contentContainer}>
          <Typography variant="h3" gutterBottom className={classes.title}>
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </div>
        <div className={classes.divider} />
        <div className={classes.technologies}>
          {technologies.map(technology => {
            return (
              <Chip key={technology} label={technology} color="secondary" />
            );
          })}
        </div>
        <div className={classes.buttons}>
          {github && (
            <Link underline="none" href={github}>
              <Button variant="contained" color="secondary">
                GitHub
              </Button>
            </Link>
          )}
          {live && (
            <Link underline="none" href={live}>
              <Button variant="contained" color="secondary">
                Online
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    minHeight: '400px',
    flexDirection: 'column',
    height: '100%',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  divider: {
    flex: 1,
  },
  title: {
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    '-ms-word-break': 'break-all',
    wordBreak: 'break-word',
    '-ms-hyphens': 'auto',
    '-moz-hyphens': 'auto',
    '-webkit-hyphens': 'auto',
    hyphens: 'auto',
  },
  contentContainer: {
    marginBottom: theme.spacing(8),
  },
  technologies: {
    marginBottom: theme.spacing(2),
    '& > *:not(:last-child)': {
      marginRight: theme.spacing(1),
    },
    '& > *': {
      marginBottom: theme.spacing(1),
    },
  },
  buttons: {
    '& > *:not(:last-child)': {
      marginRight: theme.spacing(1),
    },
    '& > *': {
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
  },
  cover: {
    width: '100%',
    paddingTop: '66.6666%',
  },
}));

Project.defaultProps = {
  title: '',
  description: '',
  technologies: [],
  github: '',
  live: '',
  img: notFound,
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  github: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Project;
