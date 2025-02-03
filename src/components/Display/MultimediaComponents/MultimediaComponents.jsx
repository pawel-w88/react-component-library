import React from "react";
import "./MultimediaComponents.scss";
import { ImageSlider } from "../../Multimedia/ImageSlider";
import { VideoPlayer } from "../../Multimedia/VideoPlayer";
import { AudioPlayer } from "../../Multimedia/AudioPlayer";
import { Gallery } from "../../Multimedia/Gallery";

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
const videoSrc = "video.mp4"; // Ścieżka do pliku wideo
const audioSrc = "audio.mp3"; // Ścieżka do pliku audio

export const MultimediaComponents = () => {
  return (
    <div className="MultimediaComponents ">
      <h3>Image Slider Example</h3>
      <ImageSlider images={images} />
      <h3>Video Player Example</h3>
      <VideoPlayer src={videoSrc} />
      <h3>Audio Player Example</h3>
      <AudioPlayer src={audioSrc} />
      <h3>Gallery Example</h3>
      <Gallery images={images} />
    </div>
  );
};
