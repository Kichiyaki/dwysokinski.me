const siteUrl = "https://dawid-wysokinski.pl"

module.exports = {
  siteMetadata: {
    title: `Dawid Wysokiński`,
    description: `Programista stron WWW & Full Stack Web Developer & Frontend Developer & Backend Developer.`,
    author: `@Dawid56143781`,
    authorFullName: "Dawid Wysokiński",
    email: "xyztojajestem@gmail.com",
    fb: "https://www.facebook.com/dawidwysokinski00",
    twitter: "https://twitter.com/Dawid56143781",
    github: "https://github.com/Kichiyaki",
    siteUrl,
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
        name: `Dawid Wysokiński`,
        short_name: `dw`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-theme-material-ui`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteUrl,
        sitemap: siteUrl + "/sitemap.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
