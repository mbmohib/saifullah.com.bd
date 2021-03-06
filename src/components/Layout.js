import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Header, Footer, SEO } from "./";
import { GlobalStyle, theme } from "../styles";
import { ThemeProvider } from "styled-components";

const LayoutWrapper = styled.div`
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  flex-grow: 1;
`;

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SEO title={title || data.site.siteMetadata.title} />
      <LayoutWrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
