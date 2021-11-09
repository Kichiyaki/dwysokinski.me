const DOMAIN = process.env.DOMAIN;
const SITE_URL = 'https://' + DOMAIN;

module.exports = {
  siteMetadata: {
    title: `Dawid Wysokiński | Full Stack Web Developer`,
    description: `Dawid Wysokiński - Full Stack Web Developer | Back End Developer | Front End Developer | Golang Developer | React Developer | JavaScript Developer`,
    authorTwitter: `@Dawid56143781`,
    authorFullName: 'Dawid Wysokiński',
    siteUrl: SITE_URL,
    email: 'contact@dwysokinski.me',
    github: 'https://github.com/Kichiyaki',
    facebook: 'https://www.facebook.com/dawidwysokinski00',
    domain: DOMAIN,
    plausibleCustomDomain: process.env.PLAUSIBLE_CUSTOM_DOMAIN,
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
  ],
};
