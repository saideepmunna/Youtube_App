import { faEllipsis, faShare, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const VideoDetails = () => {
  return (
    <div className="p-3 pl-28">
      <div >
          HELLO
      </div>
      <div className="flex justify-between">
        <div className="flex">
        <p> Channel Name</p>
        <button>Subscribe</button>
        </div>
        
        <div>
        <FontAwesomeIcon icon={faThumbsUp} />
        <FontAwesomeIcon icon={faThumbsDown} />
        </div>
        <button ><FontAwesomeIcon icon={faShare} />Share</button>
        <FontAwesomeIcon icon={faEllipsis} />

      </div>
    </div>
  )
}

export default VideoDetails;