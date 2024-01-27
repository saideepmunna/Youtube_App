import { useDispatch } from "react-redux";
import { API_KEY, YOUTUBE_VIDEOS_API } from "../utils/constants";
import { updateVideoCards } from "../utils/videosSlice";
import { useEffect } from "react";

const useFetchVideos = ()=>{
    const dispatch = useDispatch()

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json);
    
    dispatch(updateVideoCards(json?.items))

  };
  useEffect(() => {
    fetchVideos();
    
  }, []);
}


export default useFetchVideos;