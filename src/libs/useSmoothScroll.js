import isSmoothScrollSupported from '@utils/isSmoothScrollSupported';

export default () => {
  return id => e => {
    if (isSmoothScrollSupported()) {
      e.preventDefault();
      document.querySelector('#' + id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };
};
