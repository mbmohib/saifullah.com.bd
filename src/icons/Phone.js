import React from "react";
import withSVG from "./withSVG";

function Phone() {
  return (
    <path
      fill="#AFD1D1"
      d="M17.334 15.895l2.24-1.927a2.32 2.32 0 011.098-.505 2.523 2.523 0 011.24.093l2.729.937c.398.14.74.377.982.683A1.7 1.7 0 0126 16.213v4.3c-.002.253-.064.502-.18.732-.118.231-.288.44-.5.612a2.252 2.252 0 01-.74.394 2.493 2.493 0 01-.859.112C4.601 21.34.743 7.406.013 2.073a1.62 1.62 0 01.091-.778c.094-.25.248-.482.453-.677.205-.196.456-.353.736-.459.28-.106.583-.16.89-.159H7.01c.43.001.851.113 1.207.322.357.208.632.503.792.848l1.09 2.348c.16.338.2.71.117 1.067a1.794 1.794 0 01-.588.946L7.39 7.457s1.289 7.51 9.944 8.438z"
    ></path>
  );
}

export default withSVG(Phone, {
  viewBox: "0 0 26 33",
  width: "26",
  height: "33"
});
