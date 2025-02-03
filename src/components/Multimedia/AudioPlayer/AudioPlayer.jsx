import React from "react";

import "./AudioPlayer.scss";

export const AudioPlayer = ({ src }) => {
  return (
    <div className="AudioPlayer ">
      <audio controls>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};
