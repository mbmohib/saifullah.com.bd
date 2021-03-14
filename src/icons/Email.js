import React from "react";
import withSVG from "./withSVG";

function Email() {
  return (
    <path
      fill="#1D7E7A"
      d="M33.1 20.55V3.45A2.846 2.846 0 0030.25.6H3.631a2.846 2.846 0 00-2.85 2.85v17.1a2.846 2.846 0 002.85 2.85H30.25a2.846 2.846 0 002.85-2.85zM30.611 3.241c.627.627.285 1.273-.057 1.596l-7.714 7.068 7.41 7.714c.228.266.38.684.114.969-.247.304-.817.285-1.064.095l-8.303-7.087-4.066 3.705-4.047-3.705-8.303 7.087c-.247.19-.817.209-1.064-.095-.266-.285-.114-.703.114-.969l7.41-7.714-7.714-7.068c-.342-.323-.684-.969-.057-1.596.627-.627 1.273-.323 1.805.133l11.856 9.576 11.875-9.576c.532-.456 1.178-.76 1.805-.133z"
    ></path>
  );
}

export default withSVG(Email, {
  viewBox: "0 0 34 24",
  width: "34",
  height: "24"
});
