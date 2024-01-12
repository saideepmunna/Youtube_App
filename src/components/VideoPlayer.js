import React from 'react';
import { useSearchParams } from 'react-router-dom';

const VideoPlayer = () => {
    const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v")
  return (
    <div>
        <div className="pt-24 pl-28">
      <iframe
        className="rounded-xl"
        width="630"
        height="360"
        src={"https://www.youtube.com/embed/"+ videoId+"?autoplay=1&rel=0"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  )
}

export default VideoPlayer;