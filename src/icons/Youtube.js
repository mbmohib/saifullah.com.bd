import React from "react";
import withSVG from "./withSVG";

function Youtube() {
  return (
    <path
      fill="#1D7E7A"
      d="M25.457 3.276a3.22 3.22 0 00-.835-1.414 3.263 3.263 0 00-1.43-.825C21.164.5 13.012.5 13.012.5S4.876.487 2.827 1.037c-.54.15-1.03.434-1.427.826-.396.392-.683.879-.833 1.413A33.172 33.172 0 000 9.512c-.003 2.082.186 4.16.567 6.207.15.534.438 1.022.834 1.415.396.393.887.678 1.426.829 2.028.537 10.185.537 10.185.537s8.132 0 10.18-.537a3.276 3.276 0 001.43-.828c.396-.394.684-.881.835-1.416.373-2.046.555-4.127.542-6.207a33.424 33.424 0 00-.542-6.236zm-15.049 10.09V5.642l6.786 3.871-6.786 3.855z"
    ></path>
  );
}

export default withSVG(Youtube, {
  viewBox: "0 0 26 19",
  width: "26",
  height: "19"
});
