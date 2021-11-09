import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import ogThumbnail from '@images/og_thumbnail.png';

function Seo({ description, lang, meta, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            authorTwitter
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title ?? site.siteMetadata.title}
      titleTemplate={title ? `%s | ${site.siteMetadata.title}` : '%s'}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}${pathname}`,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}${ogThumbnail}`,
        },
        {
          property: `og:image:width`,
          content: `400`,
        },
        {
          property: `og:image:height`,
          content: `400`,
        },
        {
          property: `og:image`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: `en`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.authorTwitter,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:url`,
          content: `${site.siteMetadata.siteUrl}${pathname}`,
        },
        {
          name: `twitter:image`,
          content: `${site.siteMetadata.siteUrl}${ogThumbnail}`,
        },
        {
          name: `twitter:image:alt`,
          content: site.siteMetadata.title,
        },
      ].concat(meta)}
    >
      <link
        rel="canonical"
        content={`${site.siteMetadata.siteUrl}${pathname}`}
      />
    </Helmet>
  );
}

Seo.defaultProps = {
  lang: `pl`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export default Seo;
