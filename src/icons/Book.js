import React from "react";
import withSVG from "./withSVG";

function Book() {
  return (
    <path
      fill="#AFD1D1"
      d="M33.014 4.132C28.955.664 23.07.24 17.714.76c-6.239.612-12.535 2.688-16.458 4.42-.36.159-.665.415-.879.738A1.958 1.958 0 00.049 7v44c0 .335.087.664.253.958.165.293.403.542.693.723a2.116 2.116 0 001.968.139c3.635-1.6 9.49-3.534 15.164-4.08 5.806-.568 10.672.348 13.28 3.508.194.234.439.422.717.553a2.112 2.112 0 001.782 0c.278-.13.533-.318.716-.553 2.608-3.16 7.475-4.076 13.276-3.508 5.679.556 11.538 2.48 15.169 4.08a2.116 2.116 0 001.967-.139c.29-.18.539-.43.694-.723.165-.294.253-.623.253-.958V7c0-.384-.114-.76-.328-1.082a2.044 2.044 0 00-.88-.738C60.85 3.448 54.553 1.372 48.314.76c-5.357-.534-11.241-.016-15.3 3.372z"
    ></path>
  );
}

export default withSVG(Book, {
  viewBox: "0 0 66 53",
  width: "66",
  height: "53"
});