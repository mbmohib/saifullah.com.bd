import React from "react";
import withSVG from "./withSVG";

function Logo() {
  return (
    <>
      <path fill="url(#pattern0)" d="M0 0.44H47V70.52H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.02128 0 0 .01427 0 -.02)"
            xlinkHref="#image0"
          ></use>
        </pattern>
        <image
          id="image0"
          width="47"
          height="73"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </>
  );
}

export default withSVG(Logo, {
  viewBox: "0 0 47 71",
  width: "47",
  height: "71"
});
