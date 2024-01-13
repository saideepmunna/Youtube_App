import React from "react";
import { useSearchParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import VideoSuggestions from "./VideoSuggestions";
import VideoDetails from "./VideoDetails";

const VideoPage = () => {
  // console.log(searchParams);
  return (
    <div className="px-[102px] flex pt-[90px]">
      <div className="w-7/12">
      <VideoPlayer />
      <VideoDetails />
      </div>
      <div className="w-5/12">
      <VideoSuggestions  />

      </div>
    </div>
  );
};

export default VideoPage;
