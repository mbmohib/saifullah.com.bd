import React from "react";
import withSVG from "./withSVG";

function DownArrowSmall() {
  return (
    <path
      fill="#1D7E7A"
      fillRule="evenodd"
      d="M0 .5l7 8 7-8H0z"
      clipRule="evenodd"
    ></path>
  );
}

export default withSVG(DownArrowSmall, {
  viewBox: "0 0 14 9",
  width: "14",
  height: "9"
});
