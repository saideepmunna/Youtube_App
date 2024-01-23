import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";

const VideoResultCard = ({ card }) => {
//   console.log(card);
  const [videoStatistics, setVideoStatistics] = useState([])
  const { id, snippet  } = card;
  const { channelTitle, description, thumbnails, title } = snippet;
//   const {viewCount} = statistics;
const fetchStatistics = async()=>{
    const data = await fetch("https://www.googleapis.com/youtube/v3/videos?part=statistics&id="+id.videoId+"&key="+API_KEY);
    const json = await data.json();
    console.log(json.items);
    setVideoStatistics(json.items)

}
   useEffect(()=>{
    fetchStatistics()
   },[])
   if (!videoStatistics.length || !videoStatistics[0].statistics) return null;

   const viewCount =
    videoStatistics[0].statistics.viewCount >= 1000000
      ? (videoStatistics[0].statistics.viewCount / 1000000).toFixed(1) + "M views"
      : Math.floor(videoStatistics[0].statistics.viewCount / 1000) + "K views";
  return (
    <div className="mx-28 py-2" >
      <div className="flex">
        <div className="w-[36%]">
          <img src={thumbnails.high.url} alt="resultImg" className="h-[202px] w-[360px] object-cover rounded-xl" />
        </div>
        <div className="w-[64%]">
            <p className="font-medium text-lg ">{title}</p>
            <p className="text-black opacity-90 text-sm font-normal">{viewCount}</p>
            <p className="text-black opacity-90 text-base font-semibold mt-3">{channelTitle}</p>
            <p className="text-black opacity-90 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoResultCard;
