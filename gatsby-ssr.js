import React from 'react';

export const onRenderBody = ({ setHeadComponents, ...rest }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  const plausibleDomain = process.env.PLAUSIBLE_CUSTOM_DOMAIN ?? 'plausible.io';
  const domain = process.env.DOMAIN ?? 'localhost';

  const scriptProps = {
    async: true,
    defer: true,
    'data-domain': domain,
    src: `https://${plausibleDomain}/js/plausible.js`,
  };

  return setHeadComponents([
    // <link
    //   key="gatsby-plugin-plausible-preconnect"
    //   rel="preconnect"
    //   href={`https://${plausibleDomain}`}
    // />,
    <script key="plausible-script" {...scriptProps} />,
    <script
      key="plausible-custom-events"
      dangerouslySetInnerHTML={{
        __html: `
          window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };
          `,
      }}
    />,
  ]);
};
