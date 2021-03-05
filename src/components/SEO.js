import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        {/* <meta name="image" content={image} /> */}
        {/* OpenGraph tags */}
        {/* <meta property="og:url" content={url} /> */}
        {/* {isBlogPost ? <meta property="og:type" content="article" /> : null} */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        {/* <meta property="og:image" content={image} /> */}
        {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:creator" content={seo.social.twitter} /> */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        {/* <meta name="twitter:image" content={image} /> */}
        /* source-sans-pro-regular - latin */
      </Helmet>
    </>
  );
}
