import * as React from "react";

function Rectangle27(props) {
  return (
    <svg
      fill="#A21CAF"
      stroke="Rectangle27"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="45px"
      width="45px"
      opacity={0.5}
      {...props}
    >
      <rect x="1" y="1" width="22" height="22" rx="10" ry="10" /> {/* rx ve ry özellikleri eklenmiştir */}
    </svg>
  );
}

export default Rectangle27;
