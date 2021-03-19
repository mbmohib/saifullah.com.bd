import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Header, Footer, SEO } from './';

export default function Layout({ title, children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <>
      <SEO title={title || data.site.siteMetadata.title} />
      <div className="layout">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </>
  );
}
