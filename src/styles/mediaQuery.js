import { css } from "styled-components";
import { breakpoints } from "./theme";

const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  const emSize = breakpoints[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export default media;
