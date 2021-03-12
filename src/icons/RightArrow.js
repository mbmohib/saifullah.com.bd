import React from "react";
import withSVG from "./withSVG";

function RightArrow() {
  return (
    <path
      fill="#1D7E7A"
      fillRule="evenodd"
      d="M1.438 11.5a.719.719 0 01.718-.719H19.11L14.585 6.26a.72.72 0 111.018-1.018l5.75 5.75a.718.718 0 010 1.018l-5.75 5.75a.72.72 0 01-1.018-1.018l4.524-4.522H2.156a.719.719 0 01-.719-.719z"
      clipRule="evenodd"
    ></path>
  );
}

export default withSVG(RightArrow, {
  viewBox: "0 0 23 23",
  width: "23",
  height: "23"
});
