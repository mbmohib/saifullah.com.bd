import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/source-sans-pro-v14-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/source-sans-pro-v14-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/source-sans-pro-v14-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/source-sans-pro-v14-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/fonts/source-sans-pro-v14-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/source-sans-pro-v14-latin-regular.svg#SourceSansPro') format('svg'); /* Legacy iOS */
  }
  /* source-sans-pro-600 - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/source-sans-pro-v14-latin-600.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/source-sans-pro-v14-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/source-sans-pro-v14-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/source-sans-pro-v14-latin-600.woff') format('woff'), /* Modern Browsers */
        url('/fonts/source-sans-pro-v14-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/source-sans-pro-v14-latin-600.svg#SourceSansPro') format('svg'); /* Legacy iOS */
  }
  /* source-sans-pro-700 - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/source-sans-pro-v14-latin-700.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/source-sans-pro-v14-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/fonts/source-sans-pro-v14-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('/fonts/source-sans-pro-v14-latin-700.woff') format('woff'), /* Modern Browsers */
        url('/fonts/source-sans-pro-v14-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/fonts/source-sans-pro-v14-latin-700.svg#SourceSansPro') format('svg'); /* Legacy iOS */
  }

  :root {
    --bg-color: #ffffff;
    --text-color: rgba(0, 0, 0, 0.87);
    --light-color-1: #ffffff;
    --dark-color-1: rgba(0, 0, 0, 0.87);
    --dark-color-2: #cdcdcd;
    --primary-color: #3498db;
    --primary-font: 'Source Sans Pro', sans-serif;
    --normal-weight: 400;
    --bold-weight: 700;
    --light-weight: 300;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.6;
    text-size-adjust: none;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
  }
  body {
    font-family: var(--primary-font);
    color: var(--text-color);
    background-color: var(--bg-color);
    font-weight: var(--normal-weight);
  }
  p {
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: var(--primary-color);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--secondary-font);
    font-weight: var(--light-weight);
    margin-top: 1.2rem;
    margin-bottom: 0.625rem;
  }
  h1 {
    font-size: 1.912rem;
    line-height: 1.3;
  }
  h2 {
    font-size: 1.616rem;
  }
  h3 {
    font-size: 1.471rem;
  }
  h4 {
    font-size: 1.3rem;
  }
  h5 {
    font-size: 1.243rem;
  }
  h6 {
    font-size: 1.132rem;
  }
  img {
    max-width: 100%;
    margin: 1rem 0;
    height: auto;
  }
`;

export default GlobalStyle;
