import '@kichiyaki/roboto';

export const onRouteUpdate = ({ location }) => {
  if (
    process.env.NODE_ENV !== `production` ||
    typeof window.plausible !== `object`
  ) {
    return;
  }

  window.plausible('pageview');
};
