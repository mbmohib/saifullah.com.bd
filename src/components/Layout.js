import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Header, Footer } from "./";
import { GlobalStyle } from "../styles";

const LayoutWrapper = styled.div`
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  flex-grow: 1;
`;

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <GlobalStyle />
          <LayoutWrapper>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Main>{children}</Main>
            <Footer />
          </LayoutWrapper>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

// /* source-sans-pro-regular - latin */
// @font-face {
//   font-family: 'Source Sans Pro';
//   font-style: normal;
//   font-weight: 400;
//   font-display: swap;
//   src: url('../fonts/source-sans-pro-v14-latin-regular.eot'); /* IE9 Compat Modes */
//   src: local(''),
//        url('../fonts/source-sans-pro-v14-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
//        url('../fonts/source-sans-pro-v14-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
//        url('../fonts/source-sans-pro-v14-latin-regular.woff') format('woff'), /* Modern Browsers */
//        url('../fonts/source-sans-pro-v14-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
//        url('../fonts/source-sans-pro-v14-latin-regular.svg#SourceSansPro') format('svg'); /* Legacy iOS */
// }
// /* source-sans-pro-600 - latin */
// @font-face {
//   font-family: 'Source Sans Pro';
//   font-style: normal;
//   font-weight: 600;
//   font-display: swap;
//   src: url('../fonts/source-sans-pro-v14-latin-600.eot'); /* IE9 Compat Modes */
//   src: local(''),
//        url('../fonts/source-sans-pro-v14-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
//        url('../fonts/source-sans-pro-v14-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
//        url('../fonts/source-sans-pro-v14-latin-600.woff') format('woff'), /* Modern Browsers */
//        url('../fonts/source-sans-pro-v14-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
//        url('../fonts/source-sans-pro-v14-latin-600.svg#SourceSansPro') format('svg'); /* Legacy iOS */
// }
// /* source-sans-pro-700 - latin */
// @font-face {
//   font-family: 'Source Sans Pro';
//   font-style: normal;
//   font-weight: 700;
//   font-display: swap;
//   src: url('../fonts/source-sans-pro-v14-latin-700.eot'); /* IE9 Compat Modes */
//   src: local(''),
//        url('../fonts/source-sans-pro-v14-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
//        url('../fonts/source-sans-pro-v14-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
//        url('../fonts/source-sans-pro-v14-latin-700.woff') format('woff'), /* Modern Browsers */
//        url('../fonts/source-sans-pro-v14-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
//        url('../fonts/source-sans-pro-v14-latin-700.svg#SourceSansPro') format('svg'); /* Legacy iOS */
// }
