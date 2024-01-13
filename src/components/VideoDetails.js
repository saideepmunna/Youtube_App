import {
  faEllipsis,
  faShare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import useFetchVideos from "../Hooks/useFetchVideos";
import { useSearchParams } from "react-router-dom";

const VideoDetails = () => {
  useFetchVideos();
  // const videoId = useSelector(store=>store?.videosList?.videoId);
  const videoList = useSelector((store) => store?.videosList?.videoCards);
  const [searchParams] = useSearchParams();

  if (videoList === null) return;

  const paramsVideoId = searchParams.get("v");

  const currentVideo = videoList.filter((video) => video.id === paramsVideoId);
  const { snippet, statistics } = currentVideo[0];

  console.log(currentVideo);

  // console.log(videoId);
  return (
    <div className="py-2">
      <div className="font-bold text-xl">{snippet?.title}</div>
      <div className="flex justify-between pt-2">
        <div className="flex items-center">
          <p className="font-semibold">{snippet?.channelTitle}</p>
          <button className="px-3 py-1 bg-black text-white mx-4 rounded-2xl font-semibold">
            Subscribe
          </button>
        </div>

        <div className="flex items-center px-4 py-1 rounded-3xl bg-black bg-opacity-5">
          <div className="flex items-center mr-6 pr-2 border-r-2">
            <FontAwesomeIcon icon={faThumbsUp} className="text-xl opacity-70" />
            <p className="ml-1 font-semibold">
              {statistics?.likeCount >= 100000
                ? (statistics?.likeCount / 1000).toFixed() + "K"
                : statistics?.likeCount}
            </p>
          </div>

          <FontAwesomeIcon icon={faThumbsDown} className="text-xl opacity-70" />
        </div>
        
        <button className="flex items-center  px-4 py-1 rounded-3xl bg-black bg-opacity-5">
          <FontAwesomeIcon icon={faShare} className="text-xl opacity-70 mr-2" />
           <p className="font-semibold">Share</p>
        </button>
        <div className="flex justify-center items-center p-3 rounded-full bg-black bg-opacity-5">
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
