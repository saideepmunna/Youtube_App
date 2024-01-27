import {
  faBars,
  faBell,
  faMagnifyingGlass,
  faMicrophone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSlideBar from "../Hooks/useSlideBar";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cacheSearchResults } from "../utils/searchSlice";


const Header = () => {
  const { handleSlideBar, slideBarStatus } = useSlideBar();
  const [searchInput, setSearchInput] = useState("");
  const [videoSuggestions, setVideoSuggestions] = useState([]);
  const [displaySearchBox, setDisplaySearchBox] = useState(false);
  const dispatch = useDispatch();
  const cacheResults = useSelector((store) => store.search);

  // console.log(videoSuggestions);
  const fetchVideoSuggestions = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=" +
        searchInput
    );
    const json = await data.json();
    // console.log(json[1]);
    setVideoSuggestions(json[1]);
    dispatch(cacheSearchResults({ [searchInput]: json[1] }));
  };

  useEffect(() => {
    // Set a timer to delay the execution of fetchVideoSuggestions by 200 milliseconds
    const timer = setTimeout(() => {
      if (cacheResults[searchInput]) {
        // Don't make an API call when you find searchInput in reduc cacheResults
        setVideoSuggestions(cacheResults[searchInput]);
      } else {
        console.log("API CALL - " + searchInput);
        fetchVideoSuggestions();
      }
    }, 200);

    // Set a timer to delay the execution of fetchVideoSuggestions by 200 milliseconds

    return () => clearTimeout(timer);
  }, [searchInput]);

  

  return (
    <div>
      <div>
        <div className=" flex items-center justify-between pl-4 fixed z-50 bg-white w-full h-16">
          <div className="flex items-center">
            <div className="rounded-full w-12 h-12 flex justify-center items-center hover:bg-black hover:bg-opacity-5 cursor-pointer">
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </div>
            <Link to={"/"}>
              <div>
                <img
                  src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
                  alt="YT_logo"
                  className="w-32 h-16"
                />
              </div>
            </Link>
          </div>

          <div>
            <div className="flex items-center ml-28">
              <div
                className=""
                onFocus={() => setDisplaySearchBox(true)}
                onBlur={() =>
                  setTimeout(() => {
                    setDisplaySearchBox(false);
                  }, 300)
                }
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="py-2 px-5 w-[545px] rounded-s-full border border-black border-opacity-20"
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                  }}
                />
                {displaySearchBox && videoSuggestions?.length > 0 && (
                  <div className="fixed bg-white border border-gray-300 border-t-0 rounded-xl mt-[2px] w-[545px] py-5">
                    <ul>
                      {videoSuggestions.map((suggestion) => (
                        <Link to={"/results?search_query=" + suggestion} key={suggestion}>
                          <li
                            
                            className="flex items-center px-5 py-[4px] hover:bg-gray-100 cursor-default"
                
                          >
                            <div className="">
                              <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="font-light"
                              />
                            </div>
                            <p className="pl-4 font-medium">{suggestion}</p>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <Link to={"/results?search_query=" + searchInput}>
                <button
                  className="px-6 bg-black bg-opacity-5 py-2 rounded-e-full border border-black border-opacity-20 cursor-pointer"
                 
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </Link>

              <div className=" bg-black bg-opacity-5 rounded-full w-10 h-10 flex justify-center items-center m-4 ">
                <FontAwesomeIcon icon={faMicrophone} />
              </div>
            </div>
          </div>
          <div className="flex items-center ml-32 mr-7">
            <div className="m-7">
              <FontAwesomeIcon icon={faBell} className="text-xl" />
            </div>

            <div className="h-9 w-9  flex justify-center items-center rounded-full bg-purple-400">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
