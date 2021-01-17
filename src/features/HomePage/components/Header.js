import React from 'react';
import useSmoothScroll from '@libs/useSmoothScroll';
import { SECTION_ID } from './Contact';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button, Link } from '@material-ui/core';
import bg from './header-bg.jpg';

export const HEADER_ID = 'start';

function Header() {
  const classes = useStyles();
  const handleLinkClick = useSmoothScroll();
  return (
    <header id={HEADER_ID} className={classes.header}>
      <Container className={classes.container}>
        <div>
          <div className={classes.textContainer}>
            <Typography gutterBottom variant="h1">
              Full Stack Web Developer
            </Typography>
            <Typography variant="h3">
              I create websites and web apps.
            </Typography>
            <Typography gutterBottom variant="h3">
              Have an idea, a project or a problem you would like to discuss?
            </Typography>
          </div>
          <Link
            underline="none"
            to={'#' + SECTION_ID}
            onClick={handleLinkClick(SECTION_ID)}
          >
            <Button variant="outlined" size="large">
              <Typography variant="h4">Get in touch</Typography>
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  );
}

const useStyles = makeStyles(theme => ({
  header: {
    minHeight: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    clipPath: 'polygon(0 0,100% 0,100% 80vh,0 100%)',

    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      clipPath: 'none',
    },
  },
  container: {
    textAlign: 'center',
    height: '100%',
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(1),
    },
  },
  textContainer: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(5),
  },
}));

export default Header;
