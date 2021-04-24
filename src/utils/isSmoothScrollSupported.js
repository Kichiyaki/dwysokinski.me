const isSmoothScrollSupported = () =>
  'scrollBehavior' in document.documentElement.style;

export default isSmoothScrollSupported;
