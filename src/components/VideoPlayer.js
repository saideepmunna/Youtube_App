import React from 'react';


const VideoPlayer = ({id}) => {
    
  return (
    <div>
        <div>
      <iframe
        className="rounded-xl"
        width="625"
        height="355"
        src={"https://www.youtube.com/embed/"+ id+"?autoplay=1&rel=0"}
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