const DOMAIN = 'dwysokinski.me';
const SITE_URL = 'https://' + DOMAIN;

module.exports = {
  siteMetadata: {
    title: `Dawid Wysokiński | Full Stack Web Developer`,
    description: `Dawid Wysokiński - Full Stack Web Developer | Backend Developer | Frontend Developer | Go Developer | React Developer | Node.js Developer`,
    authorTwitter: `@Dawid56143781`,
    authorFullName: 'Dawid Wysokiński',
    siteUrl: SITE_URL,
    email: 'contact@dwysokinski.me',
    github: 'https://github.com/Kichiyaki',
    domain: DOMAIN,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: DOMAIN,
        short_name: `dw`,
        start_url: `/`,
        background_color: `#303030`,
        theme_color: `#303030`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Montserrat`,
                variants: [`300`],
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: SITE_URL,
        sitemap: SITE_URL + '/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: `@kichiyaki/gatsby-plugin-plausible`,
      options: {
        domain: DOMAIN,
        customDomain: process.env.PLAUSIBLE_CUSTOM_DOMAIN,
      },
    },
  ],
};
