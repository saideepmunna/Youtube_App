import React from 'react'
import { Navigate, useSearchParams } from 'react-router-dom';

const VideoSuggestions = () => {
  const [searchParams, setSearchparams] = useSearchParams();
  console.log(searchParams.get("v"))
  return (
    <div className="pl-9">VideoSuggestions</div>
  )
}

export default VideoSuggestions;