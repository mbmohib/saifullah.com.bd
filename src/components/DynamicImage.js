import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled, { css } from "styled-components";
import { space, layout } from "styled-system";
import { Image } from "./";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Img = styled(GatsbyImage)`
  max-width: 100%;

  ${({ center }) =>
    center &&
    css`
      margin: 0 auto;
      display: block;
    `};

  ${space};
  ${layout};
`;

export default function GatsbyImageExtended({ src, ...rest }) {
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
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
      }
    }
  `);

  const match = useMemo(
    () => data.images.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  );

  if (!match) return null;

  const { node: { childImageSharp, publicURL, extension } = {} } = match;

  if (extension === "svg" || !childImageSharp) {
    return <Image src={publicURL} {...rest} />;
  }

  return <Img image={childImageSharp.gatsbyImageData} {...rest} />;
}
