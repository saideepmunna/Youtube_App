import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateVideoCards } from "../utils/videosSlice";
import useFetchVideos from "../Hooks/useFetchVideos";

const VideoContainer = () => {
  // const [ytVideos, setYtVideos] = useState(null);

  const ytVideos = useSelector(store=>store?.videosList?.videoCards)
  useFetchVideos();
  if (ytVideos === null) return <Shimmer />;
    return (
      <div className="mt-10 pt-3 ml-4  grid grid-cols-3 gap-x-4 gap-y-8">
        {ytVideos.map((video) => (
          <Link to={"/watch?v="+ video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    );
};

export default VideoContainer;
