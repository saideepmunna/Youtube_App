import {
  faEllipsis,
  faShare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CommentsContainer from "./CommentsContainer";

const VideoDetails = ({videoInfo}) => {
  const { id, snippet, statistics } = videoInfo[0];
  const [showDisplay, setShowDisplay] = useState(false)
  if(!videoInfo) return;

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

        <div className="flex items-center px-4 py-1 rounded-3xl bg-black bg-opacity-5 cursor-pointer">
          <div className="flex items-center mr-6 pr-2 border-r-2">
            <FontAwesomeIcon icon={faThumbsUp} className="text-xl opacity-70" />
            {
              <p className="ml-1 font-semibold">
                {statistics?.likeCount >= 1000000
                  ? (statistics?.likeCount / 1000000).toFixed(1) + "M"
                  : statistics?.likeCount >= 100000 &&
                    statistics?.likeCount < 1000000
                  ? (statistics?.likeCount / 1000).toFixed() + "K"
                  : statistics?.likeCount < 100000 &&
                    statistics?.likeCount >= 10000
                  ? (statistics?.likeCount / 1000).toFixed() + "K"
                  : statistics?.likeCount >= 1000 &&
                    statistics?.likeCount < 10000
                  ? (statistics?.likeCount / 1000).toFixed(1) + "K"
                  : statistics?.likeCount}
              </p>
            }
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
      <div className="bg-black bg-opacity-5 py-3 px-3 my-4 whitespace-pre-line rounded-xl cursor-default">
        <p className="font-semibold text-sm">{statistics?.viewCount} views</p>
        <p className="font-[450] text-sm">{(snippet?.description).slice(0,100)}</p>
        {showDisplay&&<div>
          <p className="font-[450] text-sm">{(snippet?.description).slice(101)}</p>
          </div>}
         <p onClick={()=>{setShowDisplay(!showDisplay)}} className="text-sm font-semibold mt-1 cursor-pointer hover:bg-black hover:bg-opacity-10 p-1 rounded-lg w-fit">{showDisplay?"show less": "...more"}</p>
      </div>
      <h1 className="font-bold my-3 text-xl">Comments</h1>
      <CommentsContainer/>
    </div>
  );
};

export default VideoDetails;
