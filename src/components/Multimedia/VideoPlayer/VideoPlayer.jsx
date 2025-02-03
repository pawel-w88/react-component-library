import React from "react";

import "./VideoPlayer.scss";

export const VideoPlayer = ({ src }) => {
  return (
    <div className="VideoPlayer ">
      <video controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
