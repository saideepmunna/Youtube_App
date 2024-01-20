import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY } from "../utils/constants";
import { setSearchResults } from "../utils/searchResultsSlice";
import { Link, useSearchParams } from "react-router-dom";
import VideoResultCard from "./VideoResultCard";

const SearchVideosContainer = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  console.log(searchQuery);
  const videoResultCards = useSelector(
    (store) => store?.searchresults?.searchResults
  );
  console.log(videoResultCards);
  const fetchSearchResults = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=s${searchQuery}&key=${API_KEY}`
    );
    const json = await data.json();
    dispatch(setSearchResults(json.items));
    // console.log(json);
  };

  useEffect(() => {
    fetchSearchResults();
    window.scrollTo(0,0);
  }, [searchQuery]);
  if(!videoResultCards) return null;
  return videoResultCards.map((resultCard)=><Link to={"/watch?v="+ resultCard.id.videoId} key={resultCard.id.videoId}><VideoResultCard  card={resultCard}/></Link>);
};

export default SearchVideosContainer;
