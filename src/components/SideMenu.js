import { faArrowDownLong, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";

const SideMenu = () => {
    const slideBarState = useSelector(store=>store.slideBar.slideBarState);
    if(slideBarState) return null;
  return (
    <div>
        <div className="pt-[100px]">
        <ul className="flex flex-col h-screen fixed w-auto">
          <div className="flex flex-col items-center mb-6 cursor-pointer">
            <FontAwesomeIcon icon={faHouse} className="text-[18px]" />
            <li className="text-xs p-1">Home</li>
          </div>

          <div className="flex flex-col items-center mb-6 cursor-pointer">
            <img
              className="w-7"
              src="https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png"
              alt="shorts"
            />
            <li className="text-xs p-1">Shorts</li>
          </div>
          <div className="flex flex-col items-center mb-6 cursor-pointer" >
            <img
              className="w-5"
              src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png"
              alt="shorts"
            />
            <li className="text-xs p-1">Subscriptions</li>
          </div>
          <div className="flex flex-col items-center mb-6 cursor-pointer">
            <img
              className="w-5"
              src="https://static-00.iconduck.com/assets.00/youtube-music-icon-1023x1024-x2evdhhq.png"
              alt="shorts"
            />
            <li className="text-xs p-1">Youtube Music</li>
          </div>
          <div className="flex flex-col items-center mb-6 cursor-pointer">
          <img
              className="w-7"
              src="https://static.vecteezy.com/system/resources/previews/014/396/133/original/video-icon-with-rectangle-and-triangle-play-button-in-black-outline-style-vector.jpg"
              alt="shorts"
            />
            <li className="text-xs p-1">You</li>
          </div>
          
          <div className="flex flex-col items-center mb-6 cursor-pointer">
            <FontAwesomeIcon icon={faArrowDownLong} className="text-xl font-thin" />
            <li className="text-xs p-1">Downloads</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
