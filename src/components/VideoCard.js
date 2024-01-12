import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { id, snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;

  return (
    <div>
     
        <div>
          <div >
            <img
              src={thumbnails?.standard?.url}
              alt="video_Thumbnail"
              className="h-52 w-full object-cover rounded-xl"
            />
          </div>
          <p className="font-semibold text-medium">{title}</p>
          <p className="text-black opacity-90 text-sm">{channelTitle}</p>
          <p className="text-black opacity-90 text-sm">
            {viewCount >= 1000000
              ? (viewCount / 1000000).toFixed(1) + "M views"
              : Math.floor(viewCount / 1000) + "K views"}
          </p>
        </div>
    </div>
  );
};

export default VideoCard;
