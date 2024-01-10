import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [ytVideos, setYtVideos] = useState(null);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
    setYtVideos(json?.items);
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  if (ytVideos === null) return <Shimmer />;
  else
    return (
      <div className="mt-10 pt-4 ml-4  grid grid-cols-3 gap-x-1 gap-y-8">
         {ytVideos.map((video) => (
          <VideoCard key={video.id} info={video} />
        ))} 
        
      </div>
    );
};

export default VideoContainer;
