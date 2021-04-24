import isSmoothScrollSupported from '@utils/isSmoothScrollSupported';

const useSmoothScroll = () => {
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

export default useSmoothScroll;
