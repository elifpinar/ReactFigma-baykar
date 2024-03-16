import * as React from "react";

function PlayCircle(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="24px"
      width="24px"
      style={{ marginRight: '5px' }}
      {...props}
    >
      <path d="M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z" />
    </svg>
  );
}

export default PlayCircle;