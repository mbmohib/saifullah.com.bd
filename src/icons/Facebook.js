import React from "react";
import withSVG from "./withSVG";

function Facebook() {
  return (
    <path
      fill="#1D7E7A"
      d="M7.076 20.998v-9.562h3.226l.48-3.743H7.075V5.308c0-1.08.3-1.82 1.851-1.82h1.965V.15A26.059 26.059 0 008.014.002c-2.851 0-4.81 1.74-4.81 4.936v2.748H0v3.743h3.212V21h3.864z"
    ></path>
  );
}

export default withSVG(Facebook, {
  viewBox: "0 0 11 21",
  width: "11",
  height: "21"
});
