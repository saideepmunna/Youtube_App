import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import VideoDetails from "./VideoDetails";
import { useSearchParams } from 'react-router-dom';
import { API_KEY } from "../utils/constants";
import LiveChat from "./LiveChat";


const VideoPage = () => {
  // console.log(searchParams);
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState(null)

  const videoId = searchParams.get("v")
  const fetchVideoDetails=async()=>{
    const data= await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+videoId+"&key="+API_KEY);
    const json = await data.json();
    setVideoDetails(json.items)
    
  }
  useEffect(()=>{

    window.scrollTo(0,0);
    fetchVideoDetails();
  },[])
  if(!videoDetails) return;
  return (
    <div className="px-[102px] flex pt-[90px]">
      <div className="w-7/12">
      <VideoPlayer id={videoId} />
      <VideoDetails videoInfo={videoDetails}/>
      </div>
      <div className="w-5/12">
      <LiveChat  />

      </div>
    </div>
  );
};

export default VideoPage;
