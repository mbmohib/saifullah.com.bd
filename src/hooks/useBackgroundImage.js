import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function GatsbyImageExtended(src = []) {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const matches = useMemo(
    () =>
      data.images.edges.filter(({ node }) => src.includes(node.relativePath)),
    [data, src]
  );

  return matches;
}
