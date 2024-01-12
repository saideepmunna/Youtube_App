import React from "react";
import { useSearchParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import VideoSuggestions from "./VideoSuggestions";
import VideoDetails from "./VideoDetails";

const VideoPage = () => {
  // console.log(searchParams);
  return (
    <div className="flex">
      <div>
      <VideoPlayer />
      <VideoDetails />
      </div>
      <div>
      <VideoSuggestions />

      </div>
    </div>
  );
};

export default VideoPage;
