import React from 'react';
import { useSearchParams } from 'react-router-dom';

const VideoPlayer = () => {
    const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v")
  return (
    <div>
        <div>
      <iframe
        className="rounded-xl"
        width="625"
        height="355"
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